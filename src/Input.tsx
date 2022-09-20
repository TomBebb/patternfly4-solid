export interface InputProps {
    type?: string
    value?: string | number;
    placeholder?:string;
    onChange: (v: string | number) => void;
    min?: number
    max?: number;
}
export function Input(props: InputProps) {
    return <input
    class="pf-c-form-control"
    type={props.type}
    value={props.value ?? ''}
    placeholder={props.placeholder}
    onChange={v => props.onChange((v.target as HTMLInputElement).value)}
  />;
}