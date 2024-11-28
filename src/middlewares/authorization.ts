import { RoleEnum } from "@prisma/client";
import { NextFunction, Request, Response } from "express";

export default function Authorization(role: RoleEnum) {
  return (req: Request, res: Response, next: NextFunction) => {
    const user = res.locals.user;

    if (user.role !== role) {
      res.status(401).json({ message: `Access denied: your role (${user.role}) does not have the necessary permissions to access this resource (requires ${role} role).` });
      return;
    }

    next();
  };
}
