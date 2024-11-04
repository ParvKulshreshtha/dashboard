import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import features from "../feature.json";
import { FC } from "react";
import { useSelector } from "react-redux";

const markers = [
  { name: "New York", coordinates: [-74.006, 40.7128] },
  { name: "San Francisco", coordinates: [-122.4194, 37.7749] },
  { name: "Sydney", coordinates: [151.2093, -33.8688] },
  { name: "Singapore", coordinates: [103.8198, 1.3521] },
];

const Map:FC = () => {
  const darkTheme = useSelector((state: any) => state.darkTheme);
  const mapColor = darkTheme?"#A8C5DA66":"#A8C5DA"


  return (
    <div style={{ height: "100%", width: "100%" }}>
      <ComposableMap>
        <Geographies geography={features}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                stroke={!darkTheme?"#FFFFFF":"#1C1C1C"}
                style={{
                  default: { fill: mapColor, outline: "none" },
                  hover: { fill: mapColor, outline: "none" },
                  pressed: { fill: mapColor, outline: "none" }
                }}
              />
            ))
          }
        </Geographies>
        {markers.map(({ name, coordinates }) => (
          <Marker key={name} coordinates={[coordinates[0], coordinates[1]]}>
            <circle r={10} fill={darkTheme?"#C6C7F8":"#1c1c1c"} stroke="#ffffff" strokeWidth={3} />
          </Marker>
        ))}
      </ComposableMap>
    </div>
  );
};

export default Map;
