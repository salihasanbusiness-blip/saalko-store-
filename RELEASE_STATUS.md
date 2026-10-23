# SAALKOO STORE — Release status

## Validated
- 15 product concepts and 5 category filters exist.
- Preview messaging explicitly disables orders, checkout and payments.
- Menu has an expanded state, category filters have pressed states.
- Metadata, sitemap and robots routes are present.
- Source-level smoke checks pass with `npm run test:preview`.

## Not validated
- `npm install` timed out in the inspection environment.
- `npm run build`, browser interactions, and deployment have NOT been verified.
- No changes have been made to the live Vercel deployment or GitHub repository.

## Safe release process
1. Preserve the existing production deployment and a Git commit/tag.
2. Install dependencies in a trusted environment, run `npm run test:preview` and `npm run build`.
3. Deploy to a Vercel preview URL; test desktop/mobile navigation and all five filters.
4. Confirm no payments, checkout or preorder forms are active.
5. Only then promote the tested deployment to production.
