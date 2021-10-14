import { createGlobalStyle } from "styled-components";

import Reset from "./reset/";
import { CSSColor } from "./color/";
import Typography from "./typography/";
import Dimension from "./dimension/";
import Effect from "./effect/";
import Utility from "./utility/";

export default createGlobalStyle`
    ${Reset}
    ${CSSColor}
    ${Typography}
    ${Dimension}
    ${Effect}
    ${Utility}
`;
