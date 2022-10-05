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

  // config = {
  //   allChapters: boolean,
  //   allQuotes: boolean,
  //   id: string,
  //   params: object, // see documentation of api
  // }

  async getBooks(config = {}) {
    const url = config.allChapters
      ? `/book/${config.id}/chapter`
      : `/book/${config.id || ""}`;

    try {
      const { data } = await this.api.get(url, { params: config.params });
      return data;
    } catch (error) {
      return error;
    }
  }

  async getCharacters(config = {}) {
    const url = config.allQuotes
      ? `/character/${config.id}/quote`
      : `/character/${config.id || ""}`;

    try {
      const { data } = await this.api.get(url, { params: config.params });
      return data;
    } catch (error) {
      return error;
    }
  }

  async getQuotes(config = {}) {
    const url = `/quote/${config.id || ""}`;

    try {
      const { data } = await this.api.get(url, { params: config.params });
      return data;
    } catch (error) {
      return error;
    }
  }

  async getMovies(config = {}) {
    const url = config.allQuotes
      ? `/movie/${config.id}/quote`
      : `/movie/${config.id || ""}`;

    try {
      const { data } = await this.api.get(url, { params: config.params });
      return data;
    } catch (error) {
      return error;
    }
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
