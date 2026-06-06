import axios from "axios";

export const api = axios.create({
    baseURL: "https://fluxopay-sales-page-production.up.railway.app/api"
});

export async function createLead(
    name: string,
    email: string
) {
    const response = await api.post("/leads", {
        name,
        email,
        source: "landing-page"
    })

    return response.data;
}