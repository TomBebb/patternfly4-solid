import { children, Component, createMemo, JSXElement, Show, ValidComponent } from "solid-js";
import { Dynamic } from "solid-js/web";
import { HeadingLevel } from "../misc";
import { FaSolidCircleCheck , FaSolidCircleExclamation, FaSolidTriangleExclamation, FaSolidCircleInfo, FaSolidBell } from "solid-icons/fa";
import { IconProps } from "solid-icons";


export type AlertVariant = 'success' | 'danger' | 'warning' | 'info' | 'default';
export interface AlertProps {
  children?: JSXElement
  isInline?: boolean
  variant: AlertVariant
  titleHeadingLevel?: HeadingLevel
  customIcon?: JSXElement
  title: string | JSXElement
}

const faIconsPerVariant: Record<AlertVariant, Component<IconProps>> = {
  info: FaSolidCircleInfo,
  default: FaSolidBell,
  success: FaSolidCircleCheck,
  warning: FaSolidTriangleExclamation,
  danger: FaSolidCircleExclamation,
};

export function Alert(props: AlertProps) {
  const c = children(() => props.children);
  const classes = createMemo(() => ({
    'pf-c-alert': true,
    'pf-m-inline': true,
    ['pf-m-' + props.variant]: true,
  }))
  return <div classList={classes()}>
    <div class="pf-c-alert__icon">
      <Show when={!props.customIcon} fallback={props.customIcon}>
      <Dynamic<IconProps & ValidComponent>  component={faIconsPerVariant[props.variant]}/>
      </Show>
    </div>

    <Dynamic component={props.titleHeadingLevel ?? 'h4'}>

      {props.title}
    </Dynamic>
    {c()}
  </div>;
}