import connectDB from "@/config/database";
import User from "@/models/User";
import { TUser } from "@/types/user";

class UserService{
    async createUser({
        name,
        email,
        image
    }:{
        name: string;
        email: string;
        image?: string;
    }){
        await connectDB();
        const isUserExists = await User.findOne({ email });
        if (isUserExists) {
          throw new Error("User already exists");
        }

        const user = new User({
          name,
          email,
          image,
        });

        await user.save();
    }

    async getUser({ email }: { email: string }): Promise<TUser | null> {
        await connectDB();
        const user = await User.findOne({ email });
        return user;
    }

    async updateUser({ email, name, image }: { email: string; name: string; image?: string }): Promise<TUser | null> {
        await connectDB();
        const user = await User.findOneAndUpdate(
            { email },
            { name, image },
            { new: true }
        );
        return user;
    }
}

const userService = new UserService();

export { userService };