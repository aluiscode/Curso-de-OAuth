require('dotenv').config();

const config = {
  authJwtSecret: process.env.AUTH_JWT_SECRET,
  spotifyClientId : process.env.SPOTIFY_CLIENT_ID,
  spotifyRedirectUri : process.env.SPOTIFY_REDIRECT_URI,
}

module.exports = { config };