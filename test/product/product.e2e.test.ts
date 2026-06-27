import { describe, expect, it } from "vitest";
import { prisma } from "../../src/shared/prismaHelper";
import supertest from "supertest";
import app from "../../src";

describe("getSearchRecomendations", () => {
  it("should return list of products which name started with whats queried", async () => {
    const query = { input: "d" };

    const rows = await prisma.product.findMany({
      where: { name: { startsWith: query.input, mode: "insensitive" } },
      take: 5,
      orderBy: { name: "asc" },
      omit: { createdAt: true },
    });

    const response = await supertest(app).get(
      `/api/v1/products/search/${query.input}`,
    );

    expect(response.body.data).toMatchObject(rows);
    expect(response.status).toBe(200);
  });
});
