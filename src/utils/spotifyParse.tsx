import { Track, Playlist, PlaylistItem } from "./types";

interface Artist {
    name: string
}

interface AlbumCover {
    url: string,
    height: number,
    width: number,
}

// get current state, parse json to get track
export async function getCurrentTrack(): Promise<Track | undefined> {
    try {
        const response = await fetch('/api/spotify/getCurrentState', { cache: 'no-store' });
        if (!response.ok) {
            throw new Error('Failed to get current Spotify state.');
        }
        const data = await response.json();

        if (data.is_playing === false) {
            return undefined;
        }

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

// get playlists
export async function getPlaylists(): Promise<Array<Playlist>> {
    try {
        const response = await fetch('/api/spotify/getPlaylists');
        if (!response.ok) {
            throw new Error('Failed to get Spotify playlists.');
        }
        const data = await response.json();

        const { items } = data;
        const playlists: Array<Playlist> = [];
        items.forEach((item: PlaylistItem) => {
            const image = item.images[0];
            const name = item.name;
            const owner = item.owner;
            playlists.push({ image, name, owner: owner.display_name });
        })

        return playlists;
    } catch (error) {
        console.error('Error getting current Spotify state:', error);
        throw error;
    }
}