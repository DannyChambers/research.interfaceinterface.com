import { createGlobalStyle } from "styled-components";

import Reset from "./reset/";
import { CSSColor } from "./color/";
import Typography from "./typography/";
import Dimension from "./dimension/";
import Effect from "./effect/";

export default createGlobalStyle`
    ${Reset}
    ${CSSColor}
    ${Typography}
    ${Dimension}
    ${Effect}
`;
