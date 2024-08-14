const { GitHubApp } = require ("./business/github.js");

let ghApp = new GitHubApp(process.env.APP_ID, process.env.INSTALL_ID, process.env.PRIVATE_KEY);

ghApp.generateAccessTokenAsync()
    .then(tokenResponse => {
        let token = tokenResponse.token;
        console.log(`Found authToken : ${token}`)
        return token
    })
    .then(token => ghApp.getAddRunnerToken(token))
    .then(registrationToken => {
        console.log(`Found Registration Token: ${registrationToken.token}`);
        console.log(`It Expires: ${registrationToken.expires_at}`);
    })
    .catch (err => {
        core.error (`Error: ${err}`);
    })