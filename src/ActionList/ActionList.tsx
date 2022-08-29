import { children, createMemo, JSXElement } from "solid-js";

export interface ActionListProps {
  children: JSXElement
  isIconList?: boolean
}

export default function ActionList(props: ActionListProps) {
  const c = children(() => props.children);
  const classes = createMemo(() => ({
    'pf-c-action-list': true,
    'pf-m-icons': props.isIconList
  }));
  return <div classList={classes()}>
    {c()}
  </div>;
}