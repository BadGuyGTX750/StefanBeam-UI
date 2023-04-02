import axios from "axios";
import appsettings from "../../appsettings.json"

export default async function api_subc_getByParentName(parentName) {
  var serverUrl = appsettings.serverUrl;
  return await axios.get(
    serverUrl + "/api/subCategory/getByParentName?parentName=" + parentName,
    {withCredentials: true}
  )
  .then(response => response.data)
  .catch(error => {
    return null;
  })
}