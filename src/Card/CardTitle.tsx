import { children, JSXElement } from "solid-js";

export interface CardTitleProps {
    children: JSXElement
    className?: string
}

export function CardTitle(props: CardTitleProps) {

    const childs = children(() => props.children);
    return <div class="pf-c-card__title">
        {childs}
    </div>
}