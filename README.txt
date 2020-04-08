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