import React, { FC } from "react";
import { BlogBuilder } from "./BlogBuilder";
import bloglist from "../../editable-stuff/blog";
import { Link } from "react-router-dom";

interface BlogItem {
  title: string;
  description: string;
  image?: string;
  getBlog: () => React.ReactNode;
}

interface BlogCardProps {
  index: number;
  title: string;
  image?: string;
  description: string;
}

const Blog: FC = () => {
  return (
    <div className="container-lg mt-5 bg-blue">
      <h1 className="text-center">Blogs</h1>
      {(bloglist as BlogItem[]).map((value, index) => (
        <BlogCard
          key={index}
          title={value.title}
          description={value.description}
          index={index}
        />
      ))}
    </div>
  );
};

const BlogCard: FC<BlogCardProps> = ({ index, title, description }) => {
  return (
    <div className="m-5">
      <div className="">
        <div className="row">
          <div className="col-4 col-lg-12">
            {/* <img src={image} className="card-img" alt="..." /> */}
          </div>
          <div className="col-8 col-lg-12">
            <div className="">
              <h1 className="">{title}</h1>
              <p className="lead">{description}</p>
              <Link to={`${process.env.PUBLIC_URL}blog/${index}`}>
                Read more...{" "}
              </Link>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export { Blog, BlogBuilder };
