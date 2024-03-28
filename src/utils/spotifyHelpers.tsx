// helper functions for spotify api controllers
const tokenEndpoint = 'https://accounts.spotify.com/api/token';
const apiEndpoint = 'https://api.spotify.com/v1';

const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, SPOTIFY_REFRESH_TOKEN } = process.env;
const basicEncoded = Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString('base64');

// get access token
const getAccessToken = async () => {
    const params = new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: SPOTIFY_REFRESH_TOKEN!,
    });
    const body = params.toString();
    const response = await fetch(tokenEndpoint, {
        method: 'POST',
        headers: {
            Authorization: `Basic ${basicEncoded}`,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        cache: 'no-store',
        body,
    });
    const data = await response.json();
    return data;
};

// get current playback state
export const getCurrentState = async () => {
    const tokenRes = await getAccessToken();
    const { access_token } = tokenRes;

    // return promise
    const data = fetch(`${apiEndpoint}/me/player`, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    });
    return data;
};