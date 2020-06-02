Project AgorafireTV is my entry for [Agora Holiday Hacks 2018!](https://agora-holidayhack.devpost.com/).


## What is AgorafireTV
Is a chrome extension that will allow you to watch your favorite shows from the comfort of your browser :)

## Project description 
- [Notifications for live shows](#notifications)
- [Picture-in-picture](#picture-in-picture)
- [Offline support ](#offline-support)
- [Get started ](#get-started)
- [Test extension](#test-extension)

## Notifications

Users once installed the application receive  notifications when new shows are live boradcasting ... notification are equiped with `actions` for quick access to the current show .

## Picture-in-picture

The broadcasted show can be watched in isolated  window using the Picture-in-Picture Web API in Chrome, by click on the button in the top right of the video.

## Get started

```
    git clone https://github.com/AgoraIO-Community/AgoraFireTV 
    cd agorafire-tv/
    npm install 
    npm run build
```

## Folder Structure

After cloning the repo , your project should look like this:

```
agorafire-tv/
  README.md
  node_modules/
  package.json
  dist/
    index.html
    favicon.ico
  src/
    assets/
    modules/
    pages/
        background/
            aliases.js
            store.js
            reducers.js
        popup/
            components/
            app.js
            index.js
    shared/
    manifest.json
  webpack.config.js

```



## Test the extension 

* Go to `chrome://extensions` via omnibox or  `menu -> Tools -> Extensions `
* Enable Developer mode by ticking the checkbox in the upper-right corner
* Click on the `Load unpacked extension...` button
* Select the directory containing your unpacked extension

## Sending Feedback

We are always open to [your feedback](https://github.com/zmazouzi/agorafireTV).

![Demo](https://i.imgur.com/4IDBUQq.png "demo")

![Demo](https://i.imgur.com/t4BDZwh.png "demo")

![Demo](https://i.imgur.com/dcSHzWP.png "demo")
