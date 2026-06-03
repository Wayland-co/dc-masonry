import {
  getCalcomEventType,
  getCalcomUrl,
  getCalcomUsername,
} from './calcom';
import { getCalendlyUrl } from './calendly';

export type BookingProvider = 'calcom' | 'calendly';

const provider = process.env.NEXT_PUBLIC_BOOKING_PROVIDER as
  | BookingProvider
  | undefined;

export function getBookingProvider(): BookingProvider | null {
  if (provider === 'calcom' && getCalcomUsername()) return 'calcom';
  if (provider === 'calendly' && getCalendlyUrl()) return 'calendly';
  return null;
}

export function isBookingEnabled(): boolean {
  return getBookingProvider() !== null;
}

export function getBookingDirectUrl(): string | null {
  const p = getBookingProvider();
  if (p === 'calcom') return getCalcomUrl();
  if (p === 'calendly') return getCalendlyUrl();
  return null;
}

export { getCalcomUsername, getCalcomEventType, getCalendlyUrl };
