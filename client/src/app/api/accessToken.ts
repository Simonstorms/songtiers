import querystring from "querystring";

export default async function getAccessToken() {
    // These values should ideally be environment variables
    const client_id = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
    const client_secret = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET;

    try {
        const response = await fetch("https://accounts.spotify.com/api/token", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                Authorization: `Basic ${btoa(`${client_id}:${client_secret}`)}`,
            },
            body: "grant_type=client_credentials",
        });
        const data = await response.json();
        if (response.ok) {
            return data.access_token;
        } else {
            console.error("Error:", data);
            throw new Error("Failed to retrieve access token");
        }
    } catch (error) {
        console.error("Request failed:", error);
        return null;
    }
}
