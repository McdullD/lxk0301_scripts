#git clone https://github.com/…/PrettyGirls.git

#拉取远程代码
#git pull dev

#设定远程地址
#git remote add dev https://github.com/lxk0301/jd_scripts.git

#git remote add zong https://github.com/nbzongzong/Actions

#git push -u -f dev master 
#提交到远程仓库

#git remote add origin https://github.com/lxk0301/jd_scripts.git


#拉取git上文件 获取更新


#推送到git2上



#git pull --no-edit lxk master
#git pull --no-edit zong main --allow-unrelated-histories
#git pull --no-edit https://github.com/nbzongzong/Actions
git pull --no-edit zong main --allow-unrelated-histories

git add .

git commit -m '同步zong'

#git push -u -f git@github.com:McdullD/lxk0301_scripts.git master

git push -u -f git@github.com:McdullD/lxk0301_scripts.git master
