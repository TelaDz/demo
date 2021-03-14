git config --global user.name "dz"
git config --global user.email "464838789@qq.com"

Create a new repository
git clone git@106.75.246.96:openproject/demo.git
cd demo
touch README.md
git add README.md
git commit -m "add README"
git push -u origin master

Push an existing folder
cd existing_folder
git init
git remote add origin git@106.75.246.96:openproject/demo.git
git add .
git commit -m "Initial commit"
git push -u origin master

Push an existing Git repository
cd existing_repo
git remote rename origin old-origin
git remote add origin git@106.75.246.96:openproject/demo.git
git push -u origin --all
git push -u origin --tags