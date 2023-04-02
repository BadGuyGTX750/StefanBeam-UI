import axios from "axios";
import appsettings from "../../appsettings.json"

export default async function api_subc_getByName(name) {
  var serverUrl = appsettings.serverUrl;
  return await axios.get(
    serverUrl + "/api/subCategory/getByName?name=" + name,
    {withCredentials: true}
  )
  .then(response => response.data)
  .catch(error => {
    return null;
  })
}