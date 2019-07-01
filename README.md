# Chat APP

This is a fun chatting app which is developed in a weekend.

## Getting Started

Clone repository

```
git clone https://github.com/Rohitturbot/ChatApp.git
```

go to

```
cd ./ChatApp
```

install dependencies

```
npm i
```

run project

```
npm start
```

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

```
npm test
```

Launches the test runner in the interactive watch mode.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

```
npm run build
```

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Simple Things to know

I've used `react-js` for creating its **UI** and for **DB** I've used `FireStore` & `RTDB`.
Google Firebase is the core of this project. I've used `FireStore`, `RTDB`, `Cloud Functions` & `Hosting` of it.

So this project is hosted on firebase I've used two DB `FireStore` and `RTDB` and for Communication in between both of these DB I've created a very simple
`CloudFunction` and another trigger function for `cleverbot`.

## Important Firebase Command used in this project

1. `firebase login`
2. `firebase init`
3. `firebase deploy`
4. `firebase deploy --only hosting`
5. `firebase deploy --only functions`