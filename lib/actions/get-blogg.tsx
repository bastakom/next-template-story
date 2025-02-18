import { getStoryblokApi } from "@storyblok/react";

export async function getBlogg() {
  let sbParams = {
    version: "draft" as const,
    starts_with: "blogg",
  };

  const client = getStoryblokApi();

  const data = await client.get(`cdn/stories/`, sbParams, {
    cache: "no-store",
  });

  return data.data.stories;
}
