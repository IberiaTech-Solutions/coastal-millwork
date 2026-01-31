"use client";

import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import { getProjectMapLocations } from "@/data/projectMapLocations";

const US_STATES_URL = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

export default function ProjectLocationsMap() {
  const locations = getProjectMapLocations();

  return (
    <ComposableMap
      projection="geoAlbersUsa"
      projectionConfig={{ scale: 1000 }}
      width={800}
      height={500}
      style={{ width: "100%", height: "auto" }}
    >
      <Geographies geography={US_STATES_URL}>
        {({ geographies }: { geographies: { rsmKey: string }[] }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo as object}
              fill="var(--bg-subtle)"
              stroke="var(--border-drafting)"
              strokeWidth={0.5}
            />
          ))
        }
      </Geographies>
      {locations.map(({ location, coordinates, projectCount }) => (
        <Marker key={location} coordinates={coordinates}>
          <circle
            r={projectCount > 2 ? 6 : 4}
            fill="var(--accent)"
            stroke="var(--background)"
            strokeWidth={1}
            aria-hidden
          />
          <title>{`${location} (${projectCount} project${projectCount !== 1 ? "s" : ""})`}</title>
        </Marker>
      ))}
    </ComposableMap>
  );
}
