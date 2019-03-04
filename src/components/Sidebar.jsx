import React, { Component } from "react";
import styled from "styled-components";
import { Col } from "./Layout";
import { Link } from "./atoms";
import { styled_vars } from "../config";

class Sidebar extends Component {
    render() {
        return (
            <Root>
                <SidebarNav>
                    <SidebarNavItem>
                        <Link>First page</Link>
                    </SidebarNavItem>
                    <SidebarNavItem>
                        <Link>Second page</Link>
                    </SidebarNavItem>
                </SidebarNav>
            </Root>
        );
    }
}

const SidebarNav = (Sidebar.SidebarNav = styled.ul`
    padding-left: 1.25rem;
    border-left: 1px solid ${styled_vars.LIGHT_GREY};
`);

const SidebarNavItem = (Sidebar.SidebarNavItem = styled.li`
    margin: 12px 0;
    position: relative;
    &:before {
        content: "";
        display: block;
        margin-right: -9px;
        width: 9px;
        height: 9px;
        min-width: 9px;
        border-radius: 50%;
        background: ${styled_vars.LIGHT_GREY};
        position: absolute;
        left: -1.25rem;
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
    }
    &.active {
        &:before {
            background: ${styled_vars.BLACK};
        }
    }
`);

const Root = styled(Col)`
    padding: 1rem 3rem 0 0;
    max-width: 312px;
`;

export default Sidebar;
