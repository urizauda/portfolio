import React from 'react'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Header() {
    return (
        <div>
            <header className="text-3xl font-bold underline">
                <a href='/'>Uri</a>
                {/* Desktop Nav */}
                <nav>
                    <ul>
                        <li><a href='/#about'>About</a></li>
                        <li><a href='/#projects'>Projects</a></li>
                        <li><a href='/#contact'>Contact</a></li>
                        <li><a href='/#resume -link'>Resume</a></li>
                    </ul>
                </nav>

                {/* Mobile Nav */}
                <nav>
                    <ul>
                        <li><a href='/#about'>About</a></li>
                        <li><a href='/#projects'>Projects</a></li>
                        <li><a href='/#contact'>Contact</a></li>
                        <li><a href='/#resume -link'>Resume</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}
