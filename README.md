# React Outline Manager

![license](https://img.shields.io/npm/l/react-outline-manager.svg)
[![npm](https://img.shields.io/npm/v/react-outline-manager.svg)](https://www.npmjs.com/package/react-outline-manager)
![type definitions](https://img.shields.io/npm/types/react-outline-manager.svg)

A simple component to help manage focus outlines in React applications.

## How it works

Unlike CSS-only solutions that simply hide outlines on focusable elements, this component can help you to create beautiful web apps without sacrificing accessibility.

When using this component, outlines on focusable elements are hidden until a user begins to interact with keyboard
(specifically, the `tab` key). Optionally, resuming mouse/touch input can hide outlines again.

Includes CJS, ESM, and UMD (supporting browser usage).

TypeScript definitions are also included.

## Usage

To install with Yarn:
```sh
yarn add react-outline-manager
```

To install with npm:
```sh
npm install --save react-outline-manager
```

Once installed, simply import React Outline Manager and wrap your your application.

```js
import ReactOutlineManager from 'react-outline-manager';

const MyAppWithOutlineManager = () => (
  <ReactOutlineManager>
    <YourApp />
  </ReactOutlineManager>
);
```

Only wrapped components will be affected. This means that you can also choose to only wrap a part of you application if desired.

## Props

|Prop       |Default value        |Description|
|-----------|---------------------|-----------|
|`className`|`ReactOutlineManager`|Use this to change the class of the wrapping component. This class is only visible when outlines should be hidden.|
|`tagName`  |`false`              |Use this to change the element type used in the wrapping component, such as a `div`. When `false` (or omitted), this component renders as a `Fragment` and the `className` will be applied to the `body` tag.|
|`toggle`   |`false`              |By default, outlines are enabled when a user hits tab, but not hidden again. Set this option to `true` if you want outlines to toggle on and off as the user switches between input methods.|

When `tagName` is set, you may also pass through standard React HTML props. For example:
```js
<ReactOutlineManager onClick={() => {}} />
```
