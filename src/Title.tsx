
import '@patternfly/patternfly/components/Title/title.css'
import '@patternfly/patternfly/patternfly-base.css'
import { Accessor, children, createMemo, JSXElement } from 'solid-js';
import { Dynamic,  } from 'solid-js/web';

export type HeadingLevelSize = 	'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

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
}

export default function Title(props: TitleProps) {
    const c = children(() => props.children);
    const classes = createMemo(() => [
        
        'pf-c-title',
        'pf-m-'+(props.size ?? headingLevelSizeDefaults[props.headingLevel]).toString()
    ])
    return <Dynamic component={props.headingLevel} class={classes().join(' ')}>
        {c()}
    </Dynamic>
    
}