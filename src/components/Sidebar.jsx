import React, { Component } from "react";
import styled from "styled-components";
import { Col } from "./Layout";

class Sidebar extends Component {
    render() {
        return (
            <Root>
                <SidebarNav />
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

const Root = styled(Col)`
    padding: 1rem 3rem 0 0;
    max-width: 312px;
`;

export default Sidebar;
