import { children, JSXElement } from "solid-js";

export interface BadgeProps {
    children: JSXElement
    className?: string
    isRead?: boolean
}
export function Badge(raw: BadgeProps) {
    const childs = children(() => raw.children);
    return <span classList={{
        "pf-c-badge": true,
        ["pf-m-"+(raw.isRead ? 'read' : 'unread')]: true 
    }}>999+</span>
}