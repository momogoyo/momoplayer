export declare const loadMedia: () => {
    load: () => HTMLVideoElement | import("hls.js").default;
    play: () => void;
    pause: () => void;
} | {
    load: () => import("dashjs").MediaPlayerClass;
    play: () => void;
    pause: () => void;
} | {
    load: () => HTMLMediaElement;
    play: () => void;
    pause: () => void;
};
