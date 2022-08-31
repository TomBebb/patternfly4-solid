export interface TextAreaProps {
  value?: string;
  placeholder?: string;
  onChange: (v: string) => void;
  canResizeHorizontal?: boolean
  canResizeVertical?: boolean
}
export function TextArea(props: TextAreaProps) {
  return <textarea
    classList={{
      "pf-c-form-control": true,
      "pf-m-resize-horizontal": props.canResizeHorizontal,
      "pf-m-resize-vertical": props.canResizeVertical,
    }}
    value={props.value ?? ''}
    placeholder={props.placeholder}
    onChange={v => props.onChange((v.target as HTMLInputElement).value)}
  />;
}