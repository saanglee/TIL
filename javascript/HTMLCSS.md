# Doctype

```html
<!-- HTML5 -->
<!DOCTYPE html>
```

DOCTYPE의 역할: HTML이 어떤 버전으로 작성되었는 지 미리 선언하여 웹 브라우저가 내용을 올바르게 표시할 수 있도록 해줍니다.

# meta태그

## meta태그의 요소들

### charset

```html
<meta charset="utf-8" />
```

charset요소는 문서에서 허용하는 문자 집합을 간단히 표시합니다.
utf-8은 전 세계적인 charater 집합으로 여러 언어 문자들을 포함합니다.

### name, content

name: 어떤 정보의 형태를 가지고 있는 지 알려줍니다.
content: 실제 메타 데이터의 콘텐츠입니다. 머릿말을 요약하는 데 유용합니다.

```html
<meta name="author" content="Chris Mills" />
```

```html
<meta
  name="description"
  content="The MDN Web Docs site provides information about Open Web technologies including HTML, CSS, and APIs for both Web sites and progressive web apps."
/>
```

TODO: 사진넣기
구글에 'MDN'을 검색했을 때, 검색 엔진이 메타 태그의 content 어트리뷰트 안에 있는 내용을 검색 결과와 함께 추가적으로 보여주고 있습니다.

## 검색엔진 최적화를 위한 meta태그 활용

Reference: tcpschool/html-tags/meta

1. 검색 엔진을 위한 keyword를 정의

```html
<meta name="keyword" content="HTML, meta, tag, element, reference" />
```

2. 웹 페이지에 대한 description을 정의

```html
<meta name="description" content="HTML meta tag page" />
```

3. 문서의 저자 author을 정의

```html
<meta name="author" content="TCPSchool" />
```

4. 다른 페이지로 리다이렉트(redirect)시키기
   <br>
   5초 뒤에 다른 페이지로 리다이렉트된다

```html
<meta http-equiv="refresh" content="5;url=http://www.tcpschool.com" />
```

5. 모든 장치에서 웹 사이트가 잘 보이도록 뷰포트(viewport)를 설정

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

# 웹 표준 및 웹 접근성

## 웹 표준이란?

- 웹 상에서 표준적으로 사용되는 기술.
- 웹사이트가 어떠한 운영체제에서나 브라우저에서도 동일하게 보여지도록 W3C(World Wide Web Consortium) 기구에서 지정한 표준.

## HTML5에서 추가된 내용은?

- canvas 기능 추가
- 모든 디바이스에서 호환 가능
- 시멘틱 웹 기술을 지원

**canvas 기능**

- `<canvas>`태그는 자바스크립트를 통해 다양한 그림을 그릴 수 있는 공간을 제공해준다.
- 해상도 독립적으로 SVG 그래픽을 활용하고 있어서 그래프를 그리거나 게임 그래픽이나 다른 기타 이미지를 실시간으로 그려서 사용할 수 있는 기능을 제공해준다
- WebGL과 같은 3d 기술의 구현이 웹 브라우저를 통해서도 가능해졌다

## 웹 접근성이란?

- 모든 사람 (비장애인, 장애인, 노인 등 )이 차별 없이 웹 사이트를 자유롭게 이용함을 말합니다.
- 특정 대상에 한정되어 있지 않고 모든 사용자가 웹사이트를 이용함에 있어 불편함이 없어야 한다는 것입니다.

### 웹 접근성에 맞는 마크업 에시

- 이미지에 alt, IR기법을 사용하여 대체텍스트를 제공한다 : 이미지에 대한 설명
- 동영상에 자막을 제동하고 자동재생은 금지한다.
- a태그의 title속성을 사용해 a태그에 대한 정보를 제공한다.
- input태그에 적절한 label를 제공한다.
- table태그에는 caption, summary, thead, tbody, th 등을 사용한다.
- 컨텐츠는 위에서 아래로 읽을 수 있는 선형구조여야 한다.

## 시멘틱 태그를 사용하는 이유

- 시멘틱 태그를 사용함으로서 서로 관계가 있는 정보를 파악하고 콘텐츠가 어떤 맥락 안에 있는 지 파악한다.
- 검색최적화를 한다.

## 텍스트 관련 태그

### 줄바꿈이 일어나는 태그

#### `<h1>`~`<h6>`

- 제목을 표시할 때 사용한다.
- 제목 단계는 순차적으로 늘어나야 한다.
  - 예를 들어 `<h1>`후에 `<h3>`이 오지 않도록 한다.
  - 스크린 리더 사용자가 사용하는 탐색 기법은 제목에서 제목으로 옮겨가는 방식이기 때문에 단계를 뛰어넘으면 문서의 층위를 파악하는데 혼란스러울 수 있다.
- 한 페이지당 하나의 `<h1>` 만 사용하도록 한다.

#### `<hr>`

- 수평줄이 생긴다.
- 주로 주제가 바뀔 때 넣는다.
- '이 글의 주제가 여기서 바뀌었다'를 알리는 역할이다.

#### `<pre>`

- 표시한 공백(스페이스바로 띄운 공간)이 그대로 표시된다.
- CSS에서 지정할 수 있는 **white-space** 속성의 'pre' 값이 같은 의미를 갖는다.

### 줄바꿈이 일어나지 않는 태그

- `<strong>` :태그 안쪽의 텍스트가 중요한 내용임을 의미한다. + 글자를 굵게 표시한다.
- `<b>` : 글자를 굵게 표시만 한다. (중요하다는 의미는 X)
- `<em>` : '강조하고자 하는 내용'임을 의미 + 글자를 기울여 표시
- `<i>` : 단순히 글자를 기울여 표시 (강조의 의미는 X)
- `<q>` : 줄바꿈 없이 인용문을 표시, 내용 앞뒤 따옴표
- `<mark>` : 형광펜처럼 텍스트 배경색 노란색으로 표시. 검색 결과 표시 등 연관성 있는 텍스트 강조 (중요 의미X)

## SEO란?

검색 엔진 최적화 (SEO: Search Engine Optimization)
검색 엔진은 결과를 보여줄 때, HTML의 태그들을 분석합니다.
이 때, Semantic한 문서는 검색엔진이 유 의미한 결과를 낳을 수 있도록 합니다.

검색 엔진이란? : 웹의 수 많은 정보 중에서 사용자가 원하는 정보만을 여러 웹사이트,웹페이지 에서 검색해주는 시스템, 프로그램

검색 엔진의 동작 원리: 웹 크롤링, 색인화, 검색
크롤러가 방문한 웹 페이지에서 링크(Link)를 발견하면 내 웹 서버에 페이지 정보를 요청합니다. 내 웹 서버는 검색엔진에게 웹 페이지 정보를 보내게 되는데 이것이 바로 “메타태그(Meta Tag)가 포함된 웹 페이지 정보” 입니다.
크롤러는 이렇게 수집한 후 저장 과정에서 각 단어와 문구(검색어와 매칭)에 가중치와 연관도 수치를 설정하게 됩니다. 설정이 끝나면 결과값을 인덱스(색인) 합니다. (목차를 만든다)

그럼, 사용자들이 검색창에 검색을 하게 됐을때 검색어와 연관이 높은 웹 페이지(가중치와 연관도 수치에 따른 인덱스 상태) 들을 순서대로 보여주게 됩니다. 만약, 인덱스가 안된 상태라면 찾는데 엄청난 시간이 소비 될 것입니다.

## button태그의 default타입: submit

form 태그 안에 form data와 관련 없는 버튼을 만든 후 그 버튼을 눌렀더니 form이 전송될 경우가 발생할 수 있으니 버튼태그는 꼭 type을 명시해야 합니다.

- button은 그 자체로는 아무런 이벤트가 없고, click이벤트와 연결시켜서 자바스크립트를 활용하는 방법을 많이 사용합니다.
- submit은 폼을 제출하는 이벤트를 발생시킵니다.
- reset은 폼안에 작성된 내용을 초기화시킵니다.

## section, article 차이점

- article: 문서나 사이트에서 독립된 컨텐츠 영역을 지정합니다. 이 부분을 다른 곳에 옮기더라도 분리되어지고, 의미가 통해야합니다.

- section: 페이지의 주요부분을 의미하며, 긴 글의 세부사항과 같은 관련 컨텐츠의 묶음, 또는 탭 키 사용을 요하는 인터페이스를 가진 웹 어플리케이션에서의 페이지의 묶음 단위를 의미합니다.

section article 차이
▷ article은 내용이 독립적이다.
article 태그는 section과 다르게 독립적으로 존재할 수 있으며 재사용 할 수 있다.
즉 article이 좀 더 구체적이다.

▷ section은 주제별로 구분한 그룹이다.
논리적으로 관계있는 요소 또는 문서를 분리할 때 사용한다.

- section과 article 사용예시

```html
<section>
  <h1>HOT TOPIC</h1>
  <section>
    <p>World</p>
    <article>World news 1</article>
    <article>World news 2</article>
    <article>World news 3</article>
  </section>
  <section>
    <p>Sport</p>
    <article>Sport news 1</article>
    <article>Sport news 2</article>
    <article>Sport news 3</article>
  </section>
</section>
```

reference: https://moo-you.tistory.com/m/406
