'use client'

import { Logo } from './Logo'
import { NavLinks } from './NavLinks'
import { useScroll } from '../hooks/useScroll'

export default function Header() {
    const isScrolled = useScroll()
    return (
        <header
            className={` ${isScrolled && 'bg-black'} fixed top-0 z-50 flex w-full items-center justify-between transition-all px-4 py-3 lg:px-10 lg:py-4 `}
        >
            <div className="flex items-center space-x-2 lg:space-x-8 ">
                <Logo />
                <NavLinks />
            </div>
            <div className="flex items-center space-x-4 ">
                <p className="hidden cursor-not-allowed">Kids</p>
                {/* <Image src={"nada"} alt='nada' /> */}
            </div>
        </header>
    )
}
