import { config, theOneAPI } from "denis-dektry-sdk";
import dotenv from "dotenv";

dotenv.config();

config(process.env.API_ACCESS_TOKEN);

theOneAPI()
  .getQuotes()
  .then((res) => console.log(res));
