import { describe, it, expect } from "vitest";
import request from "supertest";
import app from "../index.js";

describe("GET /", () => {
  it("responds with Hello World!", async () => {
    const response = await request(app).get("/");
    expect(response.text).toBe("Hello World!");
    expect(response.status).toBe(200);
  });
});
