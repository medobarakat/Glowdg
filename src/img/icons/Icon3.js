import * as React from "react"
import Svg, { Path } from "react-native-svg"

const Icon3 = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={18}
        height={20}
        fill="none"
        {...props}
    >
        <Path
            d="M4.6 9.1V5.5a4.5 4.5 0 0 1 9 0v3.6m-10.8 0h12.6a1.8 1.8 0 0 1 1.8 1.8v6.3a1.8 1.8 0 0 1-1.8 1.8H2.8A1.8 1.8 0 0 1 1 17.2v-6.3a1.8 1.8 0 0 1 1.8-1.8Z"
            stroke="#FF6F61"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
)

export default Icon3