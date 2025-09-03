"use client"

import { getUser } from "@/app/actions/userAction";
import { TUser } from "@/types/user";
import { signIn, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

export default function Homepage() {
    const [user,setUser] = useState<TUser|null>(null);
    const session = useSession();

  useEffect(() => {
    const fetchUser = async () => {
      const u = session.data?.user;
      if(!u || !u.email) return;
      const userData = await getUser({ email: u.email });
      setUser(userData);
    };
    fetchUser();
  },[session.data])

  if(!user){
    return <div>
        <Button
        className="rounded cursor-pointer"
        onClick={
             ()=>   signIn("google", {
                    redirect: false,
                })
        }
        >
            Login
        </Button>
    </div>
  }
  return (
    <div>
      <h1>Welcome to KManager</h1>
      <p>Your one-stop solution for managing your tasks efficiently.</p>
    </div>
  )
}
