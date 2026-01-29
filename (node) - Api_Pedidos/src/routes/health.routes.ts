import { Router, type Response, type Request } from "express";
const router = Router();

router.get("/health", (_: Request, response: Response) => {
  response.json({ status: "ok" });
});

export default router;
