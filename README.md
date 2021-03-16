# 设置

## git
- git config --global user.name "dz"
- git config --global user.email "464838789@qq.com"

Create a new repository
- git clone git@106.75.246.96:openproject/demo.git
- cd demo
- touch README.md
- git add README.md
- git commit -m "add README"
- git push -u origin master

Push an existing folder
- cd existing_folder
- git init
- git remote add origin git@106.75.246.96:openproject/demo.git
- git add .
- git commit -m "Initial commit"
- git push -u origin master

Push an existing Git repository
- cd existing_repo
- git remote rename origin old-origin
- git remote add origin git@106.75.246.96:openproject/demo.git
- git push -u origin --all
- git push -u origin --tags

## 生成SSH密钥对

- ssh-keygen -t ed25519

- 或者使用 ssh-keygen -t rsa -b 2048

- 出现提示后 按多次Enter键 直到结束

## 将SSH密钥添加到您的GitLab帐户
- 苹果系统：
- pbcopy < ~/.ssh/id_ed25519.pub

- Windows上的Git Bash：
- cat ~/.ssh/id_ed25519.pub | clip

导航到https://gitlab.com您或本地的GitLab实例URL并登录。

1. 在右上角，选择您的头像。
2. 选择编辑个人资料。
3. 在左侧边栏中，选择SSH密钥。
4. 将复制的公共密钥粘贴到“密钥”文本框中。
5. 确保您的密钥在“标题”文本框中包含描述性名称，例如“工作笔记本电脑”或“
6. 家用工作站”。
7. 在“过期时间”部分下包含密钥的（可选）过期日期。（在GitLab 12.9中引入。）


详细 http://106.75.246.96/help/ssh/README