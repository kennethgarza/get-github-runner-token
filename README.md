# Get GitHub Action Runner Token
Uses a github App ID, Install Id, and App Private key to retrieve the Github Action Runner Registration Token.

This app also will get the app access token from the app as well, it is needed to get the registration token.

## How to Use
1. Create an .env file with the following information
```text
APP_ID="12345"
INSTALL_ID="9876543"
PRIVATE_KEY="-----BEGIN RSA PRIVATE KEY-----
MIIEowIBAAKCAQEAqcT9G0BezFc9mUSOTtl0Y4dQMr+YrOOi69D5CduDug98qHZT
...
Rl6yNOYmW/Y9SysMDimAHNdqzH3pXG1ekig2nqCzPITRT5eA7oDG
-----END RSA PRIVATE KEY-----"
```
2. Run `docker compose up`
3. Check the console output for the requested information.
```text
app-1  |
app-1  | up to date, audited 25 packages in 501ms
app-1  |                                                                                                                                              
app-1  | 2 packages are looking for funding                                                                                                           
app-1  |   run `npm fund` for details                                                                                                                 
app-1  | 
app-1  | found 0 vulnerabilities                                                                                                                      
app-1  | Found authToken : ghs_TOKEN_HERE                                                                               
app-1  | Found Registration Token: AZD_REGISTRATION_TOKEN_5XA
app-1  | It Expires: 2024-08-14T19:28:08.286Z
```

## A small note about privacy
Please be careful with the `.env` file.  It should be considered very private and never uploaded to a git repo of any kind.  The `.gitignore` should prevent it from added but double check anyways.