const dev = true;

module.exports = {
    dev: dev,
    api: dev ? `http://localhost:3029` : `https://api.waya.one`,
    token: ``,
    site: {
        name: `waya.one`,
        icon: `https://cdn.discordapp.com/avatars/857230367350063104/a54dbb364757f99076f36003ae68f77f.png?size=1024`
    },
    login: `https://discord.com/api/oauth2/authorize?client_id=857230367350063104&redirect_uri=${dev ? `http%3A%2F%2Flocalhost%3A3000%2Flogin` : `https%3A%2F%2Fproxy.waya.one%2Flogin`}&response_type=code&scope=identify`
}
