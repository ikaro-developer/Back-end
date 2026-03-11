import type { Request, Response, NextFunction } from "express"

export function EnsureAdmin(request: Request, response: Response, next: NextFunction) {
    const admin = false
    if (admin) {
        return next()
    }
    return response.status(403).json({
        message: "Access denied. Admins only."
    })

}