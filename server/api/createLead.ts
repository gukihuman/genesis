import axios from "axios"
import { getGlobalData } from "../serverStore"
export default defineEventHandler(async (event) => {
    try {
        const accessToken = getGlobalData("accessToken")
        const baseDomain = getGlobalData("baseDomain")
        if (!accessToken)
            throw new Error("accessToken is not set in server store.")
        if (!baseDomain)
            throw new Error("baseDomain is not set in server store.")
        const body = [{ name: "Сделка" }]
        const leads = "/api/v4/leads"
        const res = await axios.post(`https://${baseDomain}${leads}`, body, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`,
            },
        })
        return res.data._embedded.leads[0]
    } catch (error) {
        console.error("API call failed:", error)
        return "Internal Server Error: " + error
    }
})
