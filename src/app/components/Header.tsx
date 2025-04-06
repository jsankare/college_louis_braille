'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Header() {
    const pathname = usePathname()
    const [activePath, setActivePath] = useState('')
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        setActivePath(pathname)
        setMenuOpen(false)
    }, [pathname])

    const links = [
        { name: 'Home', path: '/' },
        { name: 'Produits', path: '/products' },
        { name: 'A propos', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ]

    return (
        <header className="header">
            <h1><Link href='/'>JEWELS</Link></h1>

            <div className={`burger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <nav className="desktop-nav">
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

            {menuOpen && (
                <nav className="mobile-nav">
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
            )}
        </header>
    )
}
