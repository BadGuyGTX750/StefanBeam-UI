import axios from "axios";
import appsettings from "../../appsettings.json"

export default async function api_register() {
    var serverUrl = appsettings.serverUrl;
    return await axios.post(
      serverUrl + "/api/auth/refresh",
      {withCredentials: true}
    );
}