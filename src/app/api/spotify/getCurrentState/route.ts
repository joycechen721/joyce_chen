import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import { getCurrentState } from '@/utils/spotifyHelpers';

// get currently playing track
export async function GET(req: NextRequest, res: NextResponse) {
    const response = await getCurrentState();

    if (!response) {
        return NextResponse.json({ error: 'Unable to connect to Spotify.' }, { status: 500 });
    }
    if (response.status === 204 || response.status > 400) {
        return NextResponse.json({ is_playing: false }, { status: 200 });
    }
    const data = await response.json();

    return NextResponse.json(data, { status: 200 });
}

export const revalidate = 0;
