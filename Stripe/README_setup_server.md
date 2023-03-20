# Server Initial Setup

# setup json
npm init -y

# install express stripe e dotenv
# express = backend node.js framework
# stripe = provides access to the Stripe API
# dotenv = zero-dependency module that loads environment variables from a .env file into process.env

npm i express stripe dotenv

# install nodemon which restart automatically out server
npm i --save-dev nodemon

# In order to run client and server at the same link we need to move all the client components in the "public" folder

# ---------------

# SERVER START

npm run devStart
