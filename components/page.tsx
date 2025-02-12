import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";

const page = ({ blok }: any) => (
  <div {...storyblokEditable(blok)}>
    {blok &&
      Array.isArray(blok.body) &&
      blok.body.map((nestedBlok: any, index: number) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
  </div>
);

export default page;
