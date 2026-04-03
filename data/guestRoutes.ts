import guests from "./guests.json";
export const guestRoutes = guests.guests.map((guest: any) => `/i/${guest.id}`);
