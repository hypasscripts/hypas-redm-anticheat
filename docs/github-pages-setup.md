# Enable GitHub Pages

You can publish the `docs` folder as a free documentation website.

## Steps

1. Open the repository on GitHub.
2. Select **Settings**.
3. Select **Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the default branch, normally `main`.
6. Select the `/docs` folder.
7. Save.

GitHub will provide a public address similar to:

```text
https://hypasscripts.github.io/hypas-redm-anticheat/
```

## Before publishing

Edit these placeholders throughout the repository:

```text
ADD_YOUR_TEBEX_PRODUCT_URL_HERE
ADD_YOUR_DISCORD_INVITE_HERE
ADD_A_SECURITY_EMAIL_HERE
```

## Page homepage

GitHub Pages will use:

```text
docs/index.md
```

as the documentation homepage.

## Images in documentation pages

Images stored in the root `images` folder can be referenced from a documentation page with:

```markdown
![Description](../images/example.png)
```
