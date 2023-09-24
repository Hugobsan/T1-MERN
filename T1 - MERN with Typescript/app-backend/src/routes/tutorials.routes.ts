import { Router, Request } from "express";
import { prisma } from "../utils/prismaInstance";

const router = Router();

router.get(
    "/", 
    async (request: Request<any, any, any, {title?: string}>, response) => {
        const { title } = request.query;

        const where = {};    
        
        if (title) {
            Object.assign(where, { title });
        }

        const tutorials = await prisma.tutorial.findMany({ where });

        return response.status(200).json(tutorials);
    }
);

router.get("/:id", async (request, response) => {
    const { id } = request.params;

    const tutorial = await prisma.tutorial.findUnique({ where: { id } });

    return response.status(200).json(tutorial);
});

router.post("/", async (request, response) => {
    const payload = request.body;

    const createdTutorial = await prisma.tutorial.create(payload);

    return response.status(200).json(createdTutorial);
});

router.put("/:id", async (request, response) => {
    const { id } = request.params;

    const payload = request.body;

    const updatedTutorial = await prisma.tutorial.update({
        where: { id },
        data: payload 
    });

    return response.status(200).json(updatedTutorial);
});

router.delete("/:id", async (request, response) => {
    const { id } = request.params;

    await prisma.tutorial.delete({ where: { id } });

    return response.status(200).end();
});

router.delete("/", async (request, response) => {
    await prisma.tutorial.deleteMany();

    return response.status(200).end();
});

export default router;