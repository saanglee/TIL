> https://velog.io/@velopert/eslint-and-prettier-in-react

## eslint-config-prettier

https://github.com/prettier/eslint-config-prettier

- prettier 에서 관리 해 줄 수 있는 코드 스타일의 ESLint 규칙을 비활성화 시켜줍니다.
- ESLint 는 자바스크립트 문법 관련된 것들만 관리하게 되고, 코드스타일 관련 작업은 prettier 가 담당하게 됩니다.

## prettier-eslint

https://github.com/prettier/prettier-eslint

- prettier 에서 ESLint 설정을 연동해서 사용하게 해줍니다.
- .prettierrc 같은 파일을 생성하지 않고 온전히 ESLint 설정으로만 관리합니다.
- create-react-app에 ESLint 와 Prettier 적용하기 https://velopert.com/3671

<br>
<br>

- 만약에 eslint-airbnb-config 를 적용하셨다면, src/index.js 에서 document 를 사용하려고 하는 부분에서 아마 no-undef 라는 오류가 뜰 것입니다.
- 이를 방지하기 위해선, package.json 에서 eslintConfig 의 env 객체에 browser 값을 true 로 설정하셔야 합니다.

```
  "eslintConfig": {
    "extends": "airbnb",
    "rules": {
      "react/prefer-stateless-function": 0,
      "react/jsx-filename-extension": 0,
      "react/jsx-one-expression-per-line": 0
    },
    "env": {
      "browser": true
    }
  },
```

---

<br>
<br>

Eslint auto fix not working 검색

> ## ESLint in VSCode not fixing on save
>
> https://stackoverflow.com/questions/62277286/eslint-in-vscode-not-fixing-on-save

### Answer

Get eslint plugin, add this code to your settings.json

```
 {
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": ["javascript"]
 }

```

해결!
