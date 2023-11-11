export interface Config {
    source: string;
    autoplay?: boolean;
    muted?: boolean;
    loop?: boolean;
    volume?: number;
    spatial?: boolean;
    ui?: boolean;
}
export declare const defineConfig: (config: Config) => any;
