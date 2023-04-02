import axios from "axios";
import appsettings from "../../appsettings.json"

export default async function api_product_getFlavorQuantitiesByProductName(name) {
  var serverUrl = appsettings.serverUrl;
  return await axios.get(
    serverUrl + "/api/product/getFlavorQuantitiesByProductName?productName=" + name,
    {withCredentials: true}
  )
  .then(response => response.data)
  .catch(error => {
    return null;
  })
}