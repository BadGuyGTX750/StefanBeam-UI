import axios from "axios";
import appsettings from "../../appsettings.json"

export default async function api_register(fn, ln, e, p) {
    var serverUrl = appsettings.serverUrl;
    var payload = {
        firstName: fn,
        lastName: ln,
        email: e,
        password: p
    };
    return await axios.post(
      serverUrl + "/api/auth/register",
      payload,
      {withCredentials: true}
    );
}