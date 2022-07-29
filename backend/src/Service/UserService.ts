import TOKEN_EXPIRE_TIME from 'configs/configs';
import { sign } from 'jsonwebtoken';
import { UserModel } from 'models/User';


async function isUser({ username }: { username: string }) {
  try {
    const user = await UserModel.findOne({ username });

    if (user === null) return false;

    return true;
  } catch (error) {
    console.error("Error on find user.", error);
    return false;
  }
}

async function login({ username, password }: { username: string, password: string }) {
  try {
    const user = await UserModel.findOne({ username });

    if (!user) {
      return undefined;
    }

    const isPasswordCorrect = await user.comparePassword(
      password,
      user.password
    );

    if (!isPasswordCorrect) {
      return undefined;
    }

    const token = sign({ userId: user._id }, process.env.SECRET, {
      expiresIn: TOKEN_EXPIRE_TIME,
    });

    return token;
  } catch (error) {
    console.error("Error on find user.", error);
    return false;
  }
}

async function createUserAccount({ username, password }: { username: string, password: string}) {
  try {
    const isUserResult = await isUser({ username });

    if (isUserResult) {
      return undefined;
    }

    const user = await UserModel.create({
      username,
      password,
    });

    return {
      id: user._doc._id,
      username: user._doc.username,
      createdAt: user._doc.createdAt,
    };
  } catch (error) {
    console.error("Error on create user.", error);
    return;
  }
}

async function getUser(userId: string) {
  try {
    const user = await UserModel.findOne({ _id: userId });
    //TODO need make validation
    return user;
  } catch (error) {
    console.error("Error on found user.", error);
    return;
  }
}

export const UserService = {
  isUser,
  login,
  createUserAccount,
  getUser,
}