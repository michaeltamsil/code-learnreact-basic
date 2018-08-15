# setup
* on terminal type
```sh
sudo npm install -g create-react-app
create-react-app code-learnreact-basic
```

* go to "code-learnreact-basic" folder with terminal & type
```sh
git init
git commit -m "first commit setup using create-react-app tool"
git remote add origin https://github.com/<username>/code-learnreact-basic.git
git push -u origin master
```

* setup env with .env file with below description, to make sure no conflict with back end with port of 3000
```sh
PORT = 8080
```

# run react app
* open console on VS code & type
```sh
yarn start
```
# install & setup eslint
```sh
sudo npm i -g eslint
eslint --init
```
on process choose JSON so the files will named with .json


* setup on vscode  on user setting
```js 
"eslint.autoFixOnSave": true,
```

# install & add eslint-plugin-react
```sh
sudo npm install -g eslint-plugin-react
```

* add on .eslintrc.json on field of "extends"
```json
"extends": [
    "eslint:recommended",
    "plugin:react/recommended"
]
```
have issue with airbnb so don't use it for now

# rest (5 min)
* try edit on index.js and save it. it will autocorrectnes based on eslintrc.json preferences
* try
```sh
sudo yarn build
```
this will create for production folder named build, this should used to put on web server.
you can try test using with http-server --p <yourport>

# storybook
* it's for place to explain react UI component, we skiped for now

# container components & presentational components
Conteiner
* They are more concerned about the behavior
* They render their presentational components
* They make API calls and manipulate data
* They define event handlers
* They are written as classes

Presentational
* They are more concerned with the visual representation
* They render the HTML markup (or other components)
* They receive data from the parents in the form of props
* They are often written as stateless functional components

# use propTypes
# HoC
# use react-refetch
# use react-motion