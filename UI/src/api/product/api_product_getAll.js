import axios from "axios";
import appsettings from "../../appsettings.json"

export default async function api_product_getAll() {
  var serverUrl = appsettings.serverUrl;
  return await axios.get(
    serverUrl + "/api/product/getAll",
    {withCredentials: true}
  )
  .then(response => response.data)
  .catch(error => {
    return null;
  })
}