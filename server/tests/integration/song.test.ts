import { app } from "../../src/app";
import request from "supertest";

describe("Song Management API", () => {
  let authToken: string;
  let userId: number;

  // Test song data
  const testSong = {
    songName: "Test Song",
    artist: "Test Artist",
    image: "test-image-url.jpg",
    position: 1,
  };

  const newSong = {
    ...testSong,
    songName: "Updated Song",
    artist: "Updated Artist",
  };

  // User data for signup
  const userData = {
    firstname: "Test",
    lastname: "User",
    email: "songtest@example.com",
    password: "password123",
  };

  // Function to sign up a user and get auth token
  async function signupAndGetAuthToken() {
    const signupResponse = await request(app)
      .post("/auth/signup")
      .send(userData);

    return signupResponse.body.token;
  }

  // Function to add a song to the user's tier list
  async function addSongToTierList(song: any, authToken: string) {
    const response = await request(app)
      .post("/action/addsong")
      .set("Authorization", `Bearer ${authToken}`)
      .send(song);

    return response;
  }

  // Function to read a song from the user's tier list
  async function readSongFromTierList(position: number, authToken: string) {
    const response = await request(app)
      .post("/action/readsong")
      .set("Authorization", `Bearer ${authToken}`)
      .send({ position });

    return response;
  }

  // Function to delete a song from the user's tier list
  async function deleteSongFromTierList(position: number, authToken: string) {
    const response = await request(app)
      .post("/action/deletesong")
      .set("Authorization", `Bearer ${authToken}`)
      .send({ position });

    return response;
  }

  beforeEach(async () => {
    authToken = await signupAndGetAuthToken();
  });

  describe("Song Operations", () => {
    it("should add a song to user's tier list", async () => {
      const response = await addSongToTierList(testSong, authToken);

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty("message", "song changed");
    });

    it("should read a song from user's tier list", async () => {
      // First, add a song
      await addSongToTierList(testSong, authToken);

      // Then try to read it
      const response = await readSongFromTierList(testSong.position, authToken);

      expect(response.status).toBe(200);
      expect(response.body).toMatchObject({
        name: testSong.songName,
        artist: testSong.artist,
        image: testSong.image,
      });
    });

    it("should delete a song from user's tier list", async () => {
      // First, add a song
      await addSongToTierList(testSong, authToken);

      // Then delete it
      const deleteResponse = await deleteSongFromTierList(
        testSong.position,
        authToken,
      );

      expect(deleteResponse.status).toBe(200);
      expect(deleteResponse.body).toHaveProperty("message", "Song deleted");

      // Verify the song is no longer readable
      const readResponse = await readSongFromTierList(
        testSong.position,
        authToken,
      );

      expect(readResponse.body).toHaveProperty(
        "message",
        "No song found at this position",
      );
    });

    it("should handle unauthorized requests", async () => {
      const response = await request(app)
        .post("/action/addsong")
        .send(testSong);

      expect(response.status).toBe(401);
    });

    it("should update existing song at the same position", async () => {
      // Add initial song
      await addSongToTierList(testSong, authToken);

      // Add new song at same position
      await addSongToTierList(newSong, authToken);

      // Read the song at that position
      const response = await readSongFromTierList(testSong.position, authToken);

      expect(response.status).toBe(200);
      expect(response.body).toMatchObject({
        name: newSong.songName,
        artist: newSong.artist,
      });
    });
  });
});
