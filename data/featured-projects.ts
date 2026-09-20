export type FeaturedProjectImage = {
  src: string;
  alt: string;
  fit?: 'cover' | 'contain';
};

export type FeaturedProject = {
  slug: string;
  index: string;
  title: string;
  year: string;
  discipline: string;
  role: string;
  status: string;
  description: string;
  statement: string;
  designText: string;
  constructionText: string;
  designTitle?: string;
  constructionTitle?: string;
  constructionHeading?: string;
  galleryTitle?: string;
  constructionImage?: FeaturedProjectImage;
  galleryImages?: FeaturedProjectImage[];
  heroImage: string;
  pdf: string;
  images: FeaturedProjectImage[];
};

export const featuredProjects: FeaturedProject[] = [
  {
    slug: 'shooting-photo-1',
    index: '01',
    title: 'SHOOTING UNCODED',
    year: '2026',
    discipline: 'Direction artistique · Shooting · Retouche',
    role: 'Concept visuel, stylisme et image',
    status: 'Série photographique',
    description: 'Une vision du nouveau pirate : une silhouette upcyclée, brute et affirmée, photographiée entre végétation, eau et architecture urbaine.',
    statement: 'SHOOTING UNCODED développe une atmosphère visuelle où le stylisme, le cadrage et la lumière construisent ensemble le récit de l’image.',
    designText: 'La recherche définit les références, l’ambiance, les poses et la relation entre la silhouette et son environnement.',
    constructionText: 'La direction du shooting et la retouche prolongent cette intention par le rythme des cadrages, la couleur et les contrastes.',
    designTitle: 'Direction artistique & image',
    constructionTitle: 'Shooting & retouche',
    heroImage: '/assets/images/shooting-photo-1-2.jpg',
    pdf: '/assets/pdfs/shooting-photo-1.pdf',
    images: [
      { src: '/assets/images/shooting-photo-1-2.jpg', alt: 'Image principale de Shooting Uncoded' },
    ],
    galleryImages: [
      { src: '/assets/images/shooting-photo-1-2.jpg', alt: 'Portrait en contre-plongée sous le ciel' },
      { src: '/assets/images/shooting-photo-1-22.jpg', alt: 'Portrait au cœur de la végétation' },
      { src: '/assets/images/shooting-photo-1-13.jpg', alt: 'Portrait en contre-plongée sous la verrière' },
      { src: '/assets/images/shooting-photo-1-3.jpg', alt: 'Silhouette en contre-plongée' },
    ],
  },
  {
    slug: 'shooting-photo-2',
    index: '02',
    title: 'SHOOTING',
    year: '2026',
    discipline: 'Direction artistique · Shooting · Retouche',
    role: 'Concept visuel, stylisme et image',
    status: 'Série photographique · Euralille',
    description: 'À Euralille, un tailleur structuré capte le mouvement, la lumière et les regards dans un flux urbain insaisissable.',
    statement: 'SHOOTING explore la persistance rétinienne : un tailleur structuré traverse Euralille et laisse derrière lui un flux visuel, comme une empreinte fugace dans la ville.',
    designText: 'Le flou de bougé et les traînées lumineuses matérialisent une aura magnétique autour de la silhouette. L’image saisit ce qui attire le regard juste avant de disparaître.',
    constructionText: 'Le tailleur aux lignes affirmées, associé aux bijoux argentés et aux bottines noires, se détache de l’architecture métallique et du mouvement des passants.',
    designTitle: 'Mouvement & persistance',
    constructionTitle: 'Silhouette & décor',
    heroImage: '/assets/images/shooting-photo-2-featured.webp',
    pdf: '/assets/pdfs/shooting-photo-2.pdf',
    images: [
      { src: '/assets/images/shooting-photo-2-featured.webp', alt: 'Image principale de Shooting' },
    ],
      galleryImages: [
        { src: '/assets/images/shooting-photo-2-0217.jpg', alt: 'Silhouette dans le flux des passants à Euralille' },
        { src: '/assets/images/shooting-photo-2-0239.jpg', alt: 'Tailleur photographié en mouvement dans la ville' },
        { src: '/assets/images/shooting-photo-2-0028.jpg', alt: 'Silhouette structurée dans l’architecture urbaine' },
        { src: '/assets/images/shooting-photo-2-0097.jpg', alt: 'Vue plongeante de la silhouette dans les escaliers' },
      ],
  },
  {
    slug: 'interface',
    index: '03',
    title: 'INTERFACE',
    year: '2026',
    discipline: 'Stylisme · Modélisme · Image',
    role: 'Concept, collection et identité visuelle',
    status: 'Collection de 10 silhouettes',
    description: 'Une collection pensée comme une interface entre l’humain et le vivant, entre protection urbaine et reconnexion sensorielle.',
    statement: 'INTERFACE imagine des vêtements cocons pour les « Urban Nomads » : des silhouettes enveloppantes qui reconnectent le rythme urbain à la douceur du vivant.',
    designText: 'Le projet associe bien-être, biomimétisme et ethnobotanique. La fleur guide l’univers visuel par ses formes, ses couleurs et les sensations d’apaisement qu’elle évoque.',
    constructionText: 'Les volumes protecteurs s’inspirent du vestiaire militaire et de la nature. Superpositions, découpes organiques et détails floraux construisent une collection fonctionnelle et sensorielle.',
    designTitle: 'Univers & matières',
    constructionTitle: 'Collection & construction',
    constructionHeading: 'Du vivant au vêtement.',
    galleryTitle: 'Silhouettes & détails',
    heroImage: '/assets/images/interface-book-cover.webp',
    pdf: '/assets/pdfs/interface.pdf',
    images: [
      { src: '/assets/images/interface-web/introduction.webp', alt: 'Introduction au concept de bien-être et de protection', fit: 'contain' },
      { src: '/assets/images/interface-web/identity.webp', alt: 'Identité visuelle et logo du projet Interface', fit: 'contain' },
      { src: '/assets/images/interface-web/silhouettes.webp', alt: 'Développement des silhouettes de la collection', fit: 'contain' },
    ],
    constructionImage: { src: '/assets/images/interface-web/look-01.webp', alt: 'Premier look et recherche de volume', fit: 'contain' },
    galleryImages: [
      { src: '/assets/images/interface-web/moodboard.webp', alt: 'Gamme colorée et moodboard biophilie', fit: 'contain' },
      { src: '/assets/images/interface-web/look-01.webp', alt: 'Look 01, bomber protecteur', fit: 'contain' },
      { src: '/assets/images/interface-web/look-06.webp', alt: 'Silhouette inspirée de l’orchidée', fit: 'contain' },
      { src: '/assets/images/interface-web/illustration.webp', alt: 'Illustration de la collection Interface', fit: 'contain' },
      { src: '/assets/images/interface-web/research-materials.webp', alt: 'Recherche autour de la nature et sélection des matières', fit: 'contain' },
      { src: '/assets/images/interface-web/look-08.webp', alt: 'Look 08 et volumes enveloppants', fit: 'contain' },
      { src: '/assets/images/interface-web/look-10-technical.webp', alt: 'Look 10 et dessin technique', fit: 'contain' },
      { src: '/assets/images/interface-web/collection-plan.webp', alt: 'Plan de collection, coloris et matières', fit: 'contain' },
    ],
  },
  {
    slug: 'magazine',
    index: '04',
    title: 'MAGAZINE',
    year: '2026',
    discipline: 'Direction artistique · Édition · Stylisme',
    role: 'Recherche, narration visuelle et mise en page',
    status: 'Magazine de collection · 76 pages',
    description: 'Une exploration entre nature, mystère et création textile, guidée par les insectes et trois orchidées rares.',
    statement: 'MAGAZINE invite à voir autrement : ralentir, observer et redonner de la valeur aux détails invisibles à travers une collection inspirée du vivant.',
    designText: 'La libellule apporte légèreté et transparence, le papillon ses motifs et sa symétrie, le scarabée ses reflets et sa structure. Leurs anatomies nourrissent les matières, les volumes et les effets de lumière.',
    constructionText: 'L’orchidée fantôme, l’orchidée noire et l’orchidée de Rothschild prolongent cette recherche par le biomimétisme. Les silhouettes se découvrent progressivement, entre apparition, rareté et transformation.',
    designTitle: 'Recherche & narration',
    constructionTitle: 'Collection & biomimétisme',
    galleryTitle: 'Voir autrement',
    heroImage: '/assets/images/Magazine/img1.jpg',
    pdf: '/assets/pdfs/magazine.pdf',
    images: [
      { src: '/assets/images/Magazine/img1.jpg', alt: 'Ouverture — voir autrement', fit: 'contain' },
      { src: '/assets/images/Magazine/img37.jpg', alt: 'Silhouette inspirée des ailes', fit: 'contain' },
      { src: '/assets/images/Magazine/img251.jpg', alt: 'Recherche visuelle Annihilation', fit: 'contain' },
    ],
    galleryImages: [
      { src: '/assets/images/Magazine/img1.jpg', alt: 'Ouverture — voir autrement' },
      { src: '/assets/images/Magazine/img172.jpg', alt: 'Matière irisée portée' },
      { src: '/assets/images/Magazine/img280.jpg', alt: 'Transparence et lumière' },
      { src: '/assets/images/Magazine/img304.jpg', alt: 'Orchidée fantôme — silhouette finale' },
    ],
  },
];

export function getFeaturedProject(slug: string) {
  return featuredProjects.find((project) => project.slug === slug);
}
