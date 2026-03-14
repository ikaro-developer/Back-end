import type { Request, Response, NextFunction } from "express"
import JWT from "jsonwebtoken"




interface IPayload{
    sub:string
}
export function EnsureAuthenticated(request: Request, response: Response, next: NextFunction) {
    const authToken = request.headers.authorization


    if (!authToken) {
        return response.status(401).end()
    }

    const [, token] = authToken.split(" ")

    if (!token) {
        return response.status(401).end();
    }
    try {
        const { sub } = JWT.verify(token, "793274d1919a3bb6f1e273e138da6235") as IPayload
        
        request.user_id = sub;
    return next()
        

    } catch (err) {
        return response.status(401).end()
    }


}