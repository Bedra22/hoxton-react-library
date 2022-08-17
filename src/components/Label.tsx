type Props = {
    children: string
}

export function Label({ children, ...props }: Props) {
    return (
        <label {...props} >
            {children}
        </label>
    )
}