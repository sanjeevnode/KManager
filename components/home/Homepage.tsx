"use client"

import { getUser } from "@/app/actions/userAction";
import { TUser } from "@/types/user";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import LoginCard from "../LoginCard";
import { NavItems } from "../navitems";
import MySecrets from "./MySecrets";
import NewSecret from "./NewSecret";
import MyAccount from "./MyAccount";
import Loading from "../Loading";

export default function Homepage() {
    const [navIndex, setNavIndex] = useState<number>(0);
    const [user, setUser] = useState<TUser | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const session = useSession();

    useEffect(() => {
        const fetchUser = async () => {
            if (session.status === "loading") {
                return; 
            }
            
            const u = session.data?.user;
            if (!u || !u.email) {
                return;
            }
            
            // Don't fetch if we already have user data
            if (user) {
                return;
            }
            
            setLoading(true);
            
            try {
                const userData = await getUser({ email: u.email });
                setUser(userData);
            } catch (error) {
                console.error("Error fetching user:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchUser();
    }, [session.status, session.data?.user, user]);

    if (session.status === "loading" || loading) {
        return <Loading />
    }

    if (session.status === "unauthenticated" || !user) {
        return <LoginCard />
    }
    const getView = () => {
        switch (navIndex) {
            case 0:
                return <MySecrets />
            case 1:
                return <NewSecret />
            case 2:
                return <MyAccount />
            default:
                return <></>
        }
    }
    return (
        <div className="flex flex-col h-full">
            <NavItems navIndex={navIndex} setNavIndex={setNavIndex} />
            {getView()}
        </div>
    )
}
