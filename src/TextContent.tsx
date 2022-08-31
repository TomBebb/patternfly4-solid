import { children, JSXElement } from 'solid-js';

export interface TextContentProps {
    children: JSXElement 
}

export function TextContent(props: TextContentProps) {
    const c = children(() => props.children);
    return <div class="pf-c-content">
        {c()}
  </div>;
}