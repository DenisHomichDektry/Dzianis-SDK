import {config, theOneAPI} from "denis-dektry-sdk";
import dotenv from "dotenv";

dotenv.config();

config(process.env.API_ACCESS_TOKEN);

theOneAPI()
  .getBooks()
  .then((res) => console.log(res.data));
