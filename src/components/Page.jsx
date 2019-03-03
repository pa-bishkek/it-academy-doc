import React, { Component } from "react";
import PT from "prop-types";
import styled, { createGlobalStyle } from "styled-components";
import Grid from "hedron";
import { Reset } from "styled-reset";
import Header from "./Header";
import Footer from "./Footer";
import { Container } from "./Layout";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,500,500i,700,700i,900,900i&subset=cyrillic,cyrillic-ext');
    body {
        font-family: 'Roboto', sans-serif;
        line-height: 1.65;
    }
`;

class Page extends Component {
    render() {
        const { sidebar } = this.props;
        return (
            <Grid.Provider>
                <React.Fragment>
                    <Reset />
                    <GlobalStyle />
                    <Header />
                    {sidebar && null}
                    <PageContent>{this.props.children}</PageContent>
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

const PageContent = styled(Container)`
    margin-top: 1rem;
    margin-bottom: 5rem;
`;

export default Page;
