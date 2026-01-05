export interface Work {
  slug: string;
  title: string;
  year: string;
  category: string;
  description: string;
  image: string;
  featured?: boolean;
}

export const works: Work[] = [
  {
    slug: "ethereal-forms",
    title: "Ethereal Forms",
    year: "2024",
    category: "Mixed Media",
    description:
      "An exploration of light and shadow through layered textures. This piece investigates the boundaries between the physical and the intangible, using unconventional materials to create depth and movement.",
    image: "/images/work-1.jpg",
    featured: true,
  },
  {
    slug: "silent-conversations",
    title: "Silent Conversations",
    year: "2024",
    category: "Photography",
    description:
      "A series capturing moments of quiet connection in urban spaces. These images document the unspoken dialogues that occur in everyday life, frozen in time.",
    image: "/images/work-2.jpg",
  },
  {
    slug: "fragments-of-memory",
    title: "Fragments of Memory",
    year: "2023",
    category: "Digital",
    description:
      "Digital compositions that piece together visual memories into cohesive narratives. Each fragment represents a moment, a feeling, a fleeting thought preserved in pixels.",
    image: "/images/work-3.jpg",
  },
];

export function getWork(slug: string): Work | undefined {
  return works.find((w) => w.slug === slug);
}

export function getFeaturedWork(): Work | undefined {
  return works.find((w) => w.featured);
}
