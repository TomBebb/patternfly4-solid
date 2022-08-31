import { children, createMemo, JSXElement, Show } from "solid-js";
import { Dynamic } from 'solid-js/web';

export type AvatarSize = 'sm' | 'md' | 'lg' | 'xl';
export type AvatarBorder = 'light' | 'dark';
export interface AvatarProps {
    alt?: string
    size?: AvatarSize
    border?: AvatarBorder
    className?: string
    src: string
}

export default function Avatar(props: AvatarProps) {


    return <img src={props.src} alt={props.alt} classList={{
        'pf-c-avatar': true,
        ['pf-m-' + props.border]: true,
        ['pf-m-' + props.size]: true,
    }} />
}