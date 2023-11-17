/// <reference types="react" />
import type { Context } from '@/context/types';
interface ContainerProps {
    context: Context;
    mediaComponent: JSX.Element;
}
declare const Container: ({ context, mediaComponent }: ContainerProps) => import("preact").JSX.Element;
export default Container;
