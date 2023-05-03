export const oktaConfig = {
    clientId: '0oa9ct4ucrhjs76bI5d7',
    issuer: 'https://dev-15591350.okta.com/oauth2/default',
    redirectUri: 'http://localhost:8080/login/callback',
    scopes: ['openid','profile','email'],
    pkce: true,
    disableHttpsCheck: true,
}