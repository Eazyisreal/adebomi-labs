# Adebomi Lab Website

Production-ready Next.js implementation of the Adebomi Lab website, built as a frame-by-frame Figma replica with responsive behavior for desktop and mobile.

## Overview

This project includes:

- Multi-page marketing site built with Next.js App Router.
- Reusable section components for each page.
- Shared content/constants and dedicated type modules.
- Figma-aligned typography, gradients, buttons, and form states.
- Optimized image assets (WebP) in `public/assets`.

## Tech Stack

- Framework: Next.js 15 (App Router)
- Language: TypeScript
- UI: React 19 + Tailwind CSS
- Images: `next/image` + `sharp`
- Testing: Jest + React Testing Library
- Lint/format: ESLint + Prettier
- Git hooks: Husky + lint-staged + commitlint

## Routes

Current primary routes:

- `/` (Home)
- `/research`
- `/publications`
- `/team`
- `/collaborations`
- `/join-lab`
- `/studio` (self-hosted Sanity Studio)
- `/api/sanity/webhook` (Sanity revalidation endpoint)
- `/api/join-lab` (Join Lab form submission proxy to Google Apps Script)

## Project Structure

Key folders:

- `src/app`: Route entry pages (App Router).
- `src/components`: Reusable UI sections/components.
- `src/lib`: Shared content/constants.
- `src/types`: Shared TypeScript types.
- `public/assets`: Static optimized assets (SVG/WebP).
- `public/fonts`: Local font files.

## Local Development

Install dependencies:

```bash
npm install
```

Run dev server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Create a `.env.local` file in the project root (you can copy `.env.example`):

```bash
cp .env.example .env.local
```

Required variables:

- `NEXT_PUBLIC_SITE_URL`: Public site URL used for SEO metadata, sitemap, and robots.
- `NEXT_PUBLIC_SANITY_PROJECT_ID`: Sanity project ID for CMS fetches.
- `NEXT_PUBLIC_SANITY_DATASET`: Sanity dataset (for example, `production`).
- `SANITY_API_VERSION`: Sanity API version date string.
- `SANITY_REVALIDATE_SECRET`: Shared secret used by Sanity webhook to trigger revalidation.
- `GOOGLE_APPS_SCRIPT_URL`: Deployed Apps Script Web App URL that writes Join Lab submissions to Google Sheets.
- `GOOGLE_APPS_SCRIPT_SECRET` (optional): Shared secret appended to Apps Script URL as `?secret=...`.
- `SANITY_WRITE_TOKEN`: Sanity write token used for seeding initial publication documents.

If Sanity variables are missing, publications gracefully fall back to local data in
`src/lib/publications-content.ts`.

## Sanity Webhook (Auto Updates)

Publications are fetched from Sanity and the route is revalidated via webhook.

Webhook endpoint:

- `POST /api/sanity/webhook?secret=<SANITY_REVALIDATE_SECRET>`

Behavior:

- Verifies `SANITY_REVALIDATE_SECRET`
- Revalidates the `sanity.publications` cache tag and `/publications` path when publication data changes

Suggested Sanity webhook setup:

1. Go to Sanity project settings -> API -> Webhooks
2. Create webhook URL:
   - `https://<your-domain>/api/sanity/webhook?secret=<your-secret>`
3. Trigger on create/update/delete for `publication` documents
4. Set your `SANITY_REVALIDATE_SECRET` in deployment environment variables

## Join Lab -> Google Sheets

The Join Lab form submits to `POST /api/join-lab`, and the route forwards normalized JSON
to `GOOGLE_APPS_SCRIPT_URL`.

Payload forwarded to Apps Script:

- `fullName`, `email`, `institution`, `currentLevel`, `fieldOfStudy`
- `interestReason`, `joinReason`
- `resumeFileName`, `resumeFileType`, `resumeFileSize`
- `resumeFileBase64` (optional; included when a file is uploaded)
- `submittedAt` (ISO timestamp)

Apps Script should append these fields as a new spreadsheet row and return a 2xx status
for successful submissions.

Suggested Google Apps Script (`doPost`) implementation:

```javascript
const SHEET_NAME = "Join Lab";
const SECRET = PropertiesService.getScriptProperties().getProperty("JOIN_LAB_SECRET");

function jsonResponse(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(
    ContentService.MimeType.JSON
  );
}

function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      return jsonResponse({ success: false, message: "Missing request body." });
    }

    const querySecret = (e.parameter && e.parameter.secret) || "";
    if (SECRET && querySecret !== SECRET) {
      return jsonResponse({ success: false, message: "Unauthorized request." });
    }

    const payload = JSON.parse(e.postData.contents);
    const required = [
      "fullName",
      "email",
      "institution",
      "currentLevel",
      "fieldOfStudy",
      "interestReason",
      "joinReason",
    ];

    const missing = required.filter((key) => !String(payload[key] || "").trim());
    if (missing.length) {
      return jsonResponse({ success: false, message: `Missing fields: ${missing.join(", ")}` });
    }

    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);

    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Submitted At",
        "Full Name",
        "Email",
        "Institution",
        "Current Level",
        "Field of Study",
        "Interest Reason",
        "Join Reason",
        "Resume File Name",
        "Resume File Type",
        "Resume File Size",
      ]);
    }

    sheet.appendRow([
      payload.submittedAt || new Date().toISOString(),
      payload.fullName || "",
      payload.email || "",
      payload.institution || "",
      payload.currentLevel || "",
      payload.fieldOfStudy || "",
      payload.interestReason || "",
      payload.joinReason || "",
      payload.resumeFileName || "",
      payload.resumeFileType || "",
      payload.resumeFileSize || 0,
    ]);

    return jsonResponse({ success: true });
  } catch (error) {
    return jsonResponse({ success: false, message: String(error) });
  }
}
```

Deployment checklist:

1. Create a Google Sheet and Apps Script project bound to it.
2. Paste the script above and set script property `JOIN_LAB_SECRET` (optional).
3. Deploy as Web App (Execute as: you, Access: anyone with link).
4. Set `GOOGLE_APPS_SCRIPT_URL` in your app env.
5. If using a secret, set the same value in `GOOGLE_APPS_SCRIPT_SECRET`.

If you need the actual resume file (not just metadata), decode `resumeFileBase64` in Apps Script and save to Drive:

```javascript
if (payload.resumeFileBase64) {
  const bytes = Utilities.base64Decode(payload.resumeFileBase64);
  const blob = Utilities.newBlob(
    bytes,
    payload.resumeFileType || "application/octet-stream",
    payload.resumeFileName || "resume"
  );
  const file = DriveApp.createFile(blob);
  // Optionally store file URL in your spreadsheet row:
  // file.getUrl()
}
```

## Seeding Existing Publications to Sanity

Use the existing `src/lib/publications-content.ts` entries to bootstrap Sanity documents:

```bash
npm run seed:publications
```

The seed script creates `publication` documents (without overwriting existing ones),
sets `orderRank`, `featuredRank`, and marks the first 4 entries as homepage featured.

## Scripts

- `npm run dev`: Start local dev server (Turbopack).
- `npm run build`: Create production build.
- `npm run start`: Start production server from build output.
- `npm run lint`: Run ESLint with autofix.
- `npm run test`: Run Jest tests.
- `npm run format`: Run Prettier across the repo.

## Quality Gates

Git hooks run automatically via Husky:

- Pre-commit: `eslint --fix` + `prettier --write` on staged files.
- Commit-msg: Conventional Commit validation via commitlint.

CI should run lint, tests, and build before merge/deploy.

## Vercel Configuration

This project uses Next.js App Router defaults on Vercel without custom route
fallback overrides, so framework route handling works as expected for:

- `/`
- `/research`
- `/publications`
- `/team`
- `/collaborations`
- `/join-lab`

## Design System Notes

- Main font family is loaded locally (MADE Tommy Soft variants).
- Shared CTA button style is reused across pages.
- Header supports transparent/solid modes and dark/light text mode.
- Join Lab form fields are config-driven (`src/lib/join-lab-content.ts`), with shared field types in `src/types/join-lab.ts`.
- Publications are fetched from Sanity (`_type == "publication"`) via `src/lib/sanity/publications.ts`.
- Studio is self-hosted inside this app at `/studio`.

## Deployment

Typical deployment flow:

1. Run `npm run lint`
2. Run `npm run test`
3. Run `npm run build`
4. Push to `main`
5. Deploy via Vercel

## Troubleshooting

- Build/type errors: run `npm run build` locally to catch route/type issues.
- Lint hook failures during commit: fix issues and recommit.
- Commit message rejection: use Conventional Commit format (for example, `feat: ...`, `fix: ...`).
- Asset issues: verify file paths under `public/assets` and reference with leading `/assets/...`.
