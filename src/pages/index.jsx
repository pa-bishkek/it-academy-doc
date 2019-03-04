import React from "react";
import PT from "prop-types";
import { graphql } from "gatsby";

import { Page, SEO, Sidebar } from "../components";
import { Link } from "../components/atoms";

const IndexPage = ({ data }) => {
    const { edges: posts } = data.allMarkdownRemark;
    return (
        <Page
            sidebar={
                <Sidebar>
                    <Sidebar.SidebarNav>
                        {posts
                            .filter(
                                post => post.node.frontmatter.title.length > 0,
                            )
                            .map(({ node: post }) => {
                                return (
                                    <Sidebar.SidebarNavItem key={post.id}>
                                        <Link to={post.frontmatter.path}>
                                            {post.frontmatter.title}
                                        </Link>
                                    </Sidebar.SidebarNavItem>
                                );
                            })}
                    </Sidebar.SidebarNav>
                </Sidebar>
            }
        >
            <SEO title="It-Academy Bishkek" keywords={["Документация"]} />
        </Page>
    );
};

IndexPage.propTypes = {
    data: PT.any,
};

export default IndexPage;

export const pageQuery = graphql`
    query IndexQuery {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
            edges {
                node {
                    excerpt(pruneLength: 250)
                    id
                    frontmatter {
                        title
                        date(formatString: "MMMM DD, YYYY")
                        path
                    }
                }
            }
        }
    }
`;
