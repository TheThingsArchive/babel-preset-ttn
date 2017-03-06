module.exports = {
  presets: [
    [ "es2015", { modules: false } ],
    "stage-0",
    "react",
  ],
  plugins: [
    "transform-decorators-legacy",
    "transform-strict-mode",
    "transform-runtime",
  ],
  env: {
    production: {
      plugins: [
        "transform-es3-member-expression-literals",
        "transform-es3-property-literals",
        "transform-member-expression-literals",
        "transform-property-literals",
        "transform-remove-debugger",
        "transform-minify-booleans",
        "transform-simplify-comparison-operators",
        "transform-react-constant-elements",
        "array-includes",
      ],
    },
  }
}
