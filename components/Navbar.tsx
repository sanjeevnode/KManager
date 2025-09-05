"use client"

import {  LogOut, Section } from "lucide-react"
import Link from "next/link"
import { signOut, useSession } from "next-auth/react"
import Image from "next/image";

export default function Navbar() {
    const session = useSession();
    return (
        <nav className="fixed top-0 w-full h-16 bg-white z-50">
            <div className="mx-auto max-w-7xl flex items-center justify-between py-2  h-full md:px-6 px-4 border-b">
                <Link href="/" className="flex items-center">
                    <div className="bg-gradient-to-r from-orange-600 to-amber-600 p-1 rounded">
                        <Section className="w-6 h-6 text-white" />
                    </div>
                    <span className="ml-3 text-xl font-bold font-poppins gradient-text">KManager</span>
                </Link>
                <div className="space-x-6 hidden sm:flex items-center justify-center">
                    
                    {session.data?.user?.image && (
                        <Image
                            src={session.data.user.image}
                            alt="User Avatar"
                            width={32}
                            height={32}
                            className="rounded object-cover"
                        />
                    )}{
                        session.status === "authenticated" && (
                            <LogOut className="w-5 h-5 cursor-pointer text-gray-600 hover:text-gray-800" onClick={() => signOut()} />
                        )
                    }
                </div>
            </div>
        </nav>
    )
}
