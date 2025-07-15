/**
 * Email protection utilities to prevent scraping and spam
 */

export const obfuscateEmail = (email: string): string => {
  return email
    .split('')
    .map((char) => `&#${char.charCodeAt(0)};`)
    .join('');
};

export const getProtectedEmail = (): string => {
  // Split email into parts to avoid direct string detection
  const user = ['i', 'n', 'f', 'o'].join('');
  const domain = ['a', 'l', 'l', 'w', 'a', 'y', 's', 'h', 'o', 'm', 'e'].join(
    ''
  );
  const tld = ['i', 'e'].join('');

  return `${user}@${domain}.${tld}`;
};

export const createMailtoLink = (subject?: string, body?: string): string => {
  const email = getProtectedEmail();
  const params = new URLSearchParams();

  if (subject) params.append('subject', subject);
  if (body) params.append('body', body);

  const queryString = params.toString();
  return `mailto:${email}${queryString ? '?' + queryString : ''}`;
};

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isLikelySpam = (message: string): boolean => {
  const spamKeywords = [
    'viagra',
    'casino',
    'lottery',
    'winner',
    'congratulations',
    'click here',
    'free money',
    'guaranteed',
    'act now',
    'limited time',
    'no obligation',
    'risk free',
    'credit card',
    'loan',
    'debt',
    'weight loss',
    'pharmacy',
    'prescription',
    'supplements',
  ];

  const lowerMessage = message.toLowerCase();
  return spamKeywords.some((keyword) => lowerMessage.includes(keyword));
};

export const hasExcessiveLinks = (message: string): boolean => {
  const linkRegex = /https?:\/\/[^\s]+/g;
  const links = message.match(linkRegex) || [];
  return links.length > 2; // Flag messages with more than 2 links
};

export const hasSuspiciousPatterns = (message: string): boolean => {
  // Check for excessive capitalization
  const capsRatio = (message.match(/[A-Z]/g) || []).length / message.length;
  if (capsRatio > 0.3) return true;

  // Check for excessive punctuation
  const punctRatio = (message.match(/[!?]{2,}/g) || []).length;
  if (punctRatio > 2) return true;

  // Check for phone numbers (basic pattern)
  const phonePattern = /\b\d{3}[-.]?\d{3}[-.]?\d{4}\b/g;
  if (phonePattern.test(message)) return true;

  return false;
};
