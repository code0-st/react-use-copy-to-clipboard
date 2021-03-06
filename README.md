# react-use-copy-to-clipboard

[![NPM](https://img.shields.io/npm/v/react-use-copy-to-clipboard.svg)](https://www.npmjs.com/package/react-use-copy-to-clipboard) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-use-copy-to-clipboard
```

## Usage

```jsx
import React from "react";
import {useCopyToClipboard} from "react-use-copy-to-clipboard";

export const CopyButton = ({text}) => {
  const clickRef = useCopyToClipboard(text,
    () => console.log("Copyed!"),
    () => console.log("Unable to copy!"))
  return (
    <button ref={clickRef}>Copy!</button>
  )
}
```

## License

MIT © [code0-st](https://github.com/code0-st)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
