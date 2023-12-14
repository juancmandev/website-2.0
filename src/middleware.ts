import createMiddleware from 'next-intl/middleware';
import { NextResponse, NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  const intlMiddleware: (request: NextRequest) => NextResponse<unknown> =
    createMiddleware({
      locales: ['en', 'es'],
      defaultLocale: 'en',
    });
  return intlMiddleware(req);
}

export const config = {
  matcher: ['/', '/(en|es)/:path*'],
};
