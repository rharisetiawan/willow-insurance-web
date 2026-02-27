"use client";
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <header className="bg-[#101E35] text-white py-4 px-6 md:px-12 flex justify-between items-center sticky top-0 z-50">
                <Link href="/" className="flex items-center space-x-3 group">
                    <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#D4AF37]">
                        <path d="M20 35C20 35 32 28 32 15C32 9.5 27.5 5 22 5C20.5 5 19 6.5 19 8C19 6.5 17.5 5 16 5C10.5 5 6 9.5 6 15C6 28 18 35 18 35C18.5 35.5 19.5 35.5 20 35Z" stroke="currentColor" strokeWidth="1" />
                        <path d="M19 18V34" stroke="currentColor" strokeWidth="1" />
                        <path d="M19 24L12 18" stroke="currentColor" strokeWidth="1" />
                        <path d="M19 28L26 22" stroke="currentColor" strokeWidth="1" />
                    </svg>
                    <div className="flex flex-col">
                        <span className="font-serif text-[1.3rem] tracking-wide leading-none">Willow</span>
                        <span className="text-[8px] tracking-[0.2em] font-sans font-medium text-gray-300">INSURANCE CORP.</span>
                    </div>
                </Link>
                <button
                    className="text-white hover:text-gray-300 transition-colors p-2"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" strokeWidth={1.5} />}
                </button>
            </header>

            {isOpen && (
                <div className="fixed inset-0 z-40 bg-[#101E35] pt-24 px-6 flex flex-col items-center space-y-8 text-2xl font-serif text-white h-screen">
                    <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-gray-300">Home</Link>
                    <Link href="/about" onClick={() => setIsOpen(false)} className="hover:text-gray-300">About Us</Link>
                    <Link href="/services" onClick={() => setIsOpen(false)} className="hover:text-gray-300">Services</Link>
                    <Link href="/contact" onClick={() => setIsOpen(false)} className="hover:text-gray-300">Contact</Link>
                </div>
            )}
        </>
    );
}
