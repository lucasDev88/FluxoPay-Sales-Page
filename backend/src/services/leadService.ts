import { supabase } from "../database/supabase";

export async function emailExists(email: string): Promise<boolean> {
    const { data, error } = await supabase
        .from("leads")
        .select("id")
        .eq("email", email)
        .maybeSingle();

    if (error) {
        throw error;
    }

    return !!data;
}

export async function createLead(name: string, email: string, source: string) {
    const { data, error } = await supabase
        .from("leads")
        .insert([
            {
                name,
                email,
                source
            }
        ])
        .select();

    if (error) {
        throw error;
    }

    return data;
}

export async function getLeads() {
    const { data, error } = await supabase
        .from("leads")
        .select("*");

    if (error) {
        throw error;
    }

    return data;
}

export async function deleteLead(id: number): Promise<boolean> {
    const { data: lead } = await supabase
        .from("leads")
        .select("id")
        .eq("id", id)
        .maybeSingle();

    if (!lead) {
        return false;
    };

    const { error } = await supabase
        .from("leads")
        .delete()
        .eq("id", id);

    if (error) {
        throw error;
    }

    return true;
}

export async function getStats() {
    const { count, error } = await supabase
        .from("leads")
        .select("*",
            {
                count: "exact",
                head: true
            }
        )

    if (error) {
        throw error;
    }

    return {
        totalLeads: count ?? 0
    }
}