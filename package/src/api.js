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

  async getBooks(options = {}) {
    const url = options.allChapters
      ? `/book/${options.id}/chapter`
      : `/book/${options.id || ""}`;

    try {
      const { data } = await this.api.get(url, { params: options.params });
      return data;
    } catch (error) {
      return error;
    }
  }

  async getCharacters(options = {}) {
    const url = options.allQuotes
      ? `/character/${options.id}/quote`
      : `/character/${options.id || ""}`;

    try {
      const { data } = await this.api.get(url, { params: options.params });
      return data;
    } catch (error) {
      return error;
    }
  }

  async getQuotes(options = {}) {
    const url = `/quote/${options.id || ""}`;

    try {
      const { data } = await this.api.get(url, { params: options.params });
      return data;
    } catch (error) {
      return error;
    }
  }

  async getMovies(options = {}) {
    const url = options.allQuotes
      ? `/movie/${options.id}/quote`
      : `/movie/${options.id || ""}`;

    try {
      const { data } = await this.api.get(url, { params: options.params });
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
