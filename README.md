# turborepo-boilerplate

## Overview

- [Local development](https://github.com/LarsKemper/turborepo-boilerplate#local-development)
- [About this repository](https://github.com/LarsKemper/turborepo-boilerplate#about-this-repository)
- [Documentation](https://github.com/LarsKemper/turborepo-boilerplate#documentation)
- [Examples](https://github.com/LarsKemper/turborepo-boilerplate#examples)
- [License](https://github.com/LarsKemper/turborepo-boilerplate#license)

## Local development

To run the local development server, first clone this repo.

Switch to the project directory:

```bash
cd turborepo-boilerplate
```

Install dependencies:

```bash
pnpm install
```

Start the local development servers:

```bash
pnpm run dev
```

Open the project at `localhost:3000`.

## About this repository

### Top-level layout

This repository's contents is divided across four primary sections:

- `/examples` contains example projects
- `/apps` contains the source code of turborepo-boilerplate apps
- `/packages` contains the source code of turborepo-boilerplate packages

### Apps

This repository's source code is divided across multiple apps:

- `@trb/web` contains the source code of the turborepo-boilerplate web app

### Packages

This repository's source code is divided across multiple packages:

- `@trb/eslint-config` contains configuration for ESLint
- `@trb/typescirpt-config` contains configuration for TypeScript
- `@trb/ui` contains the source code of the turborepo-boilerplate UI components
- `@trb/shared` contains shared code used across multiple apps

## License

Copyright (c) 2025 [?]
`turborepo-boilerplate` is distributed under the terms of the MIT License.  
See the [LICENSE](./LICENSE) file for details.
