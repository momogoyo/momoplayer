export declare const createCommands: () => (command: any) => {
    source: string;
    autoplay?: boolean;
    muted?: boolean;
    controls?: boolean;
    loop?: boolean;
    volume?: number;
    spatial?: boolean;
    mediaType?: "audio" | "video" | "hls" | "dash";
};
