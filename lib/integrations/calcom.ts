const username = process.env.NEXT_PUBLIC_CALCOM_USERNAME;
const eventType = process.env.NEXT_PUBLIC_CALCOM_EVENT_TYPE ?? 'discovery';

export function getCalcomUrl(): string | null {
  if (!username) return null;
  return `https://cal.com/${username}/${eventType}`;
}

export function isCalcomEnabled(): boolean {
  return Boolean(username);
}

export function getCalcomUsername(): string | null {
  return username ?? null;
}

export function getCalcomEventType(): string {
  return eventType;
}
