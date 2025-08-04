import type { Metadata } from 'next';
import { CssBaseline } from '@mui/material';
import Providers from './_contexts';

export const metadata: Metadata = {
    title: '@thomaslogs Portfolio',
    description: 'Full Stack Software Engineer with experience in SaaS, AI, and Blockchain.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body>
                <Providers>
                    <CssBaseline />
                    {children}
                </Providers>
            </body>
        </html>
    );
}
