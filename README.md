# 1_Clone_Push_Code_To_Repo


Steps to follow while cloning repo and pushing Code to Repo from the computer 


First Make GitHub account Then create a repository on github



>git clone serverReponame.git 
------------------------
just bring the packet (to pack the item )
------------------------
> git status
-----Just check is there anything to pack on the packet----  modified and untrack will shown red in colour if already added to pack will show green
---------------
On branch master
Your branch is up to date with 'origin/master'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   README.md

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        .editorconfig
        .env.example
        .gitattributes
        .gitignore
        .styleci.yml
---------------

>git add .
---------
will add all data to the lets say pack
-----------
> git status
-----Just check is there anything to pack on the packet----  modified and untrack will shown red in colour if already added to pack will show green

>git commit -m "Initial Commit"
---------------We just put the label how to deliver the packet or ready of shipment

>git push origin master
-------------We do shipment on origin master (addresss) branch 
Check your github account everyting is pushed to online except the things which was ignored on the .gitignore file
Now you can check the status again 
>git status 
--------
On branch master
Your branch is up to date with 'origin/master'.

nothing to commit, working tree clean
----------

Enjoy your day 
