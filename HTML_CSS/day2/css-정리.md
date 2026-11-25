# CSS 정리

> 수업 날짜: 261120

---

## 0. 복습: HTTP 요청

### HTTP 요청의 필수 요소: Method + URL

| 요소 | 의미 | 예시 |
|---|---|---|
| Method | 행위, 동작 | `GET`(조회), `POST`(생성), `PUT`/`PATCH`(수정), `DELETE`(삭제) |
| URL | 자원(리소스) | `https://example.com/users/1` |

### 데이터를 보낼 때

- **Query String**: URL 뒤에 `?key=value` 형태로 붙여 전달 (여러 개는 `&`로 연결)
  - 예: `/search?keyword=css&page=2`
  - 주로 `GET` 요청에서 조회 조건을 보낼 때 사용
- **Body (요청 본문)**: 요청 메시지의 본문에 데이터를 담아 전달
  - 주로 `POST`, `PUT` 요청에서 사용 (JSON, form 데이터 등)
  - URL에 노출되지 않으므로 긴 데이터나 민감한 데이터에 적합

### 헤더(Header)

- **메타 데이터**: 본문을 설명하는 데이터
- 예: `Content-Type`(본문 형식), `Content-Length`(본문 크기), `Authorization`(인증 정보)

---

## 1. CSS란?

**CSS (Cascading Style Sheets)** 는 HTML 요소의 **모양과 배치를 정하는 언어**이다.

- HTML = 문서의 **구조와 내용** (뼈대)
- CSS = 문서의 **디자인** (꾸미기)

### CSS로 할 수 있는 것

- **글자**: 색, 크기, 폰트
- **여백 / 정렬 / 위치**
- **레이아웃** (Flex, Grid): 화면에 요소를 어떻게 배치할지 결정

### Cascading(캐스케이딩)의 의미

스타일이 **폭포처럼 위에서 아래로 적용**되며, 같은 요소에 여러 규칙이 겹치면 우선순위에 따라 최종 스타일이 결정된다는 뜻이다. (자세한 우선순위는 3장 참고)

### CSS 기본 문법

```css
선택자 {
    속성: 값;
}
```

```css
xxx {
    yyy: zzz;
}
```

> **xxx 조건을 만족하는 태그를 찾아서, yyy 값을 zzz로 바꿔라**

- `xxx` : 선택자 (어떤 요소를?)
- `yyy` : 속성 (무엇을?)
- `zzz` : 값 (어떻게?)
- `속성: 값;` 한 쌍을 **선언(declaration)** 이라 하고, 세미콜론(`;`)으로 끝낸다.

### 예시: Font Awesome

Font Awesome은 아이콘을 폰트처럼 쓸 수 있게 해 주는 라이브러리이다. 내부적으로 CSS 선택자를 이용해 아이콘을 바꿔 준다.

```css
.fa-brands .fa-github {
    /* 깃헙 모양의 아이콘으로 바꿔라 */
}
```

HTML에서는 클래스 이름만 붙여서 사용한다.

```html
<i class="fa-brands fa-github"></i>
```

→ 클래스 선택자에 해당하는 요소를 찾아 아이콘으로 표시하는 원리이다.

---

## 2. CSS 적용 방식 3가지

### 2-1. Inline CSS (인라인)

HTML 태그의 `style` 속성에 **직접** 작성한다.

```html
<p style="color: red; font-size: 20px;">빨간 글씨</p>
```

- 장점: 빠르고 간단, 해당 요소에만 확실하게 적용
- 단점: 재사용 불가, HTML이 지저분해짐, 유지보수 어려움

### 2-2. Internal CSS (내부)

HTML 문서 안의 `<style>` 태그 안에 작성한다. (보통 `<head>` 안)

```html
<head>
    <style>
        p {
            color: blue;
        }
    </style>
</head>
```

- 장점: 한 페이지 안에서 여러 요소에 한꺼번에 적용 가능
- 단점: 다른 페이지에서 재사용 불가, HTML 파일이 길어짐

### 2-3. External CSS (외부)

별도의 `.css` 파일로 작성하고 `<link>` 태그로 불러온다.

```html
<head>
    <link rel="stylesheet" href="style.css">
</head>
```

```css
/* style.css */
p {
    color: green;
}
```

- 장점: 여러 HTML 페이지에서 공유 가능, HTML과 CSS 분리로 유지보수 쉬움, 브라우저 캐시 활용
- 단점: 파일을 추가로 불러와야 함 (요청 1회 추가)

### 비교 정리

| 구분 | 작성 위치 | 적용 범위 | 재사용 | 실무 사용 |
|---|---|---|---|---|
| Inline | 태그의 `style` 속성 | 해당 요소 1개 | 불가 | 간단한 테스트, 동적 스타일 |
| Internal | `<style>` 태그 | 해당 HTML 문서 | 문서 내에서만 | 단일 페이지 |
| External | `.css` 파일 + `<link>` | 연결된 모든 문서 | 가능 | **가장 권장** |

### 우선순위 (기본 원칙)

**Inline > Internal / External** (Internal과 External은 나중에 선언된 것이 우선)

---

## 3. CSS Selector (선택자)

"어떤 HTML 요소에 스타일을 적용할지" 고르는 방법이다.

```html
<style>
    div { }      /* 태그 선택자 */
    .class { }   /* 클래스 선택자 */
    #id { }      /* id 선택자 */
    * { }        /* 전체 선택자 */
</style>
```

| 선택자 | 문법 | 설명 | 예시 |
|---|---|---|---|
| 태그 선택자 | `div` | 해당 태그 전부 선택 | `p { color: red; }` |
| 클래스 선택자 | `.class` | 같은 class를 가진 요소 모두 선택 (여러 요소에 중복 사용 가능) | `.title { color: blue; }` |
| id 선택자 | `#id` | 해당 id를 가진 요소 선택 (**문서에서 유일**해야 함) | `#header { height: 80px; }` |
| 전체 선택자 | `*` | 모든 요소 선택 | `* { margin: 0; }` |

```html
<div id="header" class="box title">안녕하세요</div>
```

- 한 요소에 클래스를 여러 개 줄 수 있다 (공백으로 구분: `class="box title"`).

### 자주 쓰는 조합 선택자

| 선택자 | 의미 | 예시 |
|---|---|---|
| `A B` | 후손 선택자 (A 안의 모든 B) | `div p` |
| `A > B` | 자식 선택자 (A의 직계 자식 B) | `ul > li` |
| `A, B` | 그룹 선택자 (A와 B 모두) | `h1, h2` |
| `A.B` | A이면서 클래스가 B | `div.box` |
| `A:hover` | 마우스를 올렸을 때 | `button:hover` |

### 선택자 우선순위 (구체성)

범위가 **좁고 구체적일수록** 우선순위가 높다.

```
!important > inline style > #id > .class > 태그 > *
```

---

## 4. style 속성

HTML 태그에 `style` 속성을 이용해 **인라인으로 CSS를 적용**하는 방법이다.

```html
<h1 style="color: red; text-align: center;">제목</h1>
```

- 형식: `style="속성: 값; 속성: 값;"`
- 여러 속성은 세미콜론(`;`)으로 구분
- 해당 태그 **하나에만** 적용
- 우선순위가 높아 다른 CSS를 덮어쓴다
- 재사용이 안 되므로 연습이나 간단한 확인용으로 쓰고, 실무에서는 외부 CSS를 주로 사용

---

## 5. Text 관련 속성

### 5-1. `font-size` : 글자 크기

```css
p { font-size: 16px; }
```

| 단위 | 설명 |
|---|---|
| `px` | 픽셀 (고정 크기) |
| `em` | 부모 요소의 글자 크기 기준 배수 |
| `rem` | 루트(`html`)의 글자 크기 기준 배수 |
| `%` | 부모 요소 기준 비율 |

> 브라우저 기본 글자 크기는 보통 `16px`

### 5-2. `font-weight` : 글자 굵기

```css
p { font-weight: bold; }
```

| 값 | 설명 |
|---|---|
| `normal` | 보통 (= `400`) |
| `bold` | 굵게 (= `700`) |
| `100` ~ `900` | 숫자로 굵기 지정 (100 단위) |

### 5-3. `text-align` : 글자 정렬

```css
h1 { text-align: center; }
```

| 값 | 설명 |
|---|---|
| `left` | 왼쪽 정렬 (기본값) |
| `center` | 가운데 정렬 |
| `right` | 오른쪽 정렬 |
| `justify` | 양쪽 정렬 |

> `text-align`은 **블록 요소 안의 글자(인라인 콘텐츠)** 를 정렬하는 속성이다. 블록 요소 자체를 가운데로 옮기려면 `margin: 0 auto;`를 사용한다.

### 5-4. 그 외 자주 쓰는 text 속성

| 속성 | 설명 | 예시 |
|---|---|---|
| `color` | 글자색 | `color: #333;` |
| `font-family` | 글꼴 | `font-family: "Noto Sans KR", sans-serif;` |
| `font-style` | 기울임 | `font-style: italic;` |
| `text-decoration` | 밑줄/취소선 | `text-decoration: none;` (링크 밑줄 제거) |
| `line-height` | 줄 간격 | `line-height: 1.5;` |
| `letter-spacing` | 글자 간격 | `letter-spacing: 2px;` |

### 종합 예시

```css
.title {
    color: #222;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
}
```

---

## 6. Box Model (박스 모델)

HTML의 **모든 요소는 사각형 박스**로 이루어져 있다. 이 박스는 바깥쪽부터 다음과 같이 구성된다.

```
┌─────────────────────────────────┐
│            margin               │  ← 바깥 여백 (다른 요소와의 거리)
│   ┌─────────────────────────┐   │
│   │         border          │   │  ← 테두리
│   │   ┌─────────────────┐   │   │
│   │   │     padding     │   │   │  ← 안쪽 여백 (테두리와 내용 사이)
│   │   │   ┌─────────┐   │   │   │
│   │   │   │ content │   │   │   │  ← 실제 내용 (글자, 이미지 등)
│   │   │   └─────────┘   │   │   │
│   │   └─────────────────┘   │   │
│   └─────────────────────────┘   │
└─────────────────────────────────┘
```

### 6-1. content (내용)

- 글자, 이미지 등 실제 내용이 들어가는 영역
- 크기는 `width`, `height`로 지정

### 6-2. width / height

```css
div {
    width: 200px;
    height: 100px;
}
```

- `width`: content 영역의 너비, `height`: content 영역의 높이 (기본 `box-sizing` 기준)
- `px`, `%`, `vw`, `vh` 등 단위 사용 가능
- 인라인 요소(`span`, `a` 등)는 `width`, `height`가 적용되지 않는다.

### 6-3. padding (안쪽 여백)

content와 border 사이의 간격이다. **배경색이 적용된다.**

```css
div {
    padding: 10px;                 /* 상하좌우 모두 */
    padding: 10px 20px;            /* 상하 | 좌우 */
    padding: 10px 20px 30px;       /* 상 | 좌우 | 하 */
    padding: 10px 20px 30px 40px;  /* 상 | 우 | 하 | 좌 (시계 방향) */
    padding-top: 10px;             /* 개별 지정: top, right, bottom, left */
}
```

### 6-4. border (테두리)

```css
div {
    border: 1px solid black;   /* 두께 | 스타일 | 색상 */
    border-radius: 8px;        /* 모서리 둥글게 */
}
```

| 구성 | 설명 |
|---|---|
| `border-width` | 두께 |
| `border-style` | `solid`(실선), `dashed`(점선), `dotted`(점), `none` |
| `border-color` | 색상 |

### 6-5. margin (바깥 여백)

border 바깥쪽, 다른 요소와의 간격이다. **배경색이 적용되지 않는다(투명).**

```css
div {
    margin: 20px;           /* 상하좌우 */
    margin: 0 auto;         /* 상하 0, 좌우 auto → 블록 요소 가운데 정렬 (width 지정 필요) */
    margin-bottom: 10px;    /* 개별 지정 */
}
```

- 값 지정 방식은 `padding`과 동일하다 (1~4개 값).
- 위아래로 인접한 블록 요소의 margin은 **겹쳐져서(margin collapse)** 큰 값 하나만 적용된다.

### padding vs margin

| 구분 | padding | margin |
|---|---|---|
| 위치 | border **안쪽** | border **바깥쪽** |
| 배경색 | 적용됨 | 적용 안 됨 |
| 역할 | 내용과 테두리 사이 간격 | 요소와 요소 사이 간격 |

### 6-6. box-sizing

`width`, `height`가 **어디까지의 크기를 의미하는지** 정하는 속성이다.

| 값 | 설명 | 실제 차지하는 너비 |
|---|---|---|
| `content-box` (기본값) | width = content 영역만 | width + padding + border |
| `border-box` | width = content + padding + border | width 그대로 |

```css
div {
    width: 200px;
    padding: 20px;
    border: 5px solid black;
}
/* content-box → 200 + 20×2 + 5×2 = 250px */
/* border-box  → 200px (content는 200 - 40 - 10 = 150px) */
```

실무에서는 크기 계산이 편하도록 **전체에 `border-box`를 적용**하는 경우가 많다.

```css
* {
    box-sizing: border-box;
}
```

---

## 핵심 요약

1. **CSS**: HTML의 모양과 배치를 정하는 언어 (`선택자 { 속성: 값; }`)
2. **적용 방식**: Inline(태그 `style`) / Internal(`<style>`) / External(`.css` + `<link>`) → 실무는 External 권장
3. **선택자**: 태그(`div`), 클래스(`.class`), id(`#id`), 전체(`*`)
4. **style 속성**: 한 태그에만 직접 적용, 우선순위 높음
5. **text 속성**: `font-size`, `font-weight`, `text-align` 등
6. **박스 모델**: `margin` > `border` > `padding` > `content`, 크기 계산은 `box-sizing`으로 결정
