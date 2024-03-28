export interface Track {
    name: string;
    artistNames: Array<string>;
    albumName: string;
    albumCover: AlbumCover;
    url: string
}

export interface AlbumCover {
    url: string;
    height: number;
    width: number;
}

export interface Owner {
    id: string;
    display_name: string;
}

export interface PlaylistItem {
    images: Array<PlaylistImage>;
    name: string;
    owner: Owner;
}

export interface PlaylistImage {
    url: string;
    height: number;
    width: number;
}

export interface Playlist {
    image: PlaylistImage;
    name: string;
    owner: string;
}