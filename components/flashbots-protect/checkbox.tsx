import React from "react"

const Checkbox = (
    { label, id, checked, onChange, disabled, arrangement, orientation }:
        {
            disabled?: boolean,
            label: string,
            id: string,
            arrangement?: "vertical" | "horizontal",
            orientation?: "first" | "last",
            checked: boolean,
            onChange: (val: boolean) => void
        }
) => {
    const elements = [
        <label className="cursor-pointer" htmlFor={id} key={0}>{label}</label>,
        <input className="cursor-pointer" id={id} type="checkbox" checked={checked} disabled={disabled} key={1} onChange={(e) => {
            onChange(e.target.checked)
        }} />
    ]
    return <div className='flex px-4 pr-16px gap-2'>
        {orientation === "last" ? elements : elements.reverse()}
    </div>
}

export default Checkbox