import axios from "axios";
import appsettings from "../../appsettings.json"

export default async function api_photo_upload(payload) {
  var serverUrl = appsettings.serverUrl;
  var formData = new FormData()
  formData.append('name', payload['name'])
  formData.append('productName', payload['productName'])
  formData.append('content', payload['content'])
  return await axios.post(
    serverUrl + "/api/photoAttachment/upload",
    formData,
    {withCredentials: true, headers: {"Content-Type": "multipart/form-data"}}
  );
}