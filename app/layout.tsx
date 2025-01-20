import type { Metadata } from 'next';
import { CssBaseline } from '@mui/material';
import Providers from './_contexts';

export const metadata: Metadata = {
    title: 'Thomas R. Portfolio',
    description: 'Full-stack software engineer with experience in Blockchain, AI, and SaaS development.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.ico" sizes="any" />
            </head>
            <body>
                <Providers>
                    <CssBaseline />
                    {children}
                </Providers>
            </body>
        </html>
    );
}
