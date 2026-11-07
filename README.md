# LogicManaged

A static website for LogicManaged’s business automation, software development and ongoing support services.

## Check it here
https://mdabashar.github.io/LogicManaged/

## Local preview

From the repository root, run:

```powershell
python -m http.server 8765 --bind 127.0.0.1 --directory dist
```

Open [the local preview](http://127.0.0.1:8765/). The site uses plain HTML, CSS and JavaScript.

## Hosting

The GitHub Pages workflow publishes `dist/` on pushes to `main`.

The Contact section links to the business email. The enquiry form previews sample details in the browser.
