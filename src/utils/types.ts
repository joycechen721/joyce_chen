export default interface Track {
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
