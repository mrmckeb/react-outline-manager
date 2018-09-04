# react-outline-manager

A simple component to help manage outlines in React applications.

## How it works

Outlines on focussable elements are hidden by default, but shown if a user begins to interact with their keyboard
(specifically, the `tab` key).

Includes CJS, ESM, and UMD (supporting browser usage).

TypeScript definitions are also included.

## Usage

To use, wrap your tree with this component.

```
<ReactOutlineManager>
  <YourApp />
</ReactOutlineManager>
```

## Props

### `toggle`

By default, outlines are permanently shown after being enabled.

Set the `toggle` prop to have React Outline Manager hide outlines again when the user resumes interacting with their
mouse or with touch.

### `className`

Pass in a `className` as a string.
