import React, { useState } from 'react';
import { LuMenu, LuX } from 'react-icons/lu';
import myLogo from '../assets/lt_logo.svg';

const navItems = [
    { title: "About", href: "#about" },
    { title: "Skills", href: "#skills" },
    { title: "Projects", href: "#projects" },
    { title: "Contact", href: "#contact" }
];

const NavigationBar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className="fixed z-50 h-20 flex justify-center w-full text-white font-medium">
            <div className="bg-zinc-50/10 ring-inset ring-1 ring-zinc-50/10 mt-8 backdrop-blur-3xl rounded-3xl
                hidden md:flex items-center justify-center p-2 max-w-[400px] mx-auto">
                    <div className="flex flex-row p-2 space-x-8">
                        {navItems.map((item) => (
                            <a key={item.href} href={item.href} className="transform hover:skew-x-12
                            hover:text-white/50 transition-all duration-300 ease-in-out">
                                {item.title}
                            </a>
                        ))}
                    </div>
            </div>
        </nav>
    );
};

export default NavigationBar;
