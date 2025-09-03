import { userService } from "@/service/userService";
import { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === "google") {
        try {
          console.log("Creating Google user:", user);
          if(!user.email || !user.name) throw new Error("No email or name found");
          const isUserExists = await userService.getUser({ email: user.email });
          if (!isUserExists) {
            await userService.createUser({
              name: user.name!,
              email: user.email!,
              image: user.image || undefined,
            });
          }
          return true;
        } catch (error) {
          console.error("Error creating Google user:", error);
          return false;
        }
      }

      return true;
    },
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};
