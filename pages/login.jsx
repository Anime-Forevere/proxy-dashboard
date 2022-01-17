import config from '../config';
import Cookies from 'cookies';

export default function Login() {
    return (<>If you're seeing this, please contact Luna.</>);
};

Login.getInitialProps = async ({ req, res, query }) => {
    if (query.code) {
        let user = await fetch(`${config.api}/login?code=${query.code}`, {
            method: 'POST',
            headers: {
                authorization: config.token,
                site: config.dev ? `http://localhost:3000/login` : `https://proxy.waya.one/login`
            }
        }).then(res => res.json());

        const cookies = new Cookies(req, res);
        cookies.set('token', user.token);

        res.writeHead(307, {
            Location: '/'
        });
    } else {
        res.writeHead(307, {
            location: config.login
        });
    };
    res.end();
    return {};
};