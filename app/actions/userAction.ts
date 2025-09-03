"use server"

import { userService } from "@/service/userService";

export const createUser = async ({
    name,
    email,
    image
}: {
    name: string;
    email: string;
    image?: string;
}) => {
    await userService.createUser({
        name,
        email,
        image
    });
};

export const getUser = async ({ email }: { email: string }) => {
    return await userService.getUser({ email });
};