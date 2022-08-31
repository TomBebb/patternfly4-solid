import { children, JSXElement } from "solid-js";

export interface CardFooterProps {
    children: JSXElement
    className?: string
}

export function CardFooter(props: CardFooterProps) {

    const childs = children(() => props.children);
    return <div class="pf-c-card__footer">
        {childs}
    </div>
}