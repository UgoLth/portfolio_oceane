export type ProjectImage = {
  src: string;
  alt: string;
  portrait?: boolean;
};

export type Project = {
  slug: string;
  title: string;
  label: string;
  description: string;
  details: string;
  cover?: string;
  images: ProjectImage[];
  pdf?: string;
};

export const projects: Project[] = [
  {
    slug: 'dap',
    title: 'DAP',
    label: 'Direction artistique',
    description:
      'Construire un univers visuel, de la recherche initiale à la mise en scène de la silhouette.',
    details:
      'Sélection d’éléments de direction artistique : intention, dessin, proportions et cohérence d’ensemble.',
    cover: '/assets/projects/dap/dap-01.webp',
    images: [
      { src: '/assets/projects/dap/dap-body.png', alt: 'Dessin technique d’un body asymétrique', portrait: true },
      { src: '/assets/projects/dap/dap-01.webp', alt: 'Planche de direction artistique du projet body', portrait: true },
      { src: '/assets/projects/dap/body-01.webp', alt: 'Recherche visuelle autour du body', portrait: true },
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
    pdf: '/assets/projects/fiche-technique/fiche-technique-tailleur.pdf',
  },
  {
    slug: 'retouche-photo',
    title: 'RETOUCHE PHOTO',
    label: 'Image',
    description:
      'Transformer l’image par le cadrage, la correction et l’expérimentation avec les outils génératifs.',
    details:
      'Une sélection d’images de travail utilisées comme points de départ pour des recherches de retouche et de transformation visuelle.',
    cover: '/assets/projects/retouche/avant-08.jpg',
    images: [
      { src: '/assets/projects/retouche/avant-08.jpg', alt: 'Campagne mode' },
      { src: '/assets/projects/retouche/avant-09.jpg', alt: 'Architecture et lumière', portrait: true },
      { src: '/assets/projects/retouche/avant-05.jpg', alt: 'Scène urbaine' },
      { src: '/assets/projects/retouche/arriere-plan.png', alt: 'Portrait studio' },
    ],
  },
  {
    slug: 'clo3d',
    title: 'CLO3D',
    label: 'Modélisme numérique',
    description:
      'Tester les volumes, les matières et les détails du vêtement grâce à la simulation 3D.',
    details:
      'Recherches de silhouettes, exercices de personnalisation et essais de matelassage réalisés dans CLO3D.',
    cover: '/assets/projects/clo3d/projet-porto.png',
    images: [
      { src: '/assets/projects/clo3d/projet-porto.png', alt: 'Silhouette CLO3D du projet Porto', portrait: true },
      { src: '/assets/projects/clo3d/cours-04.png', alt: 'Exercice de construction dans CLO3D' },
      { src: '/assets/projects/clo3d/oceane-matelasser.png', alt: 'Recherche de matelassage dans CLO3D' },
      { src: '/assets/projects/clo3d/look-02.png', alt: 'Deuxième proposition de silhouette CLO3D' },
      { src: '/assets/projects/clo3d/matelasser.png', alt: 'Détail de matière matelassée dans CLO3D' },
      { src: '/assets/projects/clo3d/exercice-custom.png', alt: 'Exercice de personnalisation dans CLO3D' },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
