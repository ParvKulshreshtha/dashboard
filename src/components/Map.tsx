import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import features from "../feature.json";

const markers = [
  { name: "New York", coordinates: [-74.006, 40.7128] },
  { name: "San Francisco", coordinates: [-122.4194, 37.7749] },
  { name: "Sydney", coordinates: [151.2093, -33.8688] },
  { name: "Singapore", coordinates: [103.8198, 1.3521] },
];

const Map = () => {
  return (
    <div style={{ height: "82px", width: "100%" }}>
      <ComposableMap>
        <Geographies geography={features}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                style={{
                  default: { fill: "#A8C5DA", outline: "none" },
                  hover: { fill: "#A8C5DA", outline: "none" },
                  pressed: { fill: "#A8C5DA", outline: "none" }
                }}
              />
            ))
          }
        </Geographies>
        {markers.map(({ name, coordinates }) => (
          <Marker key={name} coordinates={[coordinates[0], coordinates[1]]}>
            <circle r={10} fill="#1c1c1c" stroke="#ffffff" strokeWidth={3} />
          </Marker>
        ))}
      </ComposableMap>
    </div>
  );
};

export default Map;
