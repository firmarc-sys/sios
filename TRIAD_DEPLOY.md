# SIOS / STARE / STAR-E GPT Triad Deploy

Triad roles:

- Vercel = visible frontend body.
- Render = backend brain at `https://sioslive.onrender.com`.
- iPhone = owner command device.

## Frontend repo

Use this repository for Vercel.

Vercel settings:

- Framework preset: Other
- Build command: `npm run build`
- Output directory: `.`

The `vercel.json` file routes `/api/*` to:

```txt
https://sioslive.onrender.com/api/*
```

## Backend repo

Use `firmarc-sys/sioslive` for Render.

Render settings:

- Environment: Node
- Build command: `npm install`
- Start command: `npm start`
- Health check path: `/api/health`

## iPhone flow

Open the Vercel site in Safari on iPhone and type:

```txt
TAE, enter Demo Mode
```

Then test:

```txt
status
triad
```

## Truth rule

Missing production bridges stay bridge-labeled. Public readiness language must use:

Designed for review, not pretending approval.
