// import React from "react";
// import PropTypes from "prop-types";
// import { StaticQuery, graphql } from "gatsby";
import Grid from "hedron";
import styled from "styled-components";

export const Container = styled(Grid.Bounds)`
    width: 800px;
    margin: 0 auto;
`;

export const Col = styled(Grid.Box)``;

export default {
    Container,
    Col,
};
