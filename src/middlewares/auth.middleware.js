import jwt from "jsonwebtoken";
import config from "../config/env.js";
import ApiError from "../utils/ApiError.js";
import User from "../models/user.model.js";

export default function auth() {
  return async (req, res, next) => {
    let token;

    if (req.headers.authorization?.startsWith("Bearer ")) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token) return next(new ApiError(401, "Not authenticated"));

    try {
      const payload = jwt.verify(token, config.jwt.accessSecret);

      const user = await User.findById(payload.sub);
      if (!user) return next(new ApiError(401, "User not found"));

      req.user = user;
      next();
    } catch (e) {
      next(new ApiError(401, "Invalid or expired token"));
    }
  };
}
