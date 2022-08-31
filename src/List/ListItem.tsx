import { children, JSXElement } from "solid-js";

export interface ListItemProps {
    icon?: JSXElement
    children: JSXElement
}

export function ListItem(props: ListItemProps) {
    const childs = children(() => props.children);
    return <li>
        {childs}
    </li>
}