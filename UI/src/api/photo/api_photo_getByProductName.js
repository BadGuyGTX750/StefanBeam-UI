import axios from "axios";
import appsettings from "../../appsettings.json"

export default async function api_photo_getByProductName(name) {
  var serverUrl = appsettings.serverUrl;
  return await axios.get(
    serverUrl + "/api/photoAttachment/getByProductName?productName=" + name,
    {withCredentials: true}
  )
  .then(response => response.data)
  .catch(error => {
    return null;
  })
}