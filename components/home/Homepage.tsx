"use client"

import { getUser } from "@/app/actions/userAction";
import { TUser } from "@/types/user";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import LoginCard from "../LoginCard";
import MySecrets from "./MySecrets";
import Profile from "./Profile";
import Loading from "../Loading";
import navigationStore from "@/store/navigationStore";

export default function Homepage() {
    const navIndex = navigationStore((state) => state.navIndex);
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
                return <Profile />
            default:
                return <></>
        }
    }
    return (
        <div className="flex flex-col h-full">
            {/* <NavItems /> */}
            {getView()}
        </div>
    )
}
