import React from "react";
import styled from "styled-components";
import { Container, Col } from "./Layout";
import { Link } from "./atoms";

const Footer = () => (
    <Root>
        <Container>
            <Col>
                <FooterNav>
                    <PrimaryFooterNavItem>
                        <Link>Docs</Link>
                    </PrimaryFooterNavItem>
                    <FooterNavItem>
                        <Link>Configuration</Link>
                    </FooterNavItem>
                    <FooterNavItem>
                        <Link>Static Export</Link>
                    </FooterNavItem>
                </FooterNav>
            </Col>
            <Col />
            <Col />
            <Col />
        </Container>
    </Root>
);

const FooterNav = styled.ul``;

const FooterNavItem = styled.li`
    margin-bottom: 0.25rem;
    ${Link} {
        color: #ccc;
        :hover {
            color: #fff;
        }
    }
`;

const PrimaryFooterNavItem = styled.li`
    margin-bottom: 0.75rem;
    ${Link} {
        color: #fff;
    }
`;

const Root = styled.footer`
    width: 100%;
    margin: 0 auto;
    padding: 0 0;
    background-image: linear-gradient(to bottom, #121212 0%, #323232 100%);
    color: white;
    overflow: hidden;
    padding: 2rem 0 4rem;
`;

export default Footer;
