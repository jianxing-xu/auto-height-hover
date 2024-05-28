# Auto-Height-Hover

## Usage

```bash
# pnpm
pnpm install auto-height-hover
# npm
npm i auto-height-hover
# yarn
yarn add auto-height-hover
```

## Vue

```js
// Two ways to import
import AutoHeightHoverPlugin, { AutoHeightHover } from 'auto-height-hover'

  <template>
    <AutoHeightHover>
      <button>hover me!</button>
      <template #panel>
        largest text ...
      </template>
    </AutoHeightHover>
  </template>

// or

const app = createAp()
app.use(AutoHeightHover)
```

## props
1. type = 'hover' | 'click' // trigger methods
2. h = number // height transition time
3. opa = number // opacity transition time
