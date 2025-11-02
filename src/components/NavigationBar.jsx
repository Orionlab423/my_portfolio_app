import { useState } from 'react';
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
        <nav className="fixed z-50 h-20 w-full text-white text-sm font-medium">
            <div className="w-full max-w-[95%] mx-auto h-full flex items-center px-4">

                { /* Logo on the left */ }
                <img src={myLogo} alt="My Logo" className="h-10 w-auto" />

                { /* Centered Nav Items */ }
                <div className="flex-1 flex justify-center">
                    <div className="bg-zinc-50/10 ring-inset ring-1 ring-zinc-50/10 backdrop-blur-3xl rounded-xl
                    hidden md:flex items-center justify-center h-12 p-2 max-w-[400px]">
                        <div className="flex flex-row p-2 space-x-8">
                            {navItems.map((item) => (
                                <a key={item.href} href={item.href} className="transform hover:skew-x-12
                                hover:text-white/50 transition-all duration-300 ease-in-out">
                                    {item.title}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                { /* Mobile Navigation Menu button */ }
                <div className="md:hidden z-50 text-white/70 p-2 bg-zinc-50/10 ring-inset ring-1 ring-zinc-50/[0.02]
                    backdrop-blur-3xl rounded-lg" onClick={toggleMobileMenu}>
                        {isMobileMenuOpen ? <LuX size={20} /> : <LuMenu size={20} /> }
                </div>
            </div>

            { /* Mobile Navigation Menu overlay */ }
            <div className={`fixed left-0 top-0 w-full h-full bg-zinc-800 transform
                transition-transform duration-300 ${ isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
                    <div className="flex flex-col items-center justify-center space-y-8 h-full">
                        {navItems.map((item) => (
                            <a key={item.href} href={item.href} onClick={closeMobileMenu} className="transform hover:skew-x-12
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
