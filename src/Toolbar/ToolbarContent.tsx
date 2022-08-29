import { children, JSXElement } from "solid-js";

export interface ToolbarContentProps {
  children: JSXElement
}

export function ToolbarContent(props: ToolbarContentProps) {
  const c = children(() => props.children);
  return <div class="pf-c-toolbar__content">
    <div class="pf-c-toolbar__content-section">
      {c()}
    </div>
  </div>;
}