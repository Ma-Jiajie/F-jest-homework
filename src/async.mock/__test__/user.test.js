import { register } from "../user";

jest.mock("axios");

describe("register", () => {
  const username = "jiajie";
  const password = "28762a";
  const invalidName = false;

  test("should post user when validated", async () => {
    // TODO 19: add test here

    await expect(register(username, password)).resolves.toEqual({});
  });

  test("should reject with Error when username is invalid", async () => {
    // TODO 20: add test here
    await expect(register(invalidName, password)).rejects.toThrow(
      "wrong username or password"
    );
  });
});
