//Back-end API RESTful

import Fastify from "fastify";
import cors from "@fastify/cors";
import { PrismaClient } from "@prisma/client";

const app = Fastify();
const prisma = new PrismaClient();

/**
 * Método HPPT: Get, Post, Put, Patch, Delete
 */

app.register(cors);

app.get("/", async () => {
  const habits = await prisma.habit.findMany();

  return habits;
});

app.listen({
  port: 3333,
});
