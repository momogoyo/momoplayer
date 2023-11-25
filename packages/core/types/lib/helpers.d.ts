export declare const createObject: <T extends object, P extends object>(proto: T, props: P) => any;
export declare const checkMediaType: (source: string) => "audio" | "video";
export declare const isHlsExtension: (source: string) => boolean;
export declare const isDashExtension: (source: string) => boolean;
