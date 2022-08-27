
import '@patternfly/patternfly/components/Button/button.css'

import { children, createMemo, JSXElement, Show } from "solid-js";
import { Dynamic } from 'solid-js/web';
export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'danger' | 'warning' | 'link' | 'plain' | 'control'
export type ButtonType = 'button' | 'submit' | 'reset';
export type IconPosition = 'left' | 'right';
export interface ButtonProps {
    children: JSXElement
    icon?: JSXElement
    progress?: JSXElement
    iconPosition?: IconPosition
    disabled?: boolean
    variant: ButtonVariant;
    type?: ButtonType;
    isInline?: boolean;
}

export default function Button(props: ButtonProps) {
    const c = children(() => props.children);
    const classes = createMemo(() => ({'pf-c-button': true, 'pf-m-inline': props.isInline, ['pf-m-'+props.variant]: true}))
    const iconClasses = createMemo(() => ['pf-c-button__icon', 'pf-m-'+(props.iconPosition === 'right' ? 'end' : 'start'), props.isInline])

    return <Dynamic component={props.isInline ? 'span' : 'button'} type={props.type ?? 'button'} classList={classes()} disabled={props.disabled ?? false}>
        <Show when={props.icon && props.iconPosition !== 'right'}>
            <span class={iconClasses().join(' ')}>
                {props.icon}
            </span>
        </Show>
        <Show when={props.progress}>
            <span class="pf-c-button__progress">
                {props.progress}
            </span>
        </Show>
        {c()}
    </Dynamic>
}