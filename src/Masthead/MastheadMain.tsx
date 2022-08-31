import { children, JSXElement } from "solid-js";

export  interface MastheadMainProps {
    children: JSXElement
}

export function MastheadMain(props: MastheadMainProps) {
  const c = children(() => props.children);
    return <div class="pf-c-masthead__main">
      {c()}
  </div>;
}