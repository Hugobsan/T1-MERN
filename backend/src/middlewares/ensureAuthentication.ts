import {Request, Response, NextFunction } from "express"; 

export default function EnsureAuthentication(request: Request, response: Response, next: NextFunction) {
  const { authorization } = request.headers;

  if (!authorization)
    return response
      .status(400)
      .json({ message: "Invalid or non existing token." });

  const [, token] = authorization?.split(" ");

  if (!token)
    return response
      .status(400)
      .json({ message: "Invalid or non existing token." });

  next();
}
