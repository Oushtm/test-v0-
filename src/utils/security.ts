import DOMPurify from 'dompurify';

// Regular expressions for validation
const PATTERNS = {
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  phone: /^(?:\+212|0)[5-7]\d{8}$/,  // Moroccan phone numbers
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
  name: /^[a-zA-ZÀ-ÿ\s'-]{2,50}$/,
  url: /^https?:\/\/[^\s/$.?#].[^\s]*$/i,
};

// Input validation functions
export const validate = {
  email: (email: string): boolean => PATTERNS.email.test(email),
  phone: (phone: string): boolean => PATTERNS.phone.test(phone),
  password: (password: string): boolean => PATTERNS.password.test(password),
  name: (name: string): boolean => PATTERNS.name.test(name),
  url: (url: string): boolean => PATTERNS.url.test(url),
};

// Input sanitization functions
export const sanitize = {
  // Sanitize HTML content
  html: (content: string): string => {
    if (typeof window === 'undefined') return content;
    return DOMPurify.sanitize(content, {
      ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'a', 'p', 'br'],
      ALLOWED_ATTR: ['href', 'target', 'rel'],
    });
  },

  // Sanitize plain text (remove HTML and special characters)
  text: (text: string): string => {
    return text
      .replace(/<[^>]*>/g, '') // Remove HTML tags
      .replace(/[<>]/g, '') // Remove < and >
      .trim();
  },

  // Sanitize email addresses
  email: (email: string): string => {
    return email.toLowerCase().trim();
  },

  // Sanitize phone numbers (keep only digits and +)
  phone: (phone: string): string => {
    return phone.replace(/[^\d+]/g, '');
  },

  // Sanitize URLs
  url: (url: string): string => {
    try {
      const sanitizedUrl = new URL(url);
      return sanitizedUrl.toString();
    } catch {
      return '';
    }
  },
};

// Password strength checker
export const checkPasswordStrength = (password: string): {
  score: number;
  feedback: string[];
} => {
  const feedback = [];
  let score = 0;

  // Length check
  if (password.length >= 8) score += 1;
  if (password.length >= 12) score += 1;
  if (password.length < 8) feedback.push('Password should be at least 8 characters long');

  // Character variety checks
  if (/[a-z]/.test(password)) score += 1;
  if (/[A-Z]/.test(password)) score += 1;
  if (/\d/.test(password)) score += 1;
  if (/[@$!%*?&]/.test(password)) score += 1;

  if (!/[a-z]/.test(password)) feedback.push('Add lowercase letters');
  if (!/[A-Z]/.test(password)) feedback.push('Add uppercase letters');
  if (!/\d/.test(password)) feedback.push('Add numbers');
  if (!/[@$!%*?&]/.test(password)) feedback.push('Add special characters');

  // Common patterns check
  if (/^123|password|qwerty|abc/i.test(password)) {
    score = Math.max(0, score - 2);
    feedback.push('Avoid common password patterns');
  }

  return {
    score: Math.min(5, score), // Score from 0 to 5
    feedback
  };
};

// CSRF token generation and validation
export const csrf = {
  generateToken: (): string => {
    return Math.random().toString(36).substring(2) + Math.random().toString(36).substring(2);
  },

  // Validate token format
  validateToken: (token: string): boolean => {
    return typeof token === 'string' && token.length >= 32;
  }
};

// Rate limiting helper (for client-side throttling)
export const rateLimit = {
  timestamps: new Map<string, number[]>(),

  check: (key: string, limit: number, windowMs: number): boolean => {
    const now = Date.now();
    const timestamps = rateLimit.timestamps.get(key) || [];
    
    // Remove old timestamps
    const validTimestamps = timestamps.filter(time => now - time < windowMs);
    
    if (validTimestamps.length >= limit) {
      return false;
    }
    
    validTimestamps.push(now);
    rateLimit.timestamps.set(key, validTimestamps);
    return true;
  }
};

// Security headers helper
export const securityHeaders = {
  basic: {
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'X-XSS-Protection': '1; mode=block',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
  },
  csp: {
    'Content-Security-Policy': [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.google-analytics.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "img-src 'self' data: https: blob:",
      "font-src 'self' https://fonts.gstatic.com",
      "connect-src 'self' https://firebaseinstallations.googleapis.com https://fcmregistrations.googleapis.com https://graph.instagram.com",
      "frame-src 'self' https://www.youtube.com",
      "media-src 'self' https:",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'none'",
      "upgrade-insecure-requests"
    ].join('; ')
  }
}; 