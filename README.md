# Living Profile

## After creating a repository from this template

Repositories created from a template get its files, but none of its settings, so a few things need setting up once.

### Turn on GitHub Pages

Every push to `main` builds the site and deploys it to GitHub Pages. The first deploy fails until Pages is switched on:

1. Open **Settings → Pages** in your repository.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Re-run the failed **Deploy to GitHub Pages** workflow from the **Actions** tab, or push to `main`.

The deploy workflow does not run in the template repository itself, because the template has no Pages site.

### Update the repository controls policy

`.github/repository-controls.json` describes the settings, security features and branch rules this repository should have. Its `repository` field names the template, `schalkneethling/living-profile`, and `scripts/repository-controls.mjs` refuses to run against any other repository. Change the field to your repository's `owner/name` before running either command:

```sh
# Compare your repository's settings with the policy (makes no changes)
npm run repo:controls:check

# Apply the policy after reviewing the comparison
npm run repo:controls:apply
```

See [docs/repository-controls.md](docs/repository-controls.md) for details.
