import { Router } from "express";

const router = Router();

router.get("/:id", (request, response) => {
  const params = request.params;

  return response.status(200).json({ data: params });
});

export default router;
