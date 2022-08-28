import { children, JSXElement } from "solid-js";

export  interface ToolbarItemProps {
    children: JSXElement
}

export default function ToolbarItem(props: ToolbarItemProps) {
  const c = children(() => props.children);
    return <div class="pf-c-toolbar__item">
      {c()}
  </div>;
}