import axios from "axios";
import appsettings from "../../appsettings.json"

export default async function api_register(fn, ln, e, p) {
    var serverUrl = appsettings.serverUrl;
    var payload = {
        firstName: fn,
        lastName: ln,
        email: e,
        password: p
    }
    return await axios({
        method: 'post',
        url: serverUrl + '/api/auth/register',
        data: payload
    });
}