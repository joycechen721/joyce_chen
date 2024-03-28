import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import { getPlaylists } from '@/utils/spotifyHelpers';

// get playlists
export async function GET(req: NextRequest, res: NextResponse) {
    const response = await getPlaylists();

    if (!response) {
        return NextResponse.json({ error: 'Unable to connect to Spotify.' }, { status: 500 });
    }
    if (response.status === 204 || response.status > 400) {
        return NextResponse.json({ is_playing: false }, { status: 200 });
    }
    const data = await response.json();

    return NextResponse.json(data, { status: 200 });
}