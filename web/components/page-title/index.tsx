import React from "react";

interface ChildComponentProps {
    children: React.ReactNode
}


const PageTitle: React.FC<ChildComponentProps> = ({children}) => {

    return <div className="text-slate-600 text-5xl">{children}</div>
}


export default PageTitle;