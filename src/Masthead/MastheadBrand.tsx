import { children, JSXElement } from "solid-js";

export interface MastheadBrandProps {
  children: JSXElement
  href?: string
  target?: string
}

export function MastheadBrand(props: MastheadBrandProps) {
  const c = children(() => props.children);
  return <div class="pf-c-masthead__brand">
    {c()}
  </div>;
}