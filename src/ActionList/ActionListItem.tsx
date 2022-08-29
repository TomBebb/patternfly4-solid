import { children, createMemo, JSXElement } from "solid-js";

export interface ActionListItemProps {
  children: JSXElement
}

export default function ActionListItem(props: ActionListItemProps) {
  const c = children(() => props.children);
  return <div class='pf-c-action-list__item'>
    {c()}
  </div>;
}