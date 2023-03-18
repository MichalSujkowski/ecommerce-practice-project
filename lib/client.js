import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';


export const client = sanityClient({
    projectId: 'cwpu318s',
    dataset: 'production',
    apiVersion: '2023-03-16',
    useCdn: true,
    token: process.env.SANITY_TOKEN,
});