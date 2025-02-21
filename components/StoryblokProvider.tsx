"use client";
import { storyblokInit } from "@storyblok/react/rsc";
import { PropsWithChildren } from "react";
import page from "./page";
import { HeroSection } from "./storyblok/hero-section";
import { ImageSection } from "./storyblok/image-section";
import { Space } from "./storyblok/space-section";
import { CTA } from "./storyblok/cta-section";
import { Columns } from "./storyblok/columns-section";
import { ContactForm } from "./ui/form/contact-form";
import { CardColumns } from "./storyblok/card-columns-section";

storyblokInit({
  components: {
    page: page,
    hero: HeroSection,
    image_text: ImageSection,
    space: Space,
    CTA: CTA,
    columns: Columns,
    form: ContactForm,
    card_columns: CardColumns
  },

  enableFallbackComponent: true,
});

export const StoryblokProvider = ({ children }: PropsWithChildren) => {
  return <>{children}</>;
};
