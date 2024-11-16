import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "f92652c5726844f68b543a82534e1177",
  },
});
