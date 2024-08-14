const jwt   = require("jsonwebtoken");
const axios = require("axios");

class GitHubApp {
    constructor(appId, installId, privateKey){
        this.id = appId;
        this.installationId = installId;
        this.privateKey = privateKey;
    }

    getAddRunnerToken = async(token) => {
        let url = `https://api.github.com/orgs/LexisNexis-RBA/actions/runners/registration-token`;
        let config = {
            headers: {
                "Accept" : "application/vnd.github.v3+json",
                "Authorization" : `Bearer ${token}`
            }
        };   

        return axios.post(url, null, config)
            .then ((result) => {
                return result.data;
            });
    }

    generateAccessTokenAsync = async () => {
        let payload = {
            iat: Math.floor(new Date().getTime() / 1000) - 60,          // 1 minute ago
            exp: Math.floor(new Date().getTime() / 1000) + (2 * 60),    // 2 minutes from now
            iss: this.id
        };
        
        let signingOptions = {
            algorithm:  "RS256"
        };

        let token = jwt.sign(payload, this.privateKey, signingOptions);

        // now that we have the bearer token, we need to exchange that for an access token
        let url = `https://api.github.com/app/installations/${this.installationId}/access_tokens`;

        let config = {
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        };

        return axios.post(url, null, config)
            .then((result) => {
                return result.data;
            })
            .catch((err) => {
                console.log(err);
                return null;
            });
    };

}

module.exports = {
    GitHubApp : GitHubApp
}

