"use client";

import { render } from "storyblok-rich-text-react-renderer";

export const Columns = ({ blok }: any) => {
  console.log(blok);
  return (
    <div className="container-section p-container">
      {/* {blok.columns}
      {blok.fields.map((item: any) => (
        <div key={item._uid}>
          <h2>{item.title}</h2>
          <span>{render(item.content)}</span>
        </div>
      ))} */}
    </div>
  );
};
