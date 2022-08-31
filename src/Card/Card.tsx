import { children, JSXElement } from "solid-js"

export interface CardProps {
    isCompact?: boolean
    isExpanded?: boolean
    isFlat?: boolean
    isFullHeight?: boolean
    isLarge?: boolean
    isPlain?: boolean
    isRounded?: boolean
    isSelected?: boolean
    isSelectable?: boolean
    isFullWidth?: boolean
    children:  JSXElement
}

export function Card(props: CardProps) {
    const childs = children(() => props.children)
    return <div
        classList={{
            'pf-c-card': true,
            'pf-m-display-lg': props.isCompact,
            'pf-m-selectable-raised': props.isSelectable,
            'pf-m-selected-raised': props.isSelected,
            'pf-m-flat': props.isFlat,
            'pf-m-rounded': props.isRounded,
            'pf-m-full-height': props.isFullHeight
        }}
            style={{width: props.isFullWidth ? '100%':'auto'}}
            >
            {childs}
    </div>
}