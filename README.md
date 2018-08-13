# setup new repository github

* on terminal type
```sh
    npm install -g create-react-app
    create-react-app code-learnreact-basic
```
* go to "code-learnreact-basic" folder with terminal & type
```sh
    echo "# code-learnreact-basic" >> README.md
    git init
    git add README.md
    git commit -m "first commit"
    git remote add origin https://github.com/<username>/code-learnreact-basic.git
    git push -u origin master
```
