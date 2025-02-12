import { getStoryblokApi } from "@storyblok/react/rsc";
import { redirect } from "next/navigation";

export async function getData(slug: string) {
  let sbParams = {
    version: "draft" as const,
  };

  const client = getStoryblokApi();

  const data = await client.get(`cdn/stories/${slug}`, sbParams);

  if (!data) {
    throw new Error("Not Found");
  }

  return data.data.story;
}
