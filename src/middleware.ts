import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Rate limiting map
const rateLimit = new Map();

// Rate limit configuration
const RATE_LIMIT = {
  MAX_REQUESTS: process.env.RATE_LIMIT_MAX ? parseInt(process.env.RATE_LIMIT_MAX) : 100,
  WINDOW_MS: process.env.RATE_LIMIT_WINDOW_MS ? parseInt(process.env.RATE_LIMIT_WINDOW_MS) : 900000, // 15 minutes
};

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // 1. Security Headers
  const securityHeaders = {
    'X-DNS-Prefetch-Control': 'on',
    'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
    'X-Frame-Options': 'SAMEORIGIN',
    'X-Content-Type-Options': 'nosniff',
    'X-XSS-Protection': '1; mode=block',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
    'Content-Security-Policy': `
      default-src 'self';
      script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.google-analytics.com;
      style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
      img-src 'self' data: https: blob:;
      font-src 'self' https://fonts.gstatic.com;
      connect-src 'self' https://firebaseinstallations.googleapis.com https://fcmregistrations.googleapis.com https://graph.instagram.com;
      frame-src 'self' https://www.youtube.com;
      media-src 'self' https:;
      object-src 'none';
      base-uri 'self';
      form-action 'self';
      frame-ancestors 'none';
      upgrade-insecure-requests;
    `.replace(/\s+/g, ' ').trim()
  };

  // Apply security headers
  Object.entries(securityHeaders).forEach(([key, value]) => {
    response.headers.set(key, value);
  });

  // 2. Rate Limiting for API routes
  if (request.nextUrl.pathname.startsWith('/api')) {
    const ip = request.ip ?? 'anonymous';
    const now = Date.now();
    const windowStart = now - RATE_LIMIT.WINDOW_MS;

    // Clean up old entries
    rateLimit.forEach((timestamp, key) => {
      if (timestamp < windowStart) {
        rateLimit.delete(key);
      }
    });

    // Check rate limit
    const requestCount = Array.from(rateLimit.entries())
      .filter(([key, timestamp]) => key.startsWith(ip) && timestamp > windowStart)
      .length;

    if (requestCount >= RATE_LIMIT.MAX_REQUESTS) {
      return new NextResponse(JSON.stringify({
        error: 'Too many requests',
        message: 'Please try again later'
      }), {
        status: 429,
        headers: {
          'Content-Type': 'application/json',
          'Retry-After': String(Math.ceil(RATE_LIMIT.WINDOW_MS / 1000))
        }
      });
    }

    // Record the request
    rateLimit.set(`${ip}-${now}`, now);
  }

  // 3. Bot Protection
  const userAgent = request.headers.get('user-agent') || '';
  if (userAgent.toLowerCase().includes('bot') && !userAgent.toLowerCase().includes('googlebot')) {
    return new NextResponse(JSON.stringify({
      error: 'Access denied'
    }), {
      status: 403,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  // 4. Prevent access to sensitive files
  const sensitiveFiles = /\.(env|config|lock|log|md|txt)$/i;
  if (sensitiveFiles.test(request.nextUrl.pathname)) {
    return new NextResponse(null, { status: 404 });
  }

  return response;
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}; 