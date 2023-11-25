import Hls from 'hls.js';
import Dash from 'dashjs';
export declare const createRender: () => void;
export declare const loadHls: (source: string, mediaElement: HTMLMediaElement) => Hls;
export declare const loadDash: (source: string, mediaElement: HTMLMediaElement) => Dash.MediaPlayerClass;
export declare const loadHTMLMedia: (mediaElement: HTMLMediaElement) => void;
