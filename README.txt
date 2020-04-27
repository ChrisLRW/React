4.3.2020:
    Attempting to push files from home to Work GitHub

    Received files from Home Laptop via branch "HOME"

    Branches:

        Master - final
        HOME - push updated work from HOME Laptop

    Received from Home laptop. Will attempt to push to master 


'================ TESTING DONE =========================

Workflow:

        git init -> command creates a new Git repository. You can convert an existing project
            into a Git or initialize a new empty repository
        git clone -> command to target an existing repository and create a copy/clone of target
        git add . -> add ALL(.) files from working DIR to staging area
        git commit -m "message" -> uploads the staging area to Locla REPO
        git push -> pushes it to the final Repo
        git checkout -b "name" -> is what I used to create the "HOME" branch then i pushd to that
        mv file1 dir1 -> this moves file1 into dir1
        mv file1 file2 -> renames file1 to file2 

    Work PC: 
        git pull origin HOME -> grabs data that has been pushed from user chritsv (home)
        git push origin master -> push data to "master" for: christsv to use 
    
    
    HOME PC:
        git pull origin MASTER -> grabs the latest data from the master (which was pushed by: chrisLRW)
        git push origin HOME -> pushes to "HOME" branch since (for some reason i.e no credentials not sure)
            I cant push to master from: christsv. 


4.7.2020:

    create-react-app : you can create a local dev enviorenment using a single command in node.
        no need to learn new APIs (good - quick and bad - not learning)
    index.js: is the main renderer. Things are declared globally


    i -> install
    npm -> node package manager
    npx -> node package executable
    npx create-react-app name -> instead of manually maintaing new updates with npm. npx grabs the most recent
        release of "create-react-app" in the npm registry. it will download a new one when u run it again
        it is essentiall installing dependancies: react, react-dom, react-scripts
    npm start - starts the dev server
    npm run eject - removes this tool and copies all the internal dependances (cant go back). 
        basically it unhides all the imports in config folder.

4.8.2020:
    Installing Enviornment Dependancies (BAREBONES)

    npm init -> asks you a series of questions (passing "-y" is answerin it in default)
        it creates the "package.json"
    
    Main/Production Dependancies:
        npm i express -> installs "Express" which is a framework that creates a node js webserver. first step of
            server side web server. This will also add the dependancies "express" on package.json. it also added node_modules
        npm i react react-dom -> installs React and ReactDOM Dependancies
        npm i webpack webpack-cli -> webpack is a module bundler. When we take our react application into the file system we usually put it on modules and external modules (like react, reacDOM)
            however browsers only know how to work with single bundles (as of rn it could change). The normal practice is just to bundle
            all your applicatons in a single file and shift that to the browser. webpack -> library webpack-cli -> invokes the webpack and this 
            will webpack will do the bundling for us

    We dont really need all these dependancies on production (this is the simplest deploment stragety) we could push certain dependancies

        npm i babel-loader @babel/core @babel/node @babel/preset-env @babel/preset-react:
            package that compiles JSX into regular ReactAPI calls. 
            "babel-loader" : Hook babel into the webpack process. We need to tell webpakck that while its bundling the system
            it should invoke babel to convert the JSX calls this is 
            @babel/core: core package for babel
            @babel/node: node package is needed for server side rendering
            @babel/preset-env: Tell babel to compile React. if you want to use any modern JS and target older browsers taht dont understand use JS (i.e arrow functions that wont work on old browsers)
            @babel/preset-react: Tell babel to compile React. (JSX)
        
        npm i -D nodemon: "-D" installing as development dependancies
            nodemon automatically lets us restart node when we change things in node.
            node requires you to restart it when you change something 
            nodeman = watcher, handy
        
        npm i -D eslint babel-eslint eslint-plugin-react eslint-plugin-react-hooks:
            (IMPORTANT)
            eslint: immediately analyzes your code and tells you, you have a problem
                shares styles (single codes, semicolons etcc.. )
                variable errors: used a variable you never define or an unuse variable
            babel-eslint: saying let eslint understand babel
            eslint-plugin-react, eslint-plugin-react-hooks: let eslint understand react and react-hooks

        pacakge.json:
            dependancies: main ones. shows up in production server
            devDependancies: these will not show up in the production server. 


4.10.2020:

    To configure ES Lint we created ".eslintsrc.js" and copy pasted the json export from    
    jscomples.com/reactful

    Directory structure (which you dont have to do but is but is good because this is what webpack uses):
        fulljs/
            dist/  (distribution)
                main.js
            src/   (source)
                index.js
                components/
                App.js
                server/
                server.js

4.14.2020:

    "jest" and "prettier" are other dependancies that we should have in our configuration/stack
    Refer to video or website.

    babel.config.js : grabbed from jscomplete.com/reactful. 
        this object instructs babel to use the presets pasted in babel.config.js
    
    webpack.config.js: this config tells webpack to invoke babel "babel-loadeR" on any file that involes js "/\.js5/,"
    



