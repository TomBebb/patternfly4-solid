import { children, createMemo, JSXElement, Show } from "solid-js";
import { Dynamic } from "solid-js/web";
import { HeadingLevel } from "../misc";

export interface AlertProps {
  children?: JSXElement
  isInline?: boolean
  variant: 'success' | 'danger' | 'warning' | 'info' | 'default'
  titleHeadingLevel?: HeadingLevel
  customIcon?: JSXElement
  title: string | JSXElement
}

export function Alert(props: AlertProps) {
  const c = children(() => props.children);
  const classes = createMemo(() => ({
    'pf-c-alert': true,
    'pf-m-inline': true, 
    ['pf-m-'+props.variant]: true,
  }))
  return <div classList={classes()}>
    <Show when={props.customIcon}>
      <div class="pf-c-alert__icon">
        {props.customIcon}
      </div>
    </Show>

    <Dynamic component={props.titleHeadingLevel ?? 'h4'}>

      {props.title}
    </Dynamic>
    {c()}
  </div>;
}