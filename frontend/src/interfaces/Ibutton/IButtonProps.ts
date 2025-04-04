export interface IButtonProps {
    buttonText: string
    type: 'button' | 'submit' | 'reset' | undefined
    onClick?: () => void
}