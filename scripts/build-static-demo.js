const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const projectRoot = path.join(root, "Web_Template");
const docsRoot = path.join(root, "docs");

const read = (filePath) => fs.readFileSync(filePath, "utf8");
const ensureDir = (dirPath) => fs.mkdirSync(dirPath, { recursive: true });

const stripRazorHeader = (content) =>
  content.replace(/^@\{[\s\S]*?\}\s*/, "").trim();

const staticizeAspLinks = (content) =>
  content
    .replace(/\sasp-area=""/g, "")
    .replace(/\sasp-controller="Home"\sasp-action="Index"/g, ' href="./"')
    .replace(/\sasp-controller="Home"\sasp-action="Privacy"/g, ' href="./#principles"')
    .replace(/href="\/#/g, 'href="#');

const layout = read(path.join(projectRoot, "Views", "Shared", "_Layout.cshtml"));
const home = stripRazorHeader(read(path.join(projectRoot, "Views", "Home", "Index.cshtml")));
const css = read(path.join(projectRoot, "wwwroot", "css", "site.css"));
const js = read(path.join(projectRoot, "wwwroot", "js", "site.js"));

const headMatch = layout.match(/<head>[\s\S]*?<\/head>/);
const headerMatch = layout.match(/<header[\s\S]*?<\/header>/);
const footerMatch = layout.match(/<footer[\s\S]*?<\/footer>/);

if (!headMatch || !headerMatch || !footerMatch) {
  throw new Error("Could not find the layout head, header, or footer.");
}

const head = headMatch[0]
  .replace(/<title[\s\S]*?<\/title>/, '<title data-i18n-title="meta.title">Digital Web Studio - Axyronis Studio</title>')
  .replace(/<link rel="stylesheet" href="~\/lib\/bootstrap\/dist\/css\/bootstrap\.min\.css" \/>/, '<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />')
  .replace(/<link rel="stylesheet" href="~\/css\/site\.css" asp-append-version="true" \/>/, '<link rel="stylesheet" href="./css/site.css" />')
  .replace(/\s*<link rel="stylesheet" href="~\/Web_Template\.styles\.css" asp-append-version="true" \/>/, "");

const html = `<!DOCTYPE html>
<html lang="en">
${head}
<body>
${staticizeAspLinks(headerMatch[0])}
<main role="main">
${home}
</main>
${staticizeAspLinks(footerMatch[0])}
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
<script src="./js/site.js"></script>
</body>
</html>
`;

ensureDir(path.join(docsRoot, "css"));
ensureDir(path.join(docsRoot, "js"));

fs.writeFileSync(path.join(docsRoot, "index.html"), html, "utf8");
fs.writeFileSync(path.join(docsRoot, "css", "site.css"), css, "utf8");
fs.writeFileSync(path.join(docsRoot, "js", "site.js"), js, "utf8");

console.log("Static demo generated in docs/.");
