import * as React from "react"
import Svg, { Path } from "react-native-svg"

const Icon2 = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={18}
        height={20}
        fill="none"
        {...props}
    >
        <Path
            d="M13.167.833 16.5 4.167m0 0L13.167 7.5M16.5 4.167H4.833A3.333 3.333 0 0 0 1.5 7.5v1.667m3.333 10L1.5 15.833m0 0L4.833 12.5M1.5 15.833h11.667A3.333 3.333 0 0 0 16.5 12.5v-1.667"
            stroke="#FF6F61"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
)

export default Icon2