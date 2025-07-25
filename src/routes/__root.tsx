// src/routes/__root.tsx
/// <reference types="vite/client" />
// other imports...

import type { ReactNode } from 'react';

import {
    createRootRoute,
    HeadContent,
    Outlet,
    Scripts
} from '@tanstack/react-router';

import appCss from '../styles/app.css?url';

export const Route = createRootRoute({
    head: () => ({
        meta: [
            {
                charSet: 'utf-8'
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                title: 'TanStack Start Starter'
            }
        ],
        links: [{ rel: 'stylesheet', href: appCss }]
    }),
    component: RootComponent
});

function RootComponent() {
    return (
        <RootDocument>
            <Outlet />
        </RootDocument>
    );
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
    return (
        <html>
            <head>
                <HeadContent />
            </head>

            <body className="flex h-dvh w-dvw flex-col">
                <main className="flex-1">{children}</main>

                <Scripts />
            </body>
        </html>
    );
}
