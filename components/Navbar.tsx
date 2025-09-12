"use client"

import { Menu, Section } from "lucide-react"
import Link from "next/link"
import { signOut, useSession } from "next-auth/react"
import { useCallback, useState } from "react"

import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet"
import Footer from "./Footer"
import { navigationStore } from "@/store"

export default function Navbar() {
    const { status } = useSession()
    const navIndex = navigationStore((state) => state.navIndex);

    const handleSignOut = useCallback(() => {
        signOut()
    }, [])

    const isAuthenticated = status === "authenticated"
    // const userImage = session?.user?.image

    if (!isAuthenticated) {
        return <>   </>
    }
    return (
        <nav className="fixed top-0 w-full h-16 bg-white z-50">
            <div className="mx-auto max-w-7xl flex items-center justify-between py-2 h-full md:px-6 px-4 border-b rounded">
                {/* Logo section */}
                <Link href="/" className="flex items-center hover:opacity-90 transition-opacity">
                    <div className="bg-gradient-to-r from-orange-600 to-amber-600 p-1 rounded">
                        <Section className="w-6 h-6 text-white" />
                    </div>
                    <span className="ml-3 text-xl font-bold">KManager</span>
                </Link>

                {/* User section */}

                <div className="space-x-6 hidden sm:flex items-center ">
                    <span className={`text-gray-800 font-medium ${navIndex === 0 ? 'font-bold text-orange-800' : ''} cursor-pointer`}
                        onClick={() => navigationStore.getState().setNavIndex(0)}
                    >
                        My Secrets
                    </span>
                    <span className={`text-gray-800 font-medium ${navIndex === 1 ? 'font-bold text-orange-800' : ''} cursor-pointer`}
                        onClick={() => navigationStore.getState().setNavIndex(1)}
                    >
                        Profile
                    </span>
                    {/* {userImage && (
                        <Image
                            src={userImage}
                            alt="User Avatar"
                            width={32}
                            height={32}
                            className="rounded-full object-cover outline"
                            priority={false}
                        />
                    )} */}

                    {/* <LogOut className="w-5 h-5 cursor-pointer text-gray-800 hover:text-gray-800" onClick={handleSignOut} /> */}
                    <span className={`text-gray-800 font-medium cursor-pointer`}
                        onClick={handleSignOut}
                    >
                        Logout
                    </span>

                </div>
                <MobileNavbar />
            </div>
        </nav>
    )
}



const MobileNavbar = () => {
    const [open, setOpen] = useState(false);

    const handleItemClick = (action?: () => void) => {
        if (action) action();
        setOpen(false);
    };
    const navIndex = navigationStore((state) => state.navIndex);

    const handleSignOut = useCallback(() => {
        signOut()
    }, [])
    return (
        <div className="sm:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger>
                    <Menu className="cursor-pointer" />
                </SheetTrigger>
                <SheetContent className="w-full">
                    <SheetHeader>
                        <SheetTitle>
                            <Link href="/" className="flex items-center hover:opacity-90 transition-opacity">
                                <div className="bg-gradient-to-r from-orange-600 to-amber-600 p-1 rounded">
                                    <Section className="w-6 h-6 text-white" />
                                </div>
                                <span className="ml-3 text-xl font-bold">KManager</span>
                            </Link>
                        </SheetTitle>
                    </SheetHeader>
                    <div className="flex flex-col space-y-2 items-center">
                        <span className={`text-gray-800 font-medium ${navIndex === 0 ? 'font-bold text-orange-800' : ''} cursor-pointer w-full p-4 border-b `}
                            onClick={() => handleItemClick(() => navigationStore.getState().setNavIndex(0))}
                        >
                            My Secrets
                        </span>
                        <span className={`text-gray-800 font-medium ${navIndex === 1 ? 'font-bold text-orange-800' : ''} cursor-pointer w-full p-4 border-b`}
                            onClick={() => handleItemClick(() => navigationStore.getState().setNavIndex(1))}
                        >
                            Profile
                        </span>


                        <span
                            className="text-gray-800 font-medium cursor-pointer w-full p-4 border-b"
                            onClick={() => handleItemClick(handleSignOut)}
                        >
                            Logout
                        </span>

                    </div>
                    <SheetFooter>
                        <Footer />
                    </SheetFooter>
                </SheetContent>
               
            </Sheet>
        </div>
    )
}