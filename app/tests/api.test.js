const request = require("supertest");
const app = require("../index");

describe("Secure API", () => {

  test("GET /health should return ok", async () => {
    const response = await request(app)
      .get("/health");

    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe("ok");
  });

  test("GET / should return API message", async () => {
    const response = await request(app)
      .get("/");

    expect(response.statusCode).toBe(200);
    expect(response.body.message)
      .toContain("Secure API");
  });

});