import logMeIn from '../components/login.js';
import Header from '../components/header'

export default function Home({ user }) {
    return (
        <>
            <Header user={user} />
        </>
    );
};

Home.getInitialProps = async ({ req, res }) => {
    const user = await logMeIn(req, res);
    console.log(user)
    return { user: user };
};