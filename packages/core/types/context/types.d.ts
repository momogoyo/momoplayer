import type { ElementTypes, Config } from '@/types';
export interface Instance {
    config: Config;
    version: string;
    commands: () => void;
    ui: () => void;
    spatial: () => void;
}
export interface Context {
    uid: number;
    element: ElementTypes;
    instance: Instance;
}
