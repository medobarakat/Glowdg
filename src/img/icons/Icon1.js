import * as React from "react"
import Svg, { Path } from "react-native-svg"

const Icon1 = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={20}
        fill="none"
        {...props}
        viewbox="0 0 46 46"
        preserveAspectRatio="none"
    >
        <Path
            d="M16 14V1H1v13h15Zm0 0h7V9l-3-3h-4v8Zm-8 2.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm13 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
            stroke="#FF6F61"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
)

export default Icon1