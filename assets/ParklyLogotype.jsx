import * as React from "react";
import Svg, { Path, Text, TSpan } from "react-native-svg";

const ParklyLogotype = (props) => (
  <Svg
    width={189.159}
    height={87.895}
    viewBox="0 0 50.048 23.256"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      style={{
        fill: "none",
        fillOpacity: 1,
        stroke: "#007c00",
        strokeWidth: 15.8608,
        strokeLinecap: "butt",
        strokeLinejoin: "round",
        strokeMiterlimit: 2.6,
        strokeDasharray: "none",
        strokeOpacity: 1,
        paintOrder: "markers fill stroke",
      }}
      d="M105.35 171.063c-108.888-94.266 74.635-101.103 5.332-21.926"
      transform="translate(-15.949 -22.286) scale(.25721)"
    />
    <Path
      style={{
        fill: "#007c00",
        fillOpacity: 1,
        stroke: "none",
        strokeWidth: ".634485px",
        strokeLinecap: "butt",
        strokeLinejoin: "miter",
        strokeOpacity: 1,
      }}
      d="M98.726 137.468c-22.244-21.238-6.605-27.67 2.572-25.966 17.233 3.723 3.995 18.197-2.572 25.966z"
      transform="translate(-15.949 -22.286) scale(.25721)"
    />
    <Text
      xmlSpace="preserve"
      style={{
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "51.3296px",
        lineHeight: 1.25,
        fontFamily: "sans-serif",
        fill: "#000",
        fillOpacity: 1,
        stroke: "none",
        strokeWidth: 1.28324,
      }}
      x={135.934}
      y={152.092}
      transform="translate(-15.949 -22.286) scale(.25721)"
    >
      <TSpan
        style={{
          fontStyle: "normal",
          fontVariant: "normal",
          fontWeight: 400,
          fontStretch: "normal",
          fontSize: "49.3889px",
          fontFamily: "sans-serif",
          InkscapeFontSpecification: "'sans-serif, Normal'",
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal",
          strokeWidth: 1.28324,
        }}
        x={135.934}
        y={152.092}
      >
        {"arkly"}
      </TSpan>
    </Text>
  </Svg>
);

export default ParklyLogotype;
