"use client"

import { signIn } from "next-auth/react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FcGoogle } from "react-icons/fc"
import { Section } from "lucide-react"

export default function LoginCard() {
    return (
        <div className="flex h-full items-center justify-center ">
            <Card className="w-full max-w-sm rounded shadow">
                <CardContent className="p-6 flex flex-col items-center space-y-6">
                   <div className="flex items-center">
                    <div className="bg-gradient-to-r from-orange-600 to-amber-600 p-1 rounded">
                                            <Section className="w-6 h-6 text-white" />
                                        </div>
                                        <span className="ml-3 text-xl font-bold font-poppins gradient-text">KManager</span>
                   </div>
                    <p className="text-gray-500 text-center">
                        Log in to your account
                    </p>
                    <Button
                        onClick={() => signIn("google")}
                        variant="outline"
                        className="w-full flex items-center justify-center space-x-3 rounded cursor-pointer"
                    >
                        <FcGoogle/>
                        <span>Continue with Google</span>
                    </Button>
                </CardContent>
            </Card>
        </div>
    )
}
