import config from '../config';
import Cookies from 'cookies';

module.exports = async function logMeIn(req, res) {
    const cookies = new Cookies(req, res);
    let user;
    if (cookies.get(`token`)) user = await fetch(`${config.api}/login?code=${cookies.get(`token`)}`, {
        headers: {
            authorization: config.token
        }
    }).then(res => res.json());

    if (user?.status || !cookies.get(`token`)) {
        res.writeHead(307, {
            location: config.login
        });
        return res.send();
    };

    return user;
};