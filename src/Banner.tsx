import { children, JSXElement } from "solid-js"

export type BannerVariant = 'default' | 'info' | 'danger' | 'success' | 'warning';
export interface BannerProps {
    children: JSXElement
    isSticky?: boolean
    variant?: BannerVariant
}

export function Banner(props: BannerProps) {
    const childs = children(() => props.children)

    return <div
        classList={{
            'pf-c-banner': true,
            ['pf-m-'+(props.variant ?? 'default')]: true
        }}
    >
        {childs}

    </div>
}