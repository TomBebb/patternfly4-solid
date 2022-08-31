import { children, JSXElement } from "solid-js";

export  interface ToolbarGroupProps {
    children: JSXElement
}

export function ToolbarGroup(props: ToolbarGroupProps) {
  const c = children(() => props.children);
    return <div class="pf-c-toolbar__group">
      {c()}
  </div>;
}