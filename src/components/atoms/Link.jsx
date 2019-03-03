import styled from "styled-components";
import { styled_vars } from "../../config";
import { Link as GLink } from "gatsby";

const Link = styled(GLink)`
    color: ${styled_vars.BLACK_TEXT};
    font-weight: 400;
    text-decoration: none;
    :hover {
        color: ${styled_vars.BLUE_TEXT};
    }
    &.active {
        color: ${styled_vars.BLUE_TEXT};
        font-weight: 600;
    }
`;
export default Link;
