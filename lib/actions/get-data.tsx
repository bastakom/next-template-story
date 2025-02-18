import { getStoryblokApi } from "@storyblok/react/rsc";

export async function getData(slug: string) {
  let sbParams = {
    version: "draft" as const,
  };

  const client = getStoryblokApi();

  const data = await client.get(`cdn/stories/${slug}`, sbParams, {
    cache: "no-store",
  });

  return data.data.story;
}
