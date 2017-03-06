# babel-preset-ttn
A babel preset for ttn

# Installation

```
npm install babel-preset-ttn --save-dev
```

or, with `yarn`:

```
yarn add babel-preset-ttn --dev
```

And add the followong to your `package.json`:

```
"babel": {
  "presets": [ "ttn" ]
}
```

or, if you are targetting browsers:

```
"babel": {
  "presets": [ "ttn/browser" ]
}
```

This will perform more transforms to make the code work on most browsers.
One thing it does not do, however, is transform `import` statements to `require`
statements.  This is the task of your bundler (`webpack` for instance).
