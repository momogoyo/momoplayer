export interface Config {
    source: string;
    autoplay?: boolean;
    muted?: boolean;
    controls?: boolean;
    loop?: boolean;
    volume?: number;
    spatial?: boolean;
    mediaType?: 'hls' | 'dash' | 'video' | 'audio';
}
export declare const defaultConfig: {
    source: string;
    autoplay: boolean;
    muted: boolean;
    controls: boolean;
    loop: boolean;
    volume: number;
    spatial: boolean;
    mediaType: string;
};
