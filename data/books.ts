import { featuredProjects } from './featured-projects';
import { withBasePath } from '../lib/site-path';

export const books = [
  ...featuredProjects.map((project) => ({
    title: project.title,
    cover: project.heroImage,
    pdf: project.pdf,
  })),
  {
    title: 'UNCODED',
    cover: withBasePath('/assets/images/book-oceane-lemaitre-cover.webp'),
    pdf: withBasePath('/assets/pdfs/book-oceane-lemaitre.pdf'),
  },
];
