# Beginner Tutorial

This tutorial explains how to understand and customize the Axyronis Studio website template. You do not need to know everything about ASP.NET Core before you start. Begin with the files listed below and change one small thing at a time.

## 1. Run The Website

Open a terminal in the repository root and run:

```powershell
dotnet run --project .\Web_Template\Web_Template.csproj
```

The terminal will show a local address such as:

```text
http://localhost:5092
```

Open that address in your browser.

## 2. Understand The Main Files

### `Views/Home/Index.cshtml`

This is the homepage. It contains the main visible sections:

- Hero section
- Services section
- Strategy section
- Growth section
- Contact section

When you want to change the homepage words, cards, or section order, start here.

### `Views/Shared/_Layout.cshtml`

This file wraps every page. It contains:

- The site header
- The navigation menu
- The language dropdown
- The footer
- CSS and JavaScript references

When you want to change the brand name, navigation labels, or footer content, start here.

### `wwwroot/css/site.css`

This file controls the visual design:

- Colors
- Buttons
- Cards
- Spacing
- Layout grids
- Mobile styles
- Hero and strategy visuals

The most important area is the `:root` block at the top. It stores design variables such as brand colors and shadows.

### `wwwroot/js/site.js`

This file controls small browser interactions:

- Smooth scrolling
- Language switching
- Demo contact form message

The translation text is stored inside the `translations` object.

## 3. Change The Brand Name

Open:

```text
Web_Template/Views/Shared/_Layout.cshtml
```

Find:

```html
<span>Axyronis Studio</span>
```

Replace it with your own website or company name. Do the same in the footer brand block.

You can also change the logo letter:

```html
<span class="brand-logo" aria-hidden="true">A</span>
```

## 4. Change The Homepage Text

Open:

```text
Web_Template/Views/Home/Index.cshtml
```

Look for comments such as:

```html
<!-- Hero headline: replace this when changing the main positioning. -->
```

These comments mark the places that are safe and useful to customize.

Example:

```html
<h1 data-i18n="hero.title">Websites that turn attention into trust, action, and growth</h1>
```

Change the English text here if you want the default page content to be different.

Important: if you use the language switcher, also update the matching text in `site.js`.

## 5. Change The Colors

Open:

```text
Web_Template/wwwroot/css/site.css
```

At the top, find:

```css
:root {
  --color-primary: #0f766e;
  --color-primary-dark: #0b3f3a;
  --color-accent: #c7a15a;
}
```

Try changing only one color first. Save the file, refresh the browser, and see what changed.

Recommended beginner approach:

1. Change `--color-primary`
2. Change `--color-accent`
3. Adjust shadows only after you understand the layout

## 6. Change The Visual Artwork

The template does not depend on external image URLs. The hero and strategy visuals are made with CSS gradients.

Open:

```text
Web_Template/wwwroot/css/site.css
```

Find:

```css
.hero-image { ... }
.showcase-image { ... }
```

You can keep the CSS artwork or replace it with your own image:

```css
.hero-image {
  background-image: url("/images/your-image.jpg");
}
```

If you use your own image, place it in:

```text
Web_Template/wwwroot/images/
```

## 7. Understand The Language System

The language dropdown is in:

```text
Web_Template/Views/Shared/_Layout.cshtml
```

The translations are in:

```text
Web_Template/wwwroot/js/site.js
```

The dropdown menu is generated automatically from the `translations` object. This means beginners do not need to edit the HTML menu when adding or removing languages.

Each translated element has a key:

```html
<h1 data-i18n="hero.title">...</h1>
```

The JavaScript uses that key to find the correct translation:

```js
"hero.title": "Websites that turn attention into trust, action, and growth"
```

To add or change a translation:

1. Open `site.js`
2. Find the language object, such as `en`, `zh`, `fr`, `es`, or `ja`
3. Edit the value for the same key
4. Save and refresh the browser

### Add A New Language

Open:

```text
Web_Template/wwwroot/js/site.js
```

Find:

```js
const translations = {
```

Copy an existing language block, paste it inside the `translations` object, and change the language code.

Example:

```js
de: {
  languageName: "Deutsch",
  "meta.title": "Digitales Webstudio - Axyronis Studio",
  "meta.description": "Your German description here.",
  "nav.home": "Startseite"
}
```

Important: this example is shortened. In the real file, the new language must include every key that exists in the English `en` block.

After you add the new language block, the dropdown menu will show it automatically.

### Remove A Language

To remove a language, delete its full block from the `translations` object.

Example: to remove Japanese, delete:

```js
ja: {
  languageName: "日本語",
  ...
}
```

After you delete the block, the dropdown menu will stop showing that language automatically.

### Change The Default Language

In `site.js`, find:

```js
const defaultLanguageCode = "en";
```

Change `"en"` to another language code that exists in the `translations` object.

Example:

```js
const defaultLanguageCode = "fr";
```

## 8. Add A New Section

Start by copying an existing section from `Index.cshtml`.

For example, copy one `feature-card`:

```html
<article class="feature-card">
  <span class="feature-icon">04</span>
  <h3 data-i18n="services.card4.title">New service title</h3>
  <p data-i18n="services.card4.text">New service description.</p>
</article>
```

Then add matching translation keys in every language inside `site.js`:

```js
"services.card4.title": "New service title",
"services.card4.text": "New service description."
```

Every language must have the same keys.

## 9. Common Beginner Mistakes

- Editing generated files inside `bin/` or `obj/`
- Forgetting to update all languages after adding a new `data-i18n` key
- Removing Bootstrap scripts while still using the dropdown menu
- Changing too many files at once
- Uploading `.vs/`, `bin/`, or `obj/` folders to GitHub

## 10. Suggested Practice Tasks

Try these in order:

1. Change the brand name.
2. Change the main headline.
3. Change the primary color.
4. Add one new service card.
5. Translate that new card into all supported languages.
6. Replace the hero CSS artwork with your own image.

Small steps make the code easier to understand. When something breaks, undo the last change and try again more slowly.
