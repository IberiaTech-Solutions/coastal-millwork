import { NOTABLE_PROJECTS, PROJECTS_GALLERY } from "./projects";

/** Normalize project location string to a key for coordinate lookup (e.g. "Greenville (Main St.), SC" → "Greenville, SC"). */
function normalizeLocationKey(location: string): string {
  const trimmed = location.trim();
  const match = trimmed.match(/,?\s*([A-Z]{2})\s*$/);
  if (!match) return trimmed;
  const state = match[1];
  const beforeState = trimmed.slice(0, match.index).trim();
  const city = beforeState.replace(/\s*\([^)]+\)\s*$/, "").trim();
  const lastComma = city.lastIndexOf(",");
  const place = lastComma >= 0 ? city.slice(lastComma + 1).trim() : city;
  return `${place}, ${state}`;
}

/** Normalize "Ohio" to "OH" for lookup. */
function normalizeStateAbbrev(location: string): string {
  return location.replace(/\s+Ohio\s*$/i, ", OH").replace(/\s+Georgia\s*$/i, ", GA");
}

/** [longitude, latitude] for project locations. Add new entries when new cities appear. */
export const PROJECT_LOCATION_COORDS: Record<string, [number, number]> = {
  "Daniel Island, SC": [-79.9, 32.85],
  "Spartanburg, SC": [-81.93, 34.95],
  "Charleston, SC": [-79.93, 32.78],
  "Kiawah, SC": [-80.08, 32.61],
  "Lexington, SC": [-81.24, 33.98],
  "Jasper County, SC": [-80.98, 32.48],
  "Mount Pleasant, SC": [-79.86, 32.79],
  "Wilmington, NC": [-77.89, 34.21],
  "Beaufort, SC": [-80.67, 32.43],
  "Summerville, SC": [-80.18, 33.02],
  "Greenville, SC": [-82.39, 34.85],
  "Anderson, SC": [-82.65, 34.5],
  "Wofford College, Spartanburg, SC": [-81.93, 34.95],
  "New York, NY": [-73.99, 40.71],
  "Savannah, GA": [-81.09, 32.08],
  "Augusta, GA": [-82.0, 33.47],
  "Beachwood, Ohio": [-81.54, 41.46],
  "Beachwood, OH": [-81.54, 41.46],
  "Florence, SC": [-79.76, 34.2],
  "Bluffton, SC": [-80.86, 32.24],
  "Isle of Palms, SC": [-79.79, 32.79],
  "Myrtle Beach, SC": [-78.89, 33.69],
  "Kiawah Island, SC": [-80.08, 32.61],
  "Ridgeland, SC": [-80.98, 32.48],
  "North Charleston, SC": [-79.97, 32.85],
  "Clemson, SC": [-82.84, 34.68],
  "Ridgeville, SC": [-80.31, 33.09],
  "Okatie, SC": [-80.85, 32.34],
  "Hilton Head, SC": [-80.75, 32.22],
  "Sullivans Island, SC": [-79.84, 32.76],
  "Denver, CO": [-104.99, 39.74],
};

/** Areas mentioned in copy (About, FAQs) with no project list – shown on map with count 0. */
const AREAS_SERVED_COPY = ["Denver, CO"];

export type ProjectMapLocation = {
  location: string;
  coordinates: [number, number];
  projectCount: number;
};

/** Unique project locations with coordinates and project count, from PROJECTS_GALLERY + NOTABLE_PROJECTS (home page list). */
export function getProjectMapLocations(): ProjectMapLocation[] {
  const byKey = new Map<string, { location: string; coordinates: [number, number]; count: number }>();
  const addLocation = (location: string) => {
    if (!location || location === "Full Renovation") return;
    const normalized = normalizeStateAbbrev(location);
    const key = normalizeLocationKey(normalized);
    const coords =
      PROJECT_LOCATION_COORDS[key] ??
      PROJECT_LOCATION_COORDS[normalized] ??
      PROJECT_LOCATION_COORDS[location];
    if (!coords) return;
    const existing = byKey.get(key);
    if (existing) {
      existing.count += 1;
    } else {
      byKey.set(key, { location: key, coordinates: coords, count: 1 });
    }
  };
  for (const p of PROJECTS_GALLERY) addLocation(p.location);
  for (const p of NOTABLE_PROJECTS) addLocation(p.location);
  for (const location of AREAS_SERVED_COPY) {
    const coords = PROJECT_LOCATION_COORDS[location];
    if (coords && !byKey.has(location)) byKey.set(location, { location, coordinates: coords, count: 0 });
  }
  return Array.from(byKey.values()).map(({ location, coordinates, count }) => ({
    location,
    coordinates,
    projectCount: count,
  }));
}
