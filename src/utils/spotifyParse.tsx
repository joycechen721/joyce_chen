import Track from "./types";

interface Artist {
    name: string
}

interface AlbumCover {
    url: string,
    height: number,
    width: number,
}

// get current state, parse json to get track
export async function getCurrentTrack(): Promise<Track> {
    try {
        const response = await fetch('/api/spotify/getCurrentState');
        if (!response.ok) {
            throw new Error('Failed to get current Spotify state.');
        }
        const data = await response.json();

        const { item } = data;
        const { name, artists, album, external_urls } = item;
        const url = external_urls.spotify;

        const artistNames: string[] = [];
        artists.forEach((artist: Artist) => {
            artistNames.push(artist.name);
        })

        const albumName = album.name;
        const albumCover: AlbumCover = album.images[0];

        const res: Track = { name, artistNames, albumName, albumCover, url }

        return res;
    } catch (error) {
        console.error('Error getting current Spotify state:', error);
        throw error;
    }
}