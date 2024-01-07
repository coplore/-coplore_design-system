<div align="middle">
  <a href="https://github.com/coplore" rel="noopener" target="_blank">
	  <img src="https://avatars.githubusercontent.com/u/148344351?s=200&v=4" alt="coplore" width="120" />
  </a>
  <h1>@coplore/styles</h1>
  A coplore style design system, created by <a href="https://github.com/chan9yu" rel="noopener" target="_blank">chan9yu</a>.
</div>

<br />

## Installation

```shell
# using npm
npm install @coplore/styles

# using yarn
yarn add @coplore/styles

# using pnpm
pnpm add @coplore/styles
```

<br />

## Usage

최상단 파일에 `global.css`를 import 해주세요.

```jsx
import '@coplore/styles/global.css';
```

<br />

## Customize

`@coplore/styles`은 사용자의 원하는 theme에 맞게 커스텀 마이징 할 수 있도록 제공합니다.

### CSS variables

- 실시간 커스텀 마이징을 할 수 있도록 css 사용자 정의 변수를 제공합니다
- @coplore/styles의 모든 변수는 `coplore-`으로 시작합니다
- `@coplore/styles/global.css`가 적용된 곳이면 어디서나 접근하여 오버라이딩을 할 수 있습니다.
