import axios from "axios";
import appsettings from "../../appsettings.json"

export default async function api_product_add(payload) {
  var serverUrl = appsettings.serverUrl;
  return await axios.post(
    serverUrl + "/api/product/add",
    payload,
    {withCredentials: true}
  );
}