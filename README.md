# Vehicle App

A simple TypeScript application demonstrating a `Vehicle` interface and a `Car` class.

## Requirements

- Node.js (>= 14)
- npm

## Setup

Run the following commands in PowerShell:

```powershell
cd "C:\Users\joywa\Developer\vehicle-app"
npm install
npm run build
npm start
```

Or explicitly compile then run:

```powershell
cd "C:\Users\joywa\Developer\vehicle-app"
npx tsc
node dist/index.js
```

## Expected output

The application logs:

```text
Vehicle Info: 2024 Toyota Camry
Car engine started
```

## Files

- `src/index.ts` - TypeScript source implementing the `Vehicle` interface and `Car` class.
- `tsconfig.json` - TypeScript compiler options.
- `package.json` - Scripts and devDependencies.
- `.gitignore` - Common ignores for Node/TypeScript projects.
