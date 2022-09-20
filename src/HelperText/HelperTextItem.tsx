import { children, Component, createMemo, JSXElement, Show } from "solid-js";

import { FaSolidCircleCheck , FaSolidCircleExclamation, FaSolidTriangleExclamation, FaSolidCircleInfo, FaSolidBell } from "solid-icons/fa";
import { IconProps } from "solid-icons";
import { Dynamic } from "solid-js/web";
export type HelperTextItemVariant = 'default' | 'indeterminate' | 'warning' | 'success' | 'error'


export interface HelperTextItemProps {
    children: JSXElement
    hasIcon?: boolean

    icon?: JSXElement
    variant?: HelperTextItemVariant
}


const faIconsPerVariant: Record<HelperTextItemVariant, Component<IconProps>> = {
    indeterminate: FaSolidCircleInfo,
    default: FaSolidBell,
    success: FaSolidCircleCheck,
    warning: FaSolidTriangleExclamation,
    error: FaSolidCircleExclamation,
  };
export function HelperTextItem(props: HelperTextItemProps) {
    const childs = children(() => props.children);

    return <div classList={{
        "pf-c-helper-text__item": true,
        ["pf-m-"+(props.variant ?? 'default')]: true
    }}>
        <Show when={props.hasIcon}>
            <span class="pf-c-helper-text__item-icon">
                <Dynamic component={faIconsPerVariant[props.variant ?? 'default']} />
            </span>
        </Show>
        <span class="pf-c-helper-text__item-text">

            {childs}
        </span>
    </div>
}