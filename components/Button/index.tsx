interface buttonProps extends React.HTMLAttributes<HTMLButtonElement> {
    text: string
    variant?: 'outlineGoogle' | 'blue'
    icon?: string
}

export const Button = ({ text, icon, variant, ...press }: buttonProps) => {
    return (
        <button
            className={`transition-all bg-none p-[1px] h-[50px] rounded-3xl ease-in-out ${
                variant === 'blue'
                    ? 'bg-blue-500 hover:bg-blue-700 text-slate-100'
                    : variant === 'outlineGoogle' &&
                      'hover:bg-gradient-to-r from-red-500 via-yellow-300   to-sky-600 text-black  border hover:border-white'
            }`}
            {...press}
        >
            <div
                className={`${
                    variant === 'outlineGoogle' &&
                    'transition-all bg-white h-full flex items-center justify-center  rounded-3xl '
                }`}
            >
                <div className="transition-all font-medium  text-center flex items-center justify-center w-full ">
                    <img
                        src={icon}
                        width={30}
                        className={`${variant != 'outlineGoogle' && 'hidden'}`}
                    />
                    {text}
                </div>
            </div>
        </button>
    )
}
