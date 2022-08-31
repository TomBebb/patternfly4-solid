import { children, JSXElement } from "solid-js";

export interface CardHeaderProps {
    children: JSXElement
    className?: string
}

export function CardHeader(props: CardHeaderProps) {

    const childs = children(() => props.children);
    return <div class="pf-c-card__header">
        {childs}
    </div>
}