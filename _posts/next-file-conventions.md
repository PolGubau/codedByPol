---
title: "File conventions in Next.js"
excerpt: "An overview of the file and folder structure of a Next.js project. The top-level files and folders, configuration files, and routing conventions within the app and pages directories."

coverImage: "cover.png"
date: "2023-10-29T10:01:00.000Z"
author: polgubau
tags: ["nextjs", "javascript", "web"]
ogImage:
  url: "cover.png"
---

## Next.js File conventions

An overview of the file and folder structure of a Next.js project. The top-level files and folders, configuration files, and routing conventions within the app and pages directories.

## Top-Level Files and Folders

### Top-Level Folders

When you create a new Next.js project, you will see the following folders in the root directory:

- **app** - This folder contains the Next.js application code, including the pages, components, and styles folders. You will spend most of your time working in this folder. It will be used just if you started your project with the recent **App Router** system.

- **pages** - This folder contains the pages of your application. Each page is a React component that is rendered on the client-side. The pages folder is where you will create most of your application's pages. It will be used just if you started your project with the old **Pages Router** system.

- **public** - This folder contains static assets such as images, fonts, etc. Files inside public directory can then be referenced by your code starting from the base URL (/).

- **src** - This folder is optional, some developers like to keep their source code in a separate folder. If you choose to use this folder, you can put your source code in here and import it from other files in your project. (e.g. import { Button } from "src/components/Button"). It doesn't matter the router system you are using.

- **styles** - This folder contains the global styles for your application. You can use this folder to define global styles that will be applied to all pages in your application. It doesn't matter the router system you are using.

### Top-Level Files

When you create a new Next.js project, you will see the following files in the root directory:

#### Files made by Next.js

- **next.config.js** - This file contains configuration options for Next.js. You can use this file to configure things like the webpack configuration, the Babel configuration, and the Next.js server configuration.

- **instrumentation.ts** - (Optional) OpenTelemetry and Instrumentation file, it is used to configure the OpenTelemetry instrumentation for Next.js.

- **middleware.ts** - (Optional) Next.js request middleware, it is used to configure the Next.js request middleware, for example, to add a custom header to all requests.

- **.env** - (Optional) Environment variables, it is used to configure environment variables for your application. For example to define the API URL.

- **.env.local** - (Optional) Local environment variables, has the same purpose as .env but it is not committed to the repository. It's made for storing locally keys and secrets.

- **.env.production** - (Optional) Production environment variables, has the same purpose as .env but it is only used in production.

- **.env.development** - (Optional) Development environment variables, has the same purpose as .env but it is only used in development.

- **.eslintrc.json** - (Optional) Configuration file for ESLint, it is used to configure ESLint for your project. ESLint is a tool that helps you find and fix problems in your JavaScript code.

- **next-env.d.ts** - This file contains type definitions for Next.js. You can use this file to add type definitions for your project, or to add type definitions for third-party libraries.

#### Common files

- **package.json** - This file contains information about your project, including the name, version, description, and dependencies. You can use this file to add dependencies to your project.

- **.gitignore** - This file tells Git which files and folders to ignore when committing changes to your repository. You can add files and folders to this file if you don't want them to be tracked by Git.
- **tsconfig.json** - (Just if you use typescirpt) Rules file for TypeScript, it is used to configure TypeScript for your project. You can specify which files should be compiled, which files should be ignored, and which compiler options should be used...

- **README.md** - This file contains information about your project. You can use this file to add a description of your project, installation instructions, and usage instructions.

- **LICENSE** - This file contains the license for your project. You can use this file to add a license to your project.

- **.prettierrc** - (Optional) Configuration file for Prettier, it is used to configure Prettier for your project. Prettier is a tool that helps you format your code.

- **.prettierignore** - (Optional) This file tells Prettier which files and folders to ignore when formatting your code. You can add files and folders to this file if you don't want them to be formatted by Prettier.

- **.editorconfig** - (Optional) Configuration file for EditorConfig, it is used to configure EditorConfig for your project. EditorConfig is a tool that helps you maintain consistent coding styles between different editors and IDEs.

### App Routing Convention

#### Routing Files

When you create a new Next.js project, you will see the following files in the app directory:

- **app/layout.tsx** - This file contains a UI that is shared between routes.
  . It is rendered when the user visits the root of your application (/). An example of a root layout is shown below:

```typescript
// app/layout.tsx
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
```

- **/page.tsx** - A page is UI that is unique to a route, and is rendered when the user visits that route. An example of a page is shown below:

```typescript
// app/page.tsx
export default function Page({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return <h1>My Page</h1>;
}
```

- **/loading.tsx** - This file contains a UI that is rendered when the user visits a route that is not yet loaded. An example of a loading UI is shown below:

```typescript
export default function Loading() {
  // Or a custom loading skeleton component
  return <p>Loading...</p>;
}
```

- **/not-found.tsx** -The not-found file is used to render UI when the notFound function is thrown within a route segment. Along with serving a custom UI, Next.js will return a 200 HTTP status code for streamed responses, and 404 for non-streamed responses. An example of a not-found UI is shown below:

```typescript
// app/blog/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
```

- **/error.tsx** - An error file defines an error UI boundary for a route segment. It is useful for catching unexpected errors that occur in Server Components and Client Components and displaying a fallback UI. An example of an error UI is shown below:

```typescript
"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
```

- **/global-error** - To specifically handle errors in root layout.js, use a variation of error.tsx called app/global-error.tsx located in the root app directory. An example of a global error UI is shown below:
  - global-error.js replaces the root layout.js when active and so must define its own <html> and <body> tags.
  - While designing error UI, you may find it helpful to use the React Developer Tools to manually toggle Error boundaries.

```typescript
// app/global-error.tsx

"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
}
```

- **routes.ts** - Route Handlers allow you to create custom request handlers for a given route using the Web Request and Response APIs. A route file allows you to create custom request handlers for a given route. The following HTTP methods are supported: GET, POST, PUT, PATCH, DELETE, HEAD, and OPTIONS. Some examples of a routes file is shown below:

```typescript
// route.ts

export async function GET(request: Request) {}

export async function HEAD(request: Request) {}

export async function POST(request: Request) {}

export async function PUT(request: Request) {}

export async function DELETE(request: Request) {}

export async function PATCH(request: Request) {}

// If `OPTIONS` is not defined, Next.js will automatically implement `OPTIONS` and  set the appropriate Response `Allow` header depending on the other methods defined in the route handler.
export async function OPTIONS(request: Request) {}
```

- **/template** - A template file is similar to a layout in that it wraps each child layout or page. Unlike layouts that persist across routes and maintain state, templates create a new instance for each of their children on navigation. An example of an API route is shown below:

```typescript
// app/template.tsx

export default function Template({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
```
