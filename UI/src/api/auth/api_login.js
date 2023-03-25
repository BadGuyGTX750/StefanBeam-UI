import axios from "axios";
import appsettings from "../../appsettings.json"

export default async function api_login(e, p) {
  var serverUrl = appsettings.serverUrl;
  var payload = {
    email: e,
    password: p
  };
  return await axios.post(
    serverUrl + "/api/auth/login",
    payload,
    {withCredentials: true}
  );
}