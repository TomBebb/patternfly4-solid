import { children, JSXElement } from "solid-js";

export interface CardBodyProps {
    children: JSXElement
    className?: string
}

export function CardBody(props: CardBodyProps) {

    const childs = children(() => props.children);
    return <div class="pf-c-card__body">
        {childs}
    </div>
}