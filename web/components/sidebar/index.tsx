import Link from "next/link";

const Sidebar = () => {
    
    const links = [{label: 'Home', url: '/'},
    {label: 'Update', url: '/update'},
    {label: 'P&M', url: '/planning-marking'},
    ]
    return <>
        {links && links.map((l, i) => <Link className="p-3 rounded-md " key={i} href={l.url}><div >{l.label}</div></Link>)}
    </>
}

export default Sidebar;