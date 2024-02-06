"use client"
import React, { useState, useEffect } from 'react';
import Link from "next/link";
import AppLogo from "@/components/common/AppLogo";

const Nav = () => {
    const [hasScrolled, setHasScrolled] = useState(false);

    // Function to update the state based on the scroll position
    const handleScroll = () => {
        if (window.scrollY > 10) { // Adjust this value as needed
            setHasScrolled(true);
        } else {
            setHasScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        // Clean up
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`sticky top-0 z-50 flex items-center justify-between p-4 lg:px-20 ${hasScrolled && 'bg-red-950'}`}>
            <AppLogo hasScrolled={hasScrolled} />
            <div className={`text-sm ${hasScrolled ? 'text-white' : 'text-red-900'}`}>
                <Link target="_blank" href=""
                      className={`rounded-3xl bg-slate-100 px-5 py-3 text-sm font-semibold text-red-900  hover:bg-red-800 hover:text-white md:inline`}>Let&apos;s
                    Talk</Link>
            </div>
        </div>
    );
};

export default Nav;
