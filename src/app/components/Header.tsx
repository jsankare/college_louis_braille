"use client"

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Header() {
    const pathname = usePathname()
    const [activePath, setActivePath] = useState('')

    useEffect(() => {
        setActivePath(pathname)
    }, [pathname])

    const links = [
        { name: 'Home', path: '/' },
        { name: 'Produits', path: '/products' },
        { name: 'A propos', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ]

    return (
        <header className="header">
            <h1>JEWELS</h1>
            <nav>
                <ul>
                    {links.map((link) => (
                        <li key={link.name}>
                            <a href={link.path} className={activePath === link.path ? 'active' : ''}>
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}