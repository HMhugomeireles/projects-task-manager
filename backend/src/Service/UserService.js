const jwt = require("jsonwebtoken");
const UserModel = require("../models/User");
const TOKEN_EXPIRE_TIME = require("../configs/configs").TOKEN_EXPIRE_TIME;

module.exports = {
  /**
   *
   */
  async isUser({ username }) {
    try {
      const user = await UserModel.findOne({ username });

      if (user === null) return false;

      return true;
    } catch (error) {
      console.error("Error on find user.", error);
      return false;
    }
  },

  /**
   *
   */
  async login({ username, password }) {
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

      const token = jwt.sign({ userId: user._id }, process.env.SECRET, {
        expiresIn: TOKEN_EXPIRE_TIME,
      });

      return token;
    } catch (error) {
      console.error("Error on find user.", error);
      return false;
    }
  },

  /**
   *
   */
  async createUserAccount({ username, password }) {
    try {
      const isUser = await this.isUser({ username });

      if (isUser) {
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
  },

  async getUser(userId) {
    try {
      const user = await UserModel.findOne({ _id: userId });
      //TODO need make validation
      return user;
    } catch (error) {
      console.error("Error on found user.", error);
      return;
    }
  },
};
