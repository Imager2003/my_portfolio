# Yoshita Sharma — Portfolio

A responsive, professional portfolio website built strictly from the information contained in the provided resume.

## Files

- `index.html` — portfolio content and structure
- `styles.css` — visual design and responsive styling
- `script.js` — mobile navigation and subtle scroll-reveal animation

## Run locally

Because this is a static site, you can simply open `index.html` in a browser.

For a local server, from this folder run:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Deploy to GitHub + Vercel

1. Create a new GitHub repository, e.g. `yoshita-sharma-portfolio`.
2. In Terminal, enter this folder.
3. Run:

```bash
git init
git add .
git commit -m "Create Yoshita Sharma portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/yoshita-sharma-portfolio.git
git push -u origin main
```

4. Sign in to Vercel.
5. Choose **Add New → Project**.
6. Import the GitHub repository.
7. For this static site, leave the framework/build settings at their defaults if Vercel detects no framework.
8. Click **Deploy**.
9. Vercel will provide a `.vercel.app` URL.