import { Children } from "react"

type Props = {
    children: string,
    size: 'big' | 'medium' | 'small'
    variant: 'important' | 'irrelevant'
}

export function Button({ children, size = 'medium', variant = 'irrelevant', ...props }: Props) {

    let style: any = {
        margin: '3px',
    }

    if (size === 'big') {
        style.padding = '2rem',
            style.backgroundColor = '9932CC'
    }
    if (size === 'small') {
        style.padding = '0.7rem',
            style.backgroundColor = '#FFB6C1'
    }
    if (variant === 'important') {
        style.fontWeight = '900'
        style.color = 'red'
    }

    return (
        <button className="button" style={style} {...props}>
            {children}
        </button>
    )
}