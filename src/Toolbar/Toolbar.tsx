import { children, JSXElement } from "solid-js";

export interface ToolbarProps {
  children: JSXElement
}

export function Toolbar(props: ToolbarProps) {
  const c = children(() => props.children);
  return <div class="pf-c-toolbar">
    <div class="pf-c-toolbar">
      {c()}
    </div>
  </div>;
}