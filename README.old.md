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
npm run start
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

# rest (5 min)


