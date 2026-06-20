import { describe, expect, it } from "vitest";
import app from "../../src";
import supertest from "supertest";
import { SeedData } from "../../src/database/prisma/seed-data";

const data = SeedData.get();

describe("getAll", () => {
  it("should return all categories", async () => {
    const response = await supertest(app).get("/api/v1/categories");

    expect(response.body.data[0].name.toLowerCase()).toEqual(
      data.categories[0].name.toLowerCase(),
    );
  });
});
