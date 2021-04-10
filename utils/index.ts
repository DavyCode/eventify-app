/**
 * @param date time and date string
 * @returns human readable date string
 */
export function formatDateReadable(date: string): string {
  return new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
}

/**
 * @param date time and date string
 * @returns human readable month & year string
 */
export function formatShortDateReadable(date: string): string {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric'
  });
}

/**
 * @param location - a valid address 
 * @returns formatted location string
 */
export function formattedAddress(location: string): string {
  return location.replace(', ', '\n');
}

