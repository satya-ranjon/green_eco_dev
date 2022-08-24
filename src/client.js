import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "oighxuqu",
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token:
    "skb29aSPNtYYhRQZ50TO2qK97xWp6shoDLYFIqcxcXLWJBYbJ0IoniFQIMhWGC9fNfLPdJqDHFQ6GpjsGBKkORMmnR8qelZHSLTmMSu97h7xMpGp5gkLdbLqANUyG6IMUHSsy5TmDboEWZtgXaIol3jjHUpU6uhOY1YC6uKi0ukM1JYfsUpe",
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
