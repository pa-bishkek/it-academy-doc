import React, { Component } from "react";
import styled from "styled-components";
import { Col } from "./Layout";
import { Link } from "./atoms";

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

const SidebarNav = styled.ul`
    padding-top: 3rem;
    padding-left: 1.25rem;
    margin-left: 1rem;
    border-left: 1px solid #efefef;
`;

const SidebarNavItem = styled.li`
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
        background: #111;
        position: absolute;
        left: -19px;
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
    }
`;

const Root = styled(Col)`
    padding: 1rem 3rem 0 0;
    max-width: 312px;
`;

export default Sidebar;
