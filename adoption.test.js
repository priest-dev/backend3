import chai from "chai";
import request from "supertest";
import app from "../src/app.js";

const expect = chai.expect;

describe("Adoptions API", () => {
  it("Debería devolver todas las adopciones", async () => {
    const res = await request(app).get("/api/adoptions");
    expect(res.status).to.equal(200);
    expect(res.body).to.be.an("array");
  });

  it("Debería crear una nueva adopción (error si falta user o pet)", async () => {
    const res = await request(app)
      .post("/api/adoptions")
      .send({}); // datos vacíos
    expect(res.status).to.equal(400);
  });
});
