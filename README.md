# Apple-Clone 

Apple.com clone web app that is built using React.js and fetch data from a json file found in public folder.

# Motivation

I wanted to recreate the apple.com website using react.

# Description

For the back end, I used a json file that found in public folder.

For the front end, I wanted to make the current [apple.com](https://www.apple.com/) better by using a third party API from Google Cloud, specifically youTube, and incorporating it to the website, so anyone can have access to Apple's youTube channel straight from the website. 

# Build Status

Live:https://apple-clone-by-tophik.netlify.app/

# Stack

- React

# APIs

- YouTube from Google Cloud [click](https://console.cloud.google.com/apis/)

# Requirements

- Node

# Setup

- clone to computer using:

```
git clone https://github.com/tophikmohammed1234/apple.com-clone.git
```

- run npm run dev from inside the client directory.

```
cd ../client
npm install
```

**_Note: you will need api key from the [google cloud](https://console.cloud.google.com/apis/) and Apple's youTube channel ID._**

Create a .env file in the client directory:

```
VITE_API_KEY=<your_youTube_api_key>
VITE_APP_CHANNEL_ID=<your_channel_id>
```

- From inside clinet folder type:

```
npm run dev
```

