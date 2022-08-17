type Props = {
    type: string
}

export function Input({ type, ...props }: Props) {
    return (
        <input
            className="input"
            type={type}
            {...props}
        />
    )
}