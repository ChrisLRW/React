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

    Work PC: 
        git pull origin HOME -> grabs data that has been pushed from user chritsv (home)
        git push origin master -> push data to "master" for: christsv to use 
    
    
    HOME PC:
        git pull origin MASTER -> grabs the latest data from the master (which was pushed by: chrisLRW)
        git push origin HOME -> pushes to "HOME" branch since (for some reason i.e no credentials not sure)
            I cant push to master from: christsv. 
