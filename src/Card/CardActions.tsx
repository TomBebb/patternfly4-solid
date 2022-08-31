import { children, JSXElement } from "solid-js";

export interface CardActionsProps {
    children: JSXElement
    className?: string
    hasNoOffset?:boolean
}

export function CardActions(props: CardActionsProps) {

    const childs = children(() => props.children);
    return <div class="pf-c-card__actions">
        {childs}
    </div>
}