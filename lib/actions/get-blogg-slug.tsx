import { getStoryblokApi } from "@storyblok/react/rsc";

export async function getBloggSlug(slug: string) {
  let sbParams = {
    version: "draft" as const,
    cv: Date.now(),
  };

  const client = getStoryblokApi();

  const data = await client.get(`cdn/stories/blogg/${slug}`, sbParams, {
    cache: "no-store",
  });

  return data.data.story;
}
