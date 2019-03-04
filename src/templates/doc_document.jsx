import React from "react";
import PT from "prop-types";
import rehypeReact from "rehype-react";
import { graphql } from "gatsby";

import { Page, Sidebar } from "../components";
import { Link } from "../components/atoms";

const renderAst = new rehypeReact({
    createElement: React.createElement,
}).Compiler;

const PostTemplate = ({ data }) => {
    const {
        markdownRemark,
        allMarkdownRemark: { edges: posts },
    } = data;
    return (
        <Page
            sidebar={
                <Sidebar sm={{ width: "33%" }}>
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
            <div>
                <h1>{markdownRemark.frontmatter.title}</h1>
                <div className="body">{renderAst(markdownRemark.htmlAst)}</div>
            </div>
        </Page>
    );
};
PostTemplate.propTypes = {
    data: PT.any,
};

export const pageQuery = graphql`
    query BlogPostByPath($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            htmlAst
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                path
                title
            }
        }
        allMarkdownRemark {
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

export default PostTemplate;
