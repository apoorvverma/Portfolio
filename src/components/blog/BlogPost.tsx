import React, { FC } from "react";
import { RouteComponentProps } from "react-router-dom";
import bloglist from "../../editable-stuff/blog";

interface BlogItem {
  title: string;
  description: string;
  image?: string;
  getBlog: () => React.ReactNode;
}

interface BlogPostParams {
  id: string;
}

const BlogPost: FC<RouteComponentProps<BlogPostParams>> = ({ match }) => {
  const { id } = match.params;
  const post = (bloglist as BlogItem[])[parseInt(id, 10)];

  return (
    <div className="container-lg mt-5">
      {post && (
        <div>
          <h1 className="display-2 text-center">{post.title}</h1>
          {post.image && (
            <img className="img-fluid mb-2" src={post.image} alt={post.title} />
          )}
          {post.getBlog()}
        </div>
      )}
      {!post && <h1 className="display-1 text-center">404 - Page not found</h1>}
    </div>
  );
};

export default BlogPost;
