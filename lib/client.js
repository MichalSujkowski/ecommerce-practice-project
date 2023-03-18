import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';


export const client = sanityClient({
    projectId: 'c5n78fen',
    dataset: 'ecommerce',
    apiVersion: '2023-03-16',
    useCdn: true,
    token: process.env.SANITY_TOKEN,
});


const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);