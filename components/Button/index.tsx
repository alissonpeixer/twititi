interface buttonProps extends React.HTMLAttributes<HTMLButtonElement> {
    text: string
    variant?: 'outline' | 'blue'
}

export const Button = ({ text, variant, ...press }: buttonProps) => {
    return (
        <button
            className={`transition-all w-full p-3  rounded-2xl ${
                variant === 'blue'
                    ? 'bg-sky-700 hover:bg-blue-700 text-slate-100'
                    : variant === 'outline' &&
                      'border border-sky-700 hover:border-google text-black '
            }`}
            {...press}
        >
            <span className="font-medium">{text}</span>
        </button>
    )
}
