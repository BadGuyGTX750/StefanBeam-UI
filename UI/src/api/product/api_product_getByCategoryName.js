import axios from "axios";
import appsettings from "../../appsettings.json"

export default async function api_product_getByCategoryName(name) {
  var serverUrl = appsettings.serverUrl;
  return await axios.get(
    serverUrl + "/api/product/getByCategoryName?categoryName=" + name,
    {withCredentials: true}
  )
  .then(response => response.data)
  .catch(error => {
    return null;
  })
}