
import { withBasePath } from '../lib/site-path';

export type ProjectImage = {
  src: string;
  alt: string;
  portrait?: boolean;
};

export type RetouchComparison = {
  title: string;
  width: number;
  height: number;
  before: ProjectImage;
  after: ProjectImage;
};

export type Project = {
  slug: string;
  title: string;
  label: string;
  description: string;
  details: string;
  cover?: string;
  images: ProjectImage[];
  comparisons?: RetouchComparison[];
  pdf?: string;
};

const retouchComparisons: RetouchComparison[] = [
  {
    title: 'Transformation du décor',
    width: 1000,
    height: 750,
    before: { src: withBasePath("/assets/projects/retouche/avant1.webp"), alt: 'Rue du Castro avant transformation du ciel et du décor' },
    after: { src: withBasePath("/assets/projects/retouche/apres1.webp"), alt: 'Rue du Castro avec un nouveau ciel et un décor recomposé' },
  },
  {
    title: 'Retouche portrait',
    width: 1600,
    height: 1167,
    before: { src: withBasePath("/assets/projects/retouche/avant2.webp"), alt: 'Portrait original avant retouche de la peau' },
    after: { src: withBasePath("/assets/projects/retouche/apres2.webp"), alt: 'Portrait après retouche de la peau' },
  },
  {
    title: 'Ambiance & lumière',
    width: 1024,
    height: 683,
    before: { src: withBasePath("/assets/projects/retouche/avant3.webp"), alt: 'Campagne Tom Ford Eyewear sur son fond original' },
    after: { src: withBasePath("/assets/projects/retouche/apres3.webp"), alt: 'Campagne Tom Ford Eyewear avec un nouvel arrière-plan lumineux' },
  },
];

export const projects: Project[] = [
  {
    slug: 'dap',
    title: 'DAP',
    label: 'Direction artistique',
    description:
      'Construire un univers visuel, de la recherche initiale à la mise en scène de la silhouette.',
    details:
      'Sélection d’éléments de direction artistique : intention, dessin, proportions et cohérence d’ensemble.',
    cover: withBasePath("/assets/projects/dap/dap-01.webp"),
    images: [
      { src: withBasePath("/assets/projects/dap/dap-body.png"), alt: 'Dessin technique d’un body asymétrique', portrait: true },
      { src: withBasePath("/assets/projects/dap/dap-01.webp"), alt: 'Planche de direction artistique du projet body', portrait: true },
      { src: withBasePath("/assets/projects/dap/body-01.webp"), alt: 'Recherche visuelle autour du body', portrait: true },
    ],
  },
  {
    slug: 'fiche-technique',
    title: 'FICHE TECHNIQUE',
    label: 'Développement produit',
    description:
      'Traduire une intention créative en informations précises pour construire et produire le vêtement.',
    details:
      'Fiche technique du projet tailleur : vues, détails de montage, proportions et indications nécessaires à la réalisation.',
    images: [],
    pdf: withBasePath("/assets/projects/fiche-technique/fiche-technique-tailleur.pdf"),
  },
  {
    slug: 'retouche-photo',
    title: 'RETOUCHE PHOTO',
    label: 'Image',
    description:
      'Transformer l’image par le cadrage, la correction et l’expérimentation avec les outils génératifs.',
    details:
      'Trois avant / après : transformation du décor, retouche portrait et création d’une nouvelle ambiance lumineuse.',
    cover: withBasePath("/assets/projects/retouche/avant-08.jpg"),
    images: retouchComparisons.flatMap(({ before, after }) => [before, after]),
    comparisons: retouchComparisons,
  },
  {
    slug: 'clo3d',
    title: 'CLO3D',
    label: 'Modélisme numérique',
    description:
      'Tester les volumes, les matières et les détails du vêtement grâce à la simulation 3D.',
    details:
      'Recherches de silhouettes, exercices de personnalisation et essais de matelassage réalisés dans CLO3D.',
    cover: withBasePath("/assets/projects/clo3d/projet-porto.png"),
    images: [
      { src: withBasePath("/assets/projects/clo3d/projet-porto.png"), alt: 'Silhouette CLO3D du projet Porto', portrait: true },
      { src: withBasePath("/assets/projects/clo3d/cours-04.png"), alt: 'Exercice de construction dans CLO3D' },
      { src: withBasePath("/assets/projects/clo3d/oceane-matelasser.png"), alt: 'Recherche de matelassage dans CLO3D' },
      { src: withBasePath("/assets/projects/clo3d/look-02.png"), alt: 'Deuxième proposition de silhouette CLO3D' },
      { src: withBasePath("/assets/projects/clo3d/matelasser.png"), alt: 'Détail de matière matelassée dans CLO3D' },
      { src: withBasePath("/assets/projects/clo3d/exercice-custom.png"), alt: 'Exercice de personnalisation dans CLO3D' },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
