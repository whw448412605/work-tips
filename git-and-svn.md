## git 和 svn 的区别、使用场景

1. git 常用的命令
2. pull 和 fetch 的区别
3. merge 和 rebase 的区别
4. git和svn的区别，应用场景



### git 常用命令

1、进入盘符 cd D: 回车
2、进入一个目录 cd file/ 退出目录 cd .. cd ../../
3、查看当前目录下可见的文件 ls
4、列出当前目录下的所有文件 ls -la
5、初始化仓库 git init
6、cat hello.txt 查看文件里的内容
7、添加一个文件 git add hello.txt
8、git status 查看状态
9、git commit -m '提交的注释' 记得一定要写注释
10、vi/vim 是一个linux 下的文本编辑器
按下 i 键，底部显示 -INSERT- 进入编辑状态，可以编辑文本
按下esc 退出编辑状态， 输入 :wq 回车 保存并退出vi
11、git add . 添加所有的文件
12 删除文件 git rm hello.txt 之后还要记得 git commit -m ‘注释’
13、查看提交记录 git log
git log --pretty=oneline 只看版本号
14、回退到上一个版本 git reset --hard HEAD^
回到上上一个版本 git reset --hard HEAD^^
回到上100个版本 git reset --hard HEAD~100
15、如果窗口关掉，使用git reflog 查看命令记录
16、关联远程仓库 git remote add origin '仓库地址'
17、推送到远程仓库git push origin master -u
如果出现： Authencation 用户名或密码错误！！！
18、查看分支 git branch
19、git branch dev 创建一个dev分支
20、git checkout dev 切换到 dev分支
21、git checkout -b dev
22、git merge dev 合并分支
23、创建目录 mkdir file
24、pwd 查看当前所在的目录
25、git config --global credential.helper wincred 记住用户名密码

### pull 与 fetch 的区别

fetch：相当于是从远程获取最新版本到本地，不会自动merge；
pull：相当于是从远程获取最新版本并merge到本地
简单的说，pull=fetch+merge，pull的话，下拉远程分支并与本地分支合并。fetch只是下拉远程分支，怎么合并，可以自己再做选择

### merge和rebase的区别

两个使用场景是不一样的，merge只是合并另外一个分支的内容，rebase也合并另外一个分支的内容，但是会把本分支的commits顶到最顶端
D---E test

/

A---B---C---F master
在master执行 git merge test ,然后会得到如下结果：
D--------E

/ \

A---B---C---F----G test, master
在master执行 git rebase test ，然后得到如下结果：
A---B---D---E---C '---F' test, master
通过上面可以看到，想要更好的提交树，使用rebase操作会更好一点。这样可以线性的看到每一次提交，并且没有增加提交节点。
在我们操作过程中。merge 操作遇到冲突的时候，当前merge不能继续进行下去。手动修改冲突内容后，add 修改，commit 就可以了。

而rebase 操作的话，会中断rebase,同时会提示去解决冲突。解决冲突后,将修改add后执行git rebase —continue继续操作，或者git rebase —skip忽略冲突


1、git 是分布式的，svn是集中式的
2、git 按元数据存储，svn是按文件存储
3、git 的内容完整性要优于svn，如果磁盘故障和网络问题可降低对版本库的破坏
4、git 没有一个全局版本号，svn有
5、svn 建议先update才能commit
6、克隆全新同样的目录，git速度要远快于svn
7、svn 只能有一个指定的中央版本库，git可以有无限个版本库
8、在svn分支是一个完整的目录，拥有完整的实际文件
9、svn 提交直接记录到中央版本库，git属于本地活动，只需推到主要版本库即可

### git 应用场景

对程序源代码进行差异化的版本管理，代码库占极少的空间。易于代码的分支化管理，Git仅适用于代码管理。

### svn 应用场景

一个研发队伍的成员正常包括：需求分析、设计、美工、程序员、测试、实施、运维，每个成员在工作中都有产出物，包括了文档、设计代码、程序代码，这些都需要按
项目集中进行管理的。SVN能清楚的按目录进行分类管理，使项目组的管理处于有序高效的状态。
