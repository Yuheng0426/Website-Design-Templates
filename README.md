# Website Design Templates

A polished ASP.NET Core MVC website template built around the sample brand **Axyronis Studio**. It is designed for beginners who want to learn how a professional website is organized while still having clean code they can customize and share.

## Live Preview

Open the website directly without downloading:

[View Live Demo](https://yuheng0426.github.io/Website-Design-Templates/)

If the link is not active yet, enable GitHub Pages from the `docs/` folder:

1. Open the repository on GitHub.
2. Go to **Settings** -> **Pages**.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
4. Set **Branch** to `main` and **Folder** to `/docs`.
5. Click **Save**.

GitHub usually publishes the site within a few minutes after this one-time setup.

The template includes a premium visual style, responsive layout, source-code comments, and a working language switcher for English, Chinese, French, Spanish, and Japanese.

## Features

- Professional studio-style homepage
- Services, strategy, growth, and contact sections
- Responsive design for desktop and mobile
- High-end color system using CSS variables
- Multilingual front-end content switcher
- Demo sign-in page with Google, Microsoft, GitHub, and email UI patterns
- Beginner-friendly comments in the source code
- No required external image assets

## Quick Start

1. Install [.NET SDK 8 or newer](https://dotnet.microsoft.com/download).
2. Clone or download this repository.
3. Open a terminal in the repository root.
4. Run the project:

```powershell
dotnet run --project .\Web_Template\Web_Template.csproj
```

5. Open the local URL shown in the terminal, usually similar to `http://localhost:5092`.

## Project Structure

```text
Website-Design-Templates/
|-- docs/
|   |-- index.html
|   |-- login.html
|   |-- css/site.css
|   `-- js/site.js
|-- AUTHENTICATION_GUIDE.md
|-- README.md
|-- TUTORIAL.md
|-- scripts/build-static-demo.js
|-- Web_Template.sln
`-- Web_Template/
    |-- Controllers/
    |-- Models/
    |-- Views/
    |   |-- Home/
    |   |   `-- Login.cshtml
    |   `-- Shared/
    `-- wwwroot/
        |-- css/site.css
        |-- js/site.js
        `-- lib/
```

## Files Beginners Should Learn First

- `Web_Template/Views/Home/Index.cshtml`: homepage sections and visible content.
- `Web_Template/Views/Home/Login.cshtml`: demo sign-in page and provider button markup.
- `Web_Template/Views/Shared/_Layout.cshtml`: navigation, language dropdown, footer, and shared page shell.
- `Web_Template/wwwroot/css/site.css`: colors, spacing, cards, buttons, responsive layout, and visual artwork.
- `Web_Template/wwwroot/js/site.js`: language translations, smooth scrolling, and demo form behavior.

## Language Support

The language switcher currently supports:

- English
- Chinese
- French
- Spanish
- Japanese

Translations live in `Web_Template/wwwroot/js/site.js` inside the `translations` object. The language dropdown is generated automatically from that object, so adding or deleting a language only requires changing the translation blocks in JavaScript.

## Learning Guide

Read [TUTORIAL.md](./TUTORIAL.md) for a beginner-friendly walkthrough. It explains what each important file does, how to change the brand, how the language system works, and how to customize the design safely.

Read [AUTHENTICATION_GUIDE.md](./AUTHENTICATION_GUIDE.md) before connecting Google sign-in or any other real login provider.

## Static Demo For GitHub Pages

The ASP.NET Core project is the editable template. The `docs/` folder is a static preview version for GitHub Pages.

This repository uses GitHub Pages branch publishing instead of a deployment workflow. That keeps the template easier for beginners because GitHub serves the committed files in `docs/` directly.

After changing the website, regenerate the static preview with:

```powershell
node .\scripts\build-static-demo.js
```

Commit both the ASP.NET files and the updated `docs/` files so the live demo stays in sync.

## Notes About Images

This template uses CSS artwork for the main visuals instead of external image links. That keeps the project stable for GitHub sharing and avoids relying on third-party image URLs. You can replace the CSS artwork with your own images later.

## License

This project uses the MIT License from the repository. You can use this repository as a learning template and customize it for your own projects. If you publish a modified version, update the README so users understand what changed.
