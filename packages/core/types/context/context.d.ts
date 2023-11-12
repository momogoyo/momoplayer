import type { ElementTypes } from '@/types';
import type { Context } from './types';
export declare const getContext: () => any;
export declare const createContext: (element: ElementTypes) => any;
export declare const provider: <T>(callback: (context: Context) => T) => T;
