export interface SpinnerProps {
    diameter?: string;
    size?: 'sm' | 'md' | 'lg' | 'xl'
}
export function Spinner(props: SpinnerProps) {
    return <svg
    classList={{
        'pf-c-spinner': true,
        ['pf-m-'+props.size]: true,
    }}
    role="progressbar"
    viewBox="0 0 100 100"
    aria-label="Loading..."
    >
    <circle class="pf-c-spinner__path" cx="50" cy="50" r="45" fill="none" />
    </svg>
}