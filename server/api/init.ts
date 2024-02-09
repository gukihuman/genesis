import axios from "axios"
import { setGlobalData } from "../serverStore"
export default defineEventHandler(async (event) => {
    try {
        const xClientId = process.env.X_CLIENT_ID
        const res = await axios.get(
            "https://test.gnzs.ru/oauth/get-token.php",
            {
                headers: {
                    "X-Client-Id": xClientId,
                },
            }
        )
        setGlobalData("accessToken", res.data.access_token)
        setGlobalData("baseDomain", res.data.base_domain)
        console.log(
            "Access Token and Base Domain successfully set in a server store."
        )
        return "Access Token and Base Domain successfully set on a server."
    } catch (error) {
        console.error("API call failed:", error)
        return "Internal Server Error"
    }
})
