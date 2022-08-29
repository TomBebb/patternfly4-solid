import { children, JSXElement } from "solid-js";

export  interface MastheadToggleProps {
    children: JSXElement
}

export function MastheadToggle(props: MastheadToggleProps) {
  const c = children(() => props.children);
    return <div class="pf-c-masthead__toggle">
      {c()}
  </div>;
}