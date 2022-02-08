# React Router DOM의 기능

- Path Variable
- Query String
- Page Moving

## 1. Path Variable

- 상세페이지 구현 시 url에 1 숫자를 붙여서 일기데이터의 아이디를 넣어준다.
  - `http://localhost:3000/diary/1 `
- 이렇게 url에 변수를 담에서 전달하는 방법을 Path Variable 이라고 한다.
- useParams Hook을 사용

```jsx
<Route path="/diary/:id" element={<Diary />} />
```

> 리액트가 정의하는 리액트의 훅은 아니지만 별도의 라이브러리가 자신의 기능을 더 편하게 사용할 수 있도록 만들어주는 “사용자 정의 Hook”을 **Custom Hooks** 라고 한다

## 2. Query String

url에서 물음표 키워드사용 id와 value(10)를 엮어서 데이터 전송 가능
아주 간단하게 페이지에 데이터를 전송할 수 있는 방법이다. 자주 이용됨

```jsx
const [searchPaarams, setSearchParams] = useSearchParams();
```

- 리액트 라우터의 쿼리 스트링을 처리하는 이 react router의 Custom Hook
- path variable을 처리하는 useParams Hook과는 달리 `[searchPaarams, setSearchParams]` 로 전달받을 수 있는 배열을 반환한다.
- 첫번째 인덱스 `searchPaarams` 는 get을 통해 `get("id")` 전달받은 쿼리스트링을 꺼내 쓸 수 있는 용도
- 두번째 인덱스 `setSearchParams` 는 useState와 비슷하게 `searchPaarams` 을 변경시키는 기능을 한다. `searchPaarams` 가 변경된다는 것은 쿼리스트링을 바꿀 수 있다는 말.
  - setSearchParams 실시간으로 query string을 변경시킬 수 있는 상태변화 함수

## 3. Page Moving

```jsx
// Edit.js
const navigate = useNavigate();
```

```jsx
<button
  onClick={() => {
    navigate("/home");
  }}
>
  HOME으로 가긔
</button>
```

- useNavigate Hook은 페이지를 이동시킬 수 있는 함수를 반환한다.
- 그 함수의 이름을 navigate로 받아준다 `const navigate = useNavitate();`
- navigate의 인자로 경로를 작성해주면 `navigate("/home")`
- 버튼 클릭 시 navigate함수를 호출해서 해당 경로로 이동한다.
