import { children, JSXElement } from "solid-js";

export interface CardHeaderMainProps {
    children: JSXElement
    className?: string
}

export function CardHeaderMain(props: CardHeaderMainProps) {

    const childs = children(() => props.children);
    return <div class="pf-c-card__header-main">
        {childs}
    </div>
}