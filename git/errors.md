# get merge, git checkout

ERROR

```
➜  pre-assignment git:(dev) ✗ git checkout main
error: Your local changes to the following files would be overwritten by checkout:
        src/App.js
        src/components/Header/Header.jsx
        src/pages/Login/Login.jsx
Please commit your changes or stash them before you switch branches.
Aborting
```

메세지 그대로 merge 또는 switch branch 이전에 변경사항을 commit 하거나 stash 하라는 것

쓸데 없는 커밋을 하고싶지 않을 때: `git stash` 명령어를 사용

`stash`는 간단하게 버전관리 되는 대상들을 잠시동안 임시저장 해두는 방법

`git stach` 현재 staging영역의 파일들의 변경사항을 스택에 넣어 둔다.
이후 pull이나 checkout 명령어가 가능하다.

` git stash pop` tash 명령어로 스택에 넣어둔 변경 사항을 적용하고, 스택에서 제거한다.

> Reference: https://blog.hodory.dev/2020/02/18/error-Your-local-changes-would-be-overwritten-by-merge/
