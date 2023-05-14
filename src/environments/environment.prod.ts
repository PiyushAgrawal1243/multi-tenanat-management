export const environment = {
  production: true,
  appVersion: '1.0.0',
  api: {
    
    baseUrl: 'http://localhost:5000/',
    routes: {
      login: {endpoint: 'login', method: 'POST'},
      refresh: {endpoint: 'refreshToken', method: 'POST'}
    }
  }
};
