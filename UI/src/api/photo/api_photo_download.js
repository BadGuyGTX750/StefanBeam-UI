import axios from "axios";
import appsettings from "../../appsettings.json"

export default async function api_photo_download(name, ext) {
  var serverUrl = appsettings.serverUrl;
  return await axios.get(
    serverUrl + "/api/photoAttachment/download?name=" + name + "&ext=" + ext,
    {withCredentials: true, responseType: 'blob'}
  )
  .then(response => response.data)
  .catch(error => {
    return null;
  })
}