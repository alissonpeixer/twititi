interface inputProps extends React.HTMLAttributes<HTMLInputElement> {
    name: string
    label: string
    place?: string
}

export const Input = ({ name, label, ...press }: inputProps) => {
    return (
        <div className="flex flex-col">
            <label
                form={name}
                className="mt-[-0.7em] px-2 ml-4 absolute bg-white text-sm font-light text-gray-600"
            >
                {label}
            </label>
            <input
                type="text"
                name={name}
                className="flex item-start w- focus:outline-0 p-4 w-full border border-gray-400 rounded-2xl focus:border-gray-900"
                {...press}
            />
        </div>
    )
}
