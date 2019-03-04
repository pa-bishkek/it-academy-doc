import React, { Component } from "react";
import PT from "prop-types";
import styled, { createGlobalStyle } from "styled-components";
import Grid from "hedron";
import { Reset } from "styled-reset";
import Header from "./Header";
import Footer from "./Footer";
import { Container, Col } from "./Layout";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,500,500i,700,700i,900,900i&subset=cyrillic,cyrillic-ext');
    @import url('https://fonts.googleapis.com/css?family=Spectral:400,500,700&subset=cyrillic');
    body {
        font-family: 'Roboto', sans-serif;
        line-height: 1.65;
    }
`;

class Page extends Component {
    render() {
        const { sidebar } = this.props;
        return (
            <Grid.Provider
                padding="20px"
                breakpoints={{ sm: "-500", md: "501-750", lg: "+750" }}
            >
                <React.Fragment>
                    <Reset />
                    <GlobalStyle />
                    <Header />
                    <PageBody>
                        {sidebar || null}
                        <PageContent>{this.props.children}</PageContent>
                    </PageBody>
                    <Footer />
                </React.Fragment>
            </Grid.Provider>
        );
    }
}

Page.propTypes = {
    children: PT.any.isRequired,
    sidebar: PT.element,
};

const PageBody = styled(Container)`
    margin-top: 1rem;
    margin-bottom: 5rem;
`;

const PageContent = styled(Col)`
    font-family: "Spectral", serif;
`;

export default Page;
