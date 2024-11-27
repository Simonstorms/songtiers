import { app } from "../../src/app";
import request from "supertest";

interface UserData {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

describe("Authentication API", () => {
  const endpoint = "/auth/signup";
  const validUserData: UserData = {
    firstname: "Test",
    lastname: "User",
    email: "test@example.com",
    password: "password123",
  };

  const registerUser = async (userData: UserData) => {
    return await request(app).post(endpoint).send(userData);
  };

  it("should register a new user", async () => {
    const response = await registerUser(validUserData);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("token");
    expect(response.body).toHaveProperty("userId");
  });

  it("should not register a user with existing email", async () => {
    // Register user the first time
    await registerUser(validUserData);

    // Attempt to register with the same email again
    const response = await registerUser(validUserData);

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty("message", "Email already exists");
  });
});
