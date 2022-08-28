import { children, JSXElement } from "solid-js";

export  interface MastheadProps {
    children: JSXElement
}

export default function Masthead(props: MastheadProps) {
  const c = children(() => props.children);
    return <div class="pf-c-masthead">
      {c()}
  </div>;
}