import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "./atoms";

import { Container, Col } from "./Layout";

const Header = () => (
    <Root>
        <HeaderContainer valign="center">
            <Col>
                <HeaderNav>
                    <HeaderNavItem>JavaScript</HeaderNavItem>
                    <HeaderNavItem>Browser API</HeaderNavItem>
                    <HeaderNavItem>NodeJS</HeaderNavItem>
                </HeaderNav>
            </Col>
            <Col />
            <Col />
        </HeaderContainer>
    </Root>
);

Header.propTypes = {
    siteTitle: PropTypes.string,
};

const Root = styled.header`
    left: 0;
    top: 0;
    width: 100%;
    height: 64px;
    box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.06);
`;

const HeaderContainer = styled(Container)`
    height: 100%;
`;

const HeaderNav = styled.ul`
    display: flex;
    align-items: center;
    z-index: 1;
    pointer-events: auto;
`;

const HeaderNavItem = styled(Link)`
    display: inline-block;
    padding: 5px;
    margin-left: -5px;
    margin-right: 2rem;
`;

export default Header;
