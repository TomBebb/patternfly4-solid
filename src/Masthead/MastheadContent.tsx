import { children, JSXElement } from "solid-js";

export  interface MastheadContentProps {
    children: JSXElement
}

export function MastheadContent(props: MastheadContentProps) {
  const c = children(() => props.children);
    return <div class="pf-c-masthead__content">
      {c()}
  </div>;
}