export interface Configs {
    source: string;
    autoplay?: boolean;
    muted?: boolean;
    loop?: boolean;
    volume?: number;
    spatial?: boolean;
    ui?: boolean;
}
export declare const defineConfig: (config: Configs) => void;
