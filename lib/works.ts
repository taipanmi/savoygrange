export interface Work {
  slug: string;
  title: string;
  year: string;
  category: string;
  description: string;
  image: string;
  featured?: boolean;
  spotify?: string;
  apple?: string;
}

export const works: Work[] = [
  {
    slug: "midnight-waves",
    title: "Midnight Waves",
    year: "2024",
    category: "Single",
    description:
      "A late-night exploration of ambient textures and driving rhythms. Midnight Waves captures the energy of city nights through layered synths and hypnotic beats.",
    image: "https://images.unsplash.com/photo-1614149162883-504ce4d13909?w=1600&q=90",
    featured: true,
  },
  {
    slug: "echoes-ep",
    title: "Echoes",
    year: "2024",
    category: "EP",
    description:
      "A four-track journey through introspective soundscapes. Echoes blends organic instrumentation with electronic production, creating a sonic diary of reflection and growth.",
    image: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=1600&q=90",
  },
  {
    slug: "first-light",
    title: "First Light",
    year: "2023",
    category: "Single",
    description:
      "The debut release marking the beginning of a new sonic chapter. First Light combines atmospheric pads with crisp percussion, setting the tone for what's to come.",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1600&q=90",
  },
];

export function getWork(slug: string): Work | undefined {
  return works.find((w) => w.slug === slug);
}

export function getFeaturedWork(): Work | undefined {
  return works.find((w) => w.featured);
}
