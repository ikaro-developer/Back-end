import { Router, type Response, type Request } from "express";

const router = Router();

// GET /users
router.get("/users", (_: Request, response: Response) => {
  response.json([
    { id: 1, name: "Carlos" },
    { id: 2, name: "Maria" },
  ]);
});

// POST /users
router.post("/users", (request: Request, response: Response) => {
  const { name } = request.body;

  if (!name || typeof name !== "string") {
    return response.status(400).json({
      message: "Campo 'name' é obrigatório e deve ser uma string",
    });
  }

  // mock de criação
  const newUser = {
    id: Date.now(),
    name,
  };

  return response.status(201).json(newUser);
});

export default router;
