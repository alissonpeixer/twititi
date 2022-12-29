interface buttonProps extends React.HTMLAttributes<HTMLButtonElement> {
    text: string
    variant?: 'outlineGoogle' | 'blue' | 'outlineGithub'
    icon?: string
}

export const Button = ({ text, icon, variant, ...press }: buttonProps) => {
    return (
        <button
            type="button"
            className={`transition-all bg-none p-[1px] h-[50px] rounded-3xl ease-in-out hover:scale-105 ${
                variant === 'blue'
                    ? 'bg-blue-500 hover:bg-blue-700 text-slate-100'
                    : variant === 'outlineGoogle'
                    ? 'hover:bg-gradient-to-r from-red-500 via-yellow-300   to-sky-600 text-black  border hover:border-white'
                    : variant === 'outlineGithub' &&
                      'hover:bg-gradient-to-r from-gray-500 via-zinc-700   to-zinc-900  text-black  border hover:border-white'
            }`}
            {...press}
        >
            <div
                className={`${
                    variant !== 'blue' &&
                    'transition-all bg-white h-full flex items-center justify-center  rounded-3xl '
                }`}
            >
                <div className="transition-all font-medium  text-center flex items-center justify-center w-full ">
                    <img
                        src={icon}
                        width={30}
                        className={`${variant === 'blue' && 'hidden'}`}
                    />
                    {text}
                </div>
            </div>
        </button>
    )
}
