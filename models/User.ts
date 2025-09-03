import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    image: {
      type: String,
      trim: true,
    },
    passPhrase: {
      type: String,
      minlength: 6,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);


// Export model
const User = mongoose.models.User || mongoose.model<IUser>("User", UserSchema);

export default User;
