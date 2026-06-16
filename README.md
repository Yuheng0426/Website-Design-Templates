# Website Design Templates

A polished ASP.NET Core MVC website template built around the sample brand **Axyronis Studio**. It is designed for beginners who want to learn how a professional website is organized while still having clean code they can customize and share.

The template includes a premium visual style, responsive layout, source-code comments, and a working language switcher for English, Chinese, French, Spanish, and Japanese.

## Features

- Professional studio-style homepage
- Services, strategy, growth, and contact sections
- Responsive design for desktop and mobile
- High-end color system using CSS variables
- Multilingual front-end content switcher
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
├── README.md
├── TUTORIAL.md
├── Web_Template.sln
└── Web_Template/
    ├── Controllers/
    ├── Models/
    ├── Views/
    │   ├── Home/
    │   └── Shared/
    └── wwwroot/
        ├── css/site.css
        ├── js/site.js
        └── lib/
```

## Files Beginners Should Learn First

- `Web_Template/Views/Home/Index.cshtml`: homepage sections and visible content.
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

Translations live in `Web_Template/wwwroot/js/site.js` inside the `translations` object.

## Learning Guide

Read [TUTORIAL.md](./TUTORIAL.md) for a beginner-friendly walkthrough. It explains what each important file does, how to change the brand, how the language system works, and how to customize the design safely.

## Notes About Images

This template uses CSS artwork for the main visuals instead of external image links. That keeps the project stable for GitHub sharing and avoids relying on third-party image URLs. You can replace the CSS artwork with your own images later.

## License

You can use this repository as a learning template and customize it for your own projects. If you publish a modified version, update the README so users understand what changed.
