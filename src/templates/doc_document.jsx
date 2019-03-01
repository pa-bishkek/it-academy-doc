import React from "react";
import PT from "prop-types";
import rehypeReact from "rehype-react";
import { graphql } from "gatsby";

import { Layout } from "../components";

const renderAst = new rehypeReact({
    createElement: React.createElement
}).Compiler;

const PostTemplate = ({ data }) => {
    const { markdownRemark } = data;
    return (
        <Layout>
            <div>
                <h1>{markdownRemark.frontmatter.title}</h1>
                <div className="body">{renderAst(markdownRemark.htmlAst)}</div>
            </div>
        </Layout>
    );
};
PostTemplate.propTypes = {
    data: PT.any
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
    }
`;

export default PostTemplate;
