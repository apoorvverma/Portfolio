import React, { Fragment, ReactNode } from "react";

interface BlogBuilderProps {
  title: string;
  image?: string;
  description: string;
}

class BlogBuilder {
  title: string;
  image?: string;
  description: string;
  list: ReactNode[] = [];

  constructor({ title, image, description }: BlogBuilderProps) {
    this.title = title;
    this.image = image;
    this.description = description;
  }

  addParagraph = (text: string): BlogBuilder => {
    this.list.push(
      <p key={this.list.length} className="lead">
        {text}
      </p>
    );
    return this;
  };

  addHeading = (text: string): BlogBuilder => {
    this.list.push(
      <Fragment key={this.list.length}>
        <h1 className="">{text}</h1>
        <hr />
      </Fragment>
    );
    return this;
  };

  getBlog = (): ReactNode => {
    return <div className="container-lg">{this.list}</div>;
  };
}

export { BlogBuilder };
