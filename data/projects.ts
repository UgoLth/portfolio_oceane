
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

export type TechnicalDocument = {
  title: string;
  topics: string[];
  image: ProjectImage;
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
  documents?: TechnicalDocument[];
  pdf?: string;
};

const technicalDocuments: TechnicalDocument[] = [
  {
    title: 'Pantalon',
    topics: ['Volumes', 'Matières', 'Construction'],
    image: { src: withBasePath('/assets/projects/fiche-technique/fiche-book-01.webp'), alt: 'Fiche technique du pantalon à volume froncé' },
  },
  {
    title: 'Bomber',
    topics: ['Volumes', 'Matières', 'Finitions'],
    image: { src: withBasePath('/assets/projects/fiche-technique/fiche-book-02.webp'), alt: 'Fiche technique du bomber oversize et de ses manches froncées' },
  },
  {
    title: 'Body',
    topics: ['Découpes', 'Matières', 'Assemblage'],
    image: { src: withBasePath('/assets/projects/fiche-technique/fiche-book-03.webp'), alt: 'Fiche technique du body à manches longues et découpes froncées' },
  },
  {
    title: 'Tailleur',
    topics: ['Construction', 'Matières', 'Finitions'],
    image: { src: withBasePath('/assets/projects/fiche-technique/fiche-tailleur.webp'), alt: 'Fiche technique de la veste tailleur croisée' },
  },
  {
    title: 'Plan de collection',
    topics: ['Silhouettes', 'Coloris', 'Matières'],
    image: { src: withBasePath('/assets/projects/fiche-technique/plan-de-collection.webp'), alt: 'Plan de collection Interface avec silhouettes, coloris et matières' },
  },
];

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
      'Fiches techniques du pantalon, du bomber, du body et du tailleur, accompagnées du plan de collection : vues, matières, construction et finitions.',
    cover: technicalDocuments[0].image.src,
    images: technicalDocuments.map(({ image }) => image),
    documents: technicalDocuments,
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
  {
    slug: 'modelisme',
    title: 'MODÉLISME',
    label: 'Patronage & construction',
    description:
      'Du patron au vêtement, construire la silhouette par le travail des volumes, des découpes et des détails.',
    details:
      'Recherches sur mannequin, patronage, toiles de tailleur et réalisations de vestes : une sélection de pièces et d’étapes de construction.',
    cover: withBasePath('/assets/projects/modelisme/modelisme-01.webp'),
    images: [
      { src: withBasePath('/assets/projects/modelisme/modelisme-01.webp'), alt: 'Bomber bicolore sur mannequin', portrait: true },
      { src: withBasePath('/assets/projects/modelisme/modelisme-02.webp'), alt: 'Bomber — détail de la manche et de la poche', portrait: true },
      { src: withBasePath('/assets/projects/modelisme/modelisme-04.webp'), alt: 'Veste texturée — vue de face', portrait: true },
      { src: withBasePath('/assets/projects/modelisme/modelisme-03.webp'), alt: 'Veste texturée — détail de la manche', portrait: true },
      { src: withBasePath('/assets/projects/modelisme/modelisme-05.webp'), alt: 'Tailleur — recherche de patronage à plat', portrait: true },
      { src: withBasePath('/assets/projects/modelisme/modelisme-06.webp'), alt: 'Tailleur — toile sur mannequin', portrait: true },
      { src: withBasePath('/assets/projects/modelisme/modelisme-07.webp'), alt: 'Tailleur — placement des découpes et des poches', portrait: true },
      { src: withBasePath('/assets/projects/modelisme/modelisme-08.webp'), alt: 'Tailleur — ajustement du revers sur la toile', portrait: true },
      { src: withBasePath('/assets/projects/modelisme/modelisme-09.webp'), alt: 'Tailleur — vue de profil et construction de l’épaule', portrait: true },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
