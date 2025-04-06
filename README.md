# postcss-px-to-rem

A lightweight [PostCSS](https://github.com/postcss/postcss) plugin that converts pixel (`px`) units to relative `rem` or `em` units—improving scalability and accessibility in your CSS.

```css
h1 {
    @apply text-[length:rem(32px_16px_3)];
}
```

---

## Installation

Install via npm:

```bash
npm install -D @lab4studio/postcss-px-to-rem
```

Then add the plugin to your `postcss.config.cjs`:

```js
module.exports = {
    plugins: {
        '@lab4studio/postcss-px-to-rem': {
            base: 16,
            precision: 2,
        },
    },
};
```

> **Note:** Both `base` and `precision` options are optional. Defaults are `base: 16` and `precision: 4`.

---

## Why use it?

While pixel units are convenient, they do not scale with user preferences—such as browser-level font size settings. This plugin allows you to retain the simplicity of `px` while outputting responsive and accessible `rem`/`em` values.

---

## Usage

This plugin parses and converts any `rem(...)` or `em(...)` functions inside your CSS values:

```css
h1 {
    @apply text-[length:rem(32px_16px_3)];
}

<div class="px-[em(13_12_2)]">{{ markdown }}</div>
```

> **Note:** You can omit the unit if using the plugin in a compatible utility or expression context.

---

## Input → Output Example

```css
/* Input */
h1 {
    margin: 0 0 rem(16px);
    font-size: rem(20px_10);
    line-height: 1.2;
    letter-spacing: em(1px);
}
```

```css
/* Output */
h1 {
    margin: 0 0 1rem;
    font-size: 2rem;
    line-height: 1.2;
    letter-spacing: 0.0625em;
}
```

---

## Plugin Options

```js
{
    base: 16,       // Base font size to calculate rem/em values
    precision: 5    // Decimal precision for converted values
}
```

- **`base`** (`number`) – The root font size used as a reference for conversion.
- **`precision`** (`number`) – Number of decimal places to retain in the result.

---

## License

MIT License – see [LICENSE-MIT](./LICENSE-MIT) for details.
