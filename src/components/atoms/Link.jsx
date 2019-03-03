import styled from "styled-components";
import { styled_vars } from "../../config";

const Link = styled.a`
    color: ${styled_vars.BLACK_TEXT};
    font-weight: 400;
    :hover {
        color: ${styled_vars.BLUE_TEXT};
    }
    $.active {
        color: ${styled_vars.BLUE_TEXT};
        font-weight: 600;
    }
`;
export default Link;
