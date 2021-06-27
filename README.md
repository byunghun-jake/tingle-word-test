# vue-wordtest



## TODOs

### View

- [x] TestList (HOME)
- [ ] Test
  - [x] 테스트 정보 (TestInfo)
  - [ ] 학생 이름 입력
  - [ ] 문제 풀기



## 고민

- 시험 정보와 실제 시험을 보는 페이지의 라우팅을 어떻게 할까?

  test/:id 로 일치시켜놓은 다음에 내부 컴포넌트만 바꿔주고 싶은데, 그럼 조건문으로 컴포넌트 렌더링 시키는 게 답인걸까?

  굳이 nested 라우팅을 할 필요가 없지 않나?!
  
- 문제 채점 알고리즘을 어떻게 해야 할까?

  1. 한글 뜻을 보고 영어 단어 적기

     => 제출한 답과 영어 단어가 일치하는 지 확인한다.

  2. 영어 단어를 보고 한글 뜻 적기

     => ???



## Project setup

```bash
$ vue create vue-wordtest
$ vue add tailwindcss
$ npx tailwindcss init
```

- vue-cli를 이용하여 vue project 생성
- tailwindcss 플러그인 설치
  - https://www.npmjs.com/package/vue-cli-plugin-tailwind
  - 플러그인 오류로 인해 config 파일이 생성되지 않아, config 파일을 따로 만들어준다.



```bash
npm install -D sass-loader@^10 node-sass
```

- sass-loader, node-sass 설치



- vue
- vue-router
- vuex
- tailwindcss



---



## Tailwind Custom

```js
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      padding: "1rem",	// (1)
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
```



1. Container Padding



---



## DummyData

DB를 구성하기 전에 더미데이터를 만들어 프론트를 구성하면 좋을 것 같다는 생각이 들었다.

JSON 형태로 간단한 더미 데이터를 만들 수 있는 사이트가 있어서 사용해보았다.

http://www.objgen.com/json































