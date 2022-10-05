import axios from "axios";

class TheOneAPI {
  constructor(token) {
    this.api = axios.create({
      baseURL: "https://the-one-api.dev/v2",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  getBooks() {
    return this.api.get("/book");
  }

  getCharacters() {
    return this.api.get("/character");
  }

  getQuotes() {
    return this.api.get("/quote");
  }

  getMovies() {
    return this.api.get("/movie");
  }
  getChapter() {
    return this.api.get("/chapter");
  }
}

let singleton = null;

export const config = (token) => {
  if (!token) {
    throw new Error("Token is required");
  }
  if (!singleton) {
    singleton = new TheOneAPI(token);
  } else {
    throw new Error("TheOneAPI is already configured");
  }

  return singleton;
};

export const theOneAPI = () => {
  if (!singleton) {
    throw new Error("TheOneAPI not configured");
  }
  return singleton;
};
