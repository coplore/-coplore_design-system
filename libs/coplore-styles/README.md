<div align="middle">
  <a href="https://github.com/coplore" rel="noopener" target="_blank">
	  <img src="https://avatars.githubusercontent.com/u/148344351?s=200&v=4" alt="coplore" width="120" />
  </a>
  <h1>@coplore/styles</h1>
  A coplore style design system, created by <a href="https://github.com/chan9yu" rel="noopener" target="_blank">chan9yu</a>.
</div>

<br />

## 🚀 Installation

npm

```shell
npm install @coplore/styles
```

yarn

```shell
yarn add @coplore/styles
```

pnpm

```shell
pnpm add @coplore/styles
```

<br />

## 🛠️ Usage

최상단 파일에 `global.css`를 import 해주세요.

```jsx
import '@coplore/styles/global.css';
```

<br />

## 🎨 Customize

`@coplore/styles`은 사용자의 원하는 theme에 맞게 커스텀 마이징 할 수 있도록 제공합니다.

### CSS variables

- 실시간 커스텀 마이징을 할 수 있도록 css 사용자 정의 변수를 제공합니다
- @coplore/styles의 모든 변수는 `coplore-`으로 시작합니다
- `@coplore/styles/global.css`가 적용된 곳이면 어디서나 접근하여 오버라이딩을 할 수 있습니다.

```css
:root,
[data-theme='light'] {
	/* ====== breakpoint variable ====== */
	--coplore-grid-breakpoint-xs: 0;
	--coplore-grid-breakpoint-sm: 576px;
	--coplore-grid-breakpoint-md: 768px;
	--coplore-grid-breakpoint-lg: 992px;
	--coplore-grid-breakpoint-xl: 1200px;
	--coplore-grid-breakpoint-xxl: 1400px;
	/* ====== color variable ====== */
	--coplore-white: #ffffff;
	--coplore-black: #000000;
	--coplore-red-100: #ffcdd2;
	--coplore-red-200: #ef9a9a;
	--coplore-red-300: #e57373;
	--coplore-red-400: #ef5350;
	--coplore-red-500: #f44336;
	--coplore-red-600: #e53935;
	--coplore-red-700: #d32f2f;
	--coplore-red-800: #c62828;
	--coplore-red-900: #b71c1c;
	--coplore-pink-100: #f8bbd0;
	--coplore-pink-200: #f48fb1;
	--coplore-pink-300: #f06292;
	--coplore-pink-400: #ec407a;
	--coplore-pink-500: #e91e63;
	--coplore-pink-600: #d81b60;
	--coplore-pink-700: #c2185b;
	--coplore-pink-800: #ad1457;
	--coplore-pink-900: #880e4f;
	--coplore-purple-100: #e1bee7;
	--coplore-purple-200: #ce93d8;
	--coplore-purple-300: #ba68c8;
	--coplore-purple-400: #ab47bc;
	--coplore-purple-500: #9c27b0;
	--coplore-purple-600: #8e24aa;
	--coplore-purple-700: #7b1fa2;
	--coplore-purple-800: #6a1b9a;
	--coplore-purple-900: #4a148c;
	/* ... */
}
```
