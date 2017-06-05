# preact-webpack-base
1. git clone https://github.com/ThisIsRuddy/preact-webpack-base
2. cd preact-webpack-base

## For development
npm start

Editing and saving .js/.css files in the src folder triggers HMR and RHL


## For Production deploy
npm run build

./dist folder now contains all minified files including minified external .css files (semantic-ui).
This also creates gzip ready files, transfers files/fonts/images to dist for static deploy.