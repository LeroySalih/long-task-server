import { ButtonHTMLAttributes, DetailedHTMLProps, MouseEventHandler, ReactNode } from "react"

const Button = ({onClick, type = undefined, children} : {
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined,
    type?: "submit" | "reset" | "button" | undefined,
    children: ReactNode,
}) => {
    return <button 
    type={type}
    className="
    transition ease-in-out duration-300
    hover:bg-slate-400 p-2 rounded-md ml-2 mr-2 hover:border-2 hover:border-white 
    bg-white border-slate-400 border-solid border-2
    " onClick={onClick && onClick}>{children}</button>
}


export default Button;