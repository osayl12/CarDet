export const PHONE_DISPLAY = "050-4306426";
export const PHONE_TEL = "0504306426";
export const WHATSAPP_NUMBER = "972504306426";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export const LAT = 32.896149;
export const LON = 35.397032;
export const DIRECTIONS_URL = `https://www.google.com/maps?q=${LAT},${LON}`;
export const MAP_EMBED_URL = `https://www.google.com/maps?q=${LAT},${LON}&z=15&output=embed`;

// Sun-Thu 08:00-19:00, Fri 08:00-14:00, Sat closed.
// JS Date.getDay(): 0=Sunday ... 6=Saturday
export function isOpenNow(date: Date = new Date()): boolean {
  const day = date.getDay();
  const minutes = date.getHours() * 60 + date.getMinutes();

  if (day === 6) return false; // Saturday - closed
  if (day === 5) return minutes >= 8 * 60 && minutes < 14 * 60; // Friday
  return minutes >= 8 * 60 && minutes < 19 * 60; // Sun-Thu
}
