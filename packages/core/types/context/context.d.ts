import type { Config } from '@/types';
import type { Context } from './types';
export declare const getContext: () => any;
export declare const createContext: (element: HTMLElement, config: Config) => any;
export declare const provider: <T>(callback: (context: Context) => T) => T;
