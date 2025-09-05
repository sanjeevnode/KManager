"use client"

import { LogOut, Section } from "lucide-react"
import Link from "next/link"
import { signOut, useSession } from "next-auth/react"
import Image from "next/image"
import { useCallback } from "react"
import navigationStore from "@/store/navigationStore"

export default function Navbar() {
    const { data: session, status } = useSession()
    const navIndex = navigationStore((state) => state.navIndex);
    
    const handleSignOut = useCallback(() => {
        signOut()
    }, [])

    const isAuthenticated = status === "authenticated"
    const userImage = session?.user?.image


    return (
        <nav className="fixed top-0 w-full h-16 bg-white z-50">
            <div className="mx-auto max-w-7xl flex items-center justify-between py-2 h-full md:px-6 px-4 border-b">
                {/* Logo section */}
                <Link href="/" className="flex items-center hover:opacity-90 transition-opacity">
                    <div className="bg-gradient-to-r from-orange-600 to-amber-600 p-1 rounded">
                        <Section className="w-6 h-6 text-white" />
                    </div>
                    <span className="ml-3 text-xl font-bold font-poppins gradient-text">KManager</span>
                </Link>
                
                {/* User section */}
                {
                    isAuthenticated &&(
                        <div className="space-x-6 hidden sm:flex items-center ">
                            <span className={`text-gray-600 font-medium ${navIndex === 0 ? 'font-bold text-orange-800' : ''} cursor-pointer`}
                            onClick={() => navigationStore.getState().setNavIndex(0)}
                            >
                                My Secrets
                            </span>
                            <span className={`text-gray-600 font-medium ${navIndex === 1 ? 'font-bold text-orange-800' : ''} cursor-pointer`}
                            onClick={() => navigationStore.getState().setNavIndex(1)}
                            >
                                Profile
                            </span>
                            {userImage && (
                                <Image
                                    src={userImage}
                                    alt="User Avatar"
                                    width={32}
                                    height={32}
                                    className="rounded-full object-cover outline"
                                    priority={false}
                                />
                            )}

                            <LogOut className="w-5 h-5 cursor-pointer text-gray-600 hover:text-gray-800" onClick={handleSignOut} />

                        </div>
                    )
                }
                
            </div>
        </nav>
    )
}
