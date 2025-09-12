"use client"

import { signIn } from "next-auth/react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FcGoogle } from "react-icons/fc"

export default function LoginCard() {
    return (
        <div className="flex h-full items-center justify-center ">
            <Card className="w-full max-w-sm rounded shadow-none">
                <CardContent className="p-6 flex flex-col items-center space-y-6">
                    <div className="flex flex-col space-y-2">
                        <p className="text-2xl md:text-3xl font-semibold text-black">
                            Welcome to <span className="gradient-text">KManager</span>
                        </p>
                        <p className="text-gray-800">
                            Manage your secrets efficiently and effectively.
                        </p>  
                        </div>                
                    <Button
                        onClick={() => signIn("google")}
                        variant="outline"
                        className="w-full flex items-center justify-center space-x-3 rounded cursor-pointer"
                    >
                        <FcGoogle />
                        <span>Continue with Google</span>
                    </Button>
                </CardContent>
            </Card>
        </div>
    )
}
