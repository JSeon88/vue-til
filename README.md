# 설정

## vs code 설정
* 기본 플로그인 설치
  - Auto Close Tag
  - Auto Rename Tag
  - Bracket Pair Colorizer
  - Debugger for Chrome
  - htmltagwrap
  - Live Server
  - Live Share
  - Material Icon Theme
  - npm intellisense
  - Path Intellisense

  - ESLint
  - Prettier - Code formatter
* Vue 플로그인 설치
  - Vetur
  - Vue VSCode Snippets

## Vue CLI
* install : 
  > npm install -g @vue/cli
* Create a project :
  > vue create my-project

Manually select features -> Babel, Linter, Unit Testing -> ESLint+Prettier -> Jest -> In dedicated config files -> N

## ESLint 에러가 화면에 표시되지 않게 하는 방법
* eslint 에러가 나더라도 화면상 표현하는데 에러나는게 아니라면 eslint 에러가 화면을 가려서는 안됨.
* 해결방법
  * vue.config.js 생성
    ```javascript
      module.exports = {
        devServer: {
          overlay: false,
        },
        configureWebpack: {
          devtool: 'source-map',
        },
      };
    ``` 

## ESLint에 Prettier 규칙 적용
  * .eslintrc.js
    ```javascript
        rules: {
          "prettier/prettier": ['error', {
            singleQuote: true,
            semi: true,
            useTabs: true,
            tabWidth: 2,
            trailingComma: 'all',
            printWidth: 80,
            bracketSpacing: true,
            arrowParens: 'avoid',
          }]
        },
    ```
  * vs code 설정 수정
    - Prettier 플러그인 설정 끄기(이 프로젝트에서만 끄기 설정 가능)
    - Settings (cmd + ,)
      - eslint 검색
      - Eslint: Validate > Edit in settings.json 클릭
        - eslint.validate 추가
          ```javascript
              "eslint.validate": [
              {
                "language": "vue",
                "autoFix": true
              },
              {
                "language": "javascript",
                "autoFix": true
              },
              {
                "language": "javascriptreact",
                "autoFix": true
              },
              {
                "language": "typescript",
                "autoFix": true
              },
              {
                "language": "typescriptreact",
                "autoFix": true
              }
            ],
          ```
        - editor.codeActionsOnSave 수정
          ```javascript
            "editor.codeActionsOnSave": {
              "source.fixAll": true,
              // false 를 꼭 true로 변경할 것.!!
              "source.fixAll.eslint": true
            },
          ```

## 파일 절대 경로 설정
  - jsconfig.json 추가
    ```javascript
      {
        "compilerOptions": {
          "baseUrl": ".",
          "paths": {
            "~/*":[
              "./*"
            ],
            "@/*":[
              "./src/*"
            ]
          }
        },
        "exclude": [
          "node_modules",
          "dist"
        ]
      }
    ```

## NVM(Node Version Manager)
  - https://github.com/nvm-sh/nvm 
    * 설치
    > curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash

    * ~/.bash_profile, ~/.zshrc, ~/.profile, or ~/.bashrc 파일에 해당 아래 내용 추가
    > export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm

    * 확인
    > nvm

  - 주의 사항
    * macOS 10.15 이후 기본 쉘은 zsh
      - touch ~/.zshrc
    * bash 쉘이 기본인 경우
      - `touch ~/.bash_profile`
      - run `source ~/.bash_profile`
    * 전에 bash 였지만 zsh로 깔았다면
      - run `. ~/.zshrc`

## axios
  - axios : https://github.com/axios/axios
  - interceptors : https://github.com/axios/axios#interceptors


# vue-til

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
