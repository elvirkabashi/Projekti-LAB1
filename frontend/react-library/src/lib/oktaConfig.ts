export const oktaConfig = {
    clientId: '0oa9dw5hv6QM39oic5d7',
    issuer: 'https://dev-15591350.okta.com/oauth2/default',
    redirectUri: 'https://localhost:3000/login/callback',
    scopes: ['openid','profile','email'],
    pkce: true,
    disableHttpsCheck: true,
}