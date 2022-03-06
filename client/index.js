import { createClient } from "contentful";

export const createContenfultClient = ({ preview = false, environment = "master" }) => {
  console.log(environment);
  return createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: preview
      ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
      : process.env.CONTENTFUL_ACCESS_TOKEN,
    environment: environment || process.env.CONTENTFUL_ENVIRONMENT_ID,
  });
};
