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


|Prop       |Default value        |Description|
|-----------|---------------------|-----------|
|`className`|`ReactOutlineHandler`|Use this to change the class of the wrapping component. This class is only visible when outlines should be hidden.|
|`tagName`  |`div`                |Use this to change the element type used in the wrapping component.|
|`toggle`   |`false`              |By default, outlines are enabled when a user hits tab, but not hidden again. Set this option to `true` if you want outlines to toggle on and off as the user switches between input methods.|
