import {  children, createMemo, JSXElement } from 'solid-js';
import { Dynamic,  } from 'solid-js/web';
import { HeadingLevel } from './misc';

export type HeadingLevelSize = 	'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';

const headingLevelSizeDefaults: Record<HeadingLevel, HeadingLevelSize> = {
    h1: '2xl',
    h2: 'xl',
    h3: 'lg',
    h4: 'md',
    h5: 'md',
    h6: 'md',
}

export interface TitleProps {
    headingLevel: HeadingLevel
    size?: HeadingLevelSize
    children: JSXElement
    className?: string
}

export function Title(props: TitleProps) {
    const c = children(() => props.children);
    const classes = createMemo(() => [
        
        'pf-c-title',
        'pf-m-'+(props.size ?? headingLevelSizeDefaults[props.headingLevel]).toString()
    ])
    return <Dynamic component={props.headingLevel} class={classes().join(' ')+' '+props.className??''}>
        {c()}
    </Dynamic>
    
}