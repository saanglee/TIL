# git add 취소

해당파일을 unstaged상태로 변경
`git reset HEAD 파일명`

# git commit 취소

commit 목록 확인
`git log`

commit을 취소하고 해당 파일들은 staged 상태로 워킹 디렉토리에 유지
`git reset --soft HEAD^`

commit을 취소하고 해당 파일들을 unstaged상태로 워킹 디렉토리에 유지

`git reset --mixed HEAD^`기본

`git reset HEAD^` 위와 동일

`git reset HEAD~2 ` 마지막 2개의 commit을 취소

commit 취소하고 해당 파일들은 unstaged상태로 워킹 디렉토리에서 삭제
`git reset --hard HEAD^`
`

> Reference: https://gmlwjd9405.github.io/2018/05/25/git-add-cancle.html
