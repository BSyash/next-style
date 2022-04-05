import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
    const links = [
        { title: "Home", href: "/" },
        { title: "About", href: "/about" },
        { title: "Pets", href: "/pets" },
    ]
    return (
        <div>
            <ul>
                {
                    links.map((nlink, id) => <li> <Link href={nlink.href}>{nlink.title}</Link></li>)
                }

            </ul>
        </div>
    )
}

export default Sidebar