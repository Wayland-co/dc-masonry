const url = process.env.NEXT_PUBLIC_CALENDLY_URL;

export function getCalendlyUrl(): string | null {
  return url ?? null;
}

export function isCalendlyEnabled(): boolean {
  return Boolean(url);
}
