import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

// Create and export the client
export const client1 = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID_1,
  dataset: import.meta.env.VITE_SANITY_DATASET_1,
  apiVersion: "2024-03-20",
  useCdn: true,
});

export const client2 = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID_2,
  dataset: import.meta.env.VITE_SANITY_DATASET_2,
  apiVersion: "2024-03-20",
  useCdn: true,
});


// Create the image URL builder with the client
const builder1 = imageUrlBuilder(client1);
const builder2 = imageUrlBuilder(client2);

export function urlForClient1(source: any) {
  return builder1.image(source);
}

export function urlForClient2(source: any) {
  return builder2.image(source);
}

