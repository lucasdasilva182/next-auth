/**
 * An array of routes that are accessible to the public
 * These route does not require authentication
 * @type {string[]}
 */
export const publicRoutes = ['/', '/auth/new-verification'];

/**
 * An array of routes that are for authentication
 * These route will redirect logged in user to /settings or whatever you want
 * @type {string[]}
 */
export const authRoutes = [
  '/auth/login',
  '/auth/register',
  '/auth/error',
  '/auth/reset',
  '/auth/new-password',
];

/**
 * The prefix for API authentication routes
 * Routes that start with this prefix are used for API authentication purposes
 * @type {string}
 */
export const apiAuthPrefix = '/api/auth';

/**
 * The default redirect path after loggin in
 * @type {}
 */
export const DEFAULT_LOGIN_REDIRECT = '/settings';
