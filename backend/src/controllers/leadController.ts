import { Request, Response } from "express";
import { isValidEmail } from "../utils/emailVerifier";
import { emailExists, createLead, getLeads, deleteLead, getStats } from "../services/leadService";
import { sendLeadEmail } from "../utils/emailSender";

export async function LeadCreate(
    req: Request,
    res: Response
) {
    try {
        const { name, email, source } = req.body;

        if (!name || !email || !source) {
            return res.status(400).json({
                error: "Name, email, or source is missing"
            })
        }

        if (!isValidEmail(email)) {
            return res.status(400).json({
                error: "Invalid email format"
            })
        }

        const exists = await emailExists(email);

        if (exists) {
            throw new Error("EMAIL_ALREADY_EXISTS");
        }

        const data = await createLead(name, email, source);

        try {
            await sendLeadEmail(name, email, source);
        } catch (emailError) {
            console.error("Erro ao enviar email: ", emailError);
        }

        return res.status(201).json({
            message: "Lead created successfully",
            data
        });
    } catch (err) {
        
        if (
            err instanceof Error &&
            err.message === "EMAIL_ALREADY_EXISTS"
        ) {
            return res.status(409).json({
                error: "Email already exists"
            })
        }

        return res.status(500).json({
            error: "Internal Server Error"
        })
    }
}

export async function LeadList(
    req: Request,
    res: Response
) {
    try {
        const data = await getLeads();

        return res.json(data);
    } catch (err) {
        return res.status(500).json({
            error: "Internal Server Error"
        })
    }
}

export async function LeadDelete(
    req: Request,
    res: Response
) {
    try {
        const { id } = req.params;

        if (!id) {
            return res.status(400).json({
                error: "ID is missing"
            })
        }

        const leadId = Number(id);

        if (isNaN(leadId)) {
            return res.status(400).json({
                error: "Invalid ID"
            })
        }

        const success = await deleteLead(leadId);

        if (!success) {
            return res.status(404).json({
                error: "Lead not found"
            })
        }

        return res.json({
            message: "Lead deleted successfully"
        });
    } catch (err) {
        return res.status(500).json({
            error: "Internal Server Error"
        })
    }
}

export async function LeadStats(
    req: Request,
    res: Response
) {
    try {
        const stats = await getStats();

        return res.json(stats);
    } catch (err) {
        return res.status(500).json({
            error: "Internal Server Error"
        })
    }
}