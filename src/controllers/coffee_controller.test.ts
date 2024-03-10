import request from "supertest";
import { app } from "../app";
test("GET /coffee should return correct object", async () => {
  const res = await request(app).get("/coffee").query({ coffeeName: "Latte" });
  expect(res.statusCode).toEqual(200);
  expect(res.body).toEqual({
    drinkType: "Coffee",
    name: "Latte",
  });
});

test("GET /coffee should return correct object when passed a different coffeeName", async () => {
  const res = await request(app).get("/coffee").query({ coffeeName: "Mocha" });
  expect(res.statusCode).toEqual(200);
  expect(res.body).toEqual({
    drinkType: "Coffee",
    name: "Mocha",
  });
});

test("GET /coffee should return the default when coffee name is not specified", async () => {
  const res = await request(app).get("/coffee").query({});
  expect(res.statusCode).toEqual(200);
  expect(res.body).toEqual({
    drinkType: "Coffee",
    name: "Latte",
  });
});
