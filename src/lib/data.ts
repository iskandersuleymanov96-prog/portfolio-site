export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  year: string;
  image: string;
  tags: string[];
  details: string;
  role: string;
  client: string;
}

export interface JournalEntry {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
}

export const projects: Project[] = [
  {
    slug: "noir-campaign",
    title: "NOIR",
    category: "AI Campaigns",
    description: "A cinematic AI-generated campaign exploring the intersection of light and shadow.",
    year: "2026",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1200&q=80",
    tags: ["AI", "Campaign", "Photography"],
    details: "NOIR is a visual exploration of contrast and emotion, blending AI-generated imagery with traditional cinematic techniques. The campaign was conceived as a meditation on the duality of presence and absence, using monochromatic palettes and stark lighting to evoke a sense of timeless elegance.",
    role: "Creative Director & AI Artist",
    client: "Personal Project",
  },
  {
    slug: "void-collection",
    title: "VOID",
    category: "Fashion Films",
    description: "A fashion film series exploring emptiness as a form of luxury.",
    year: "2025",
    image: "https://images.unsplash.com/photo-1534349762230-e1d0fce8b4e4?w=1200&q=80",
    tags: ["Film", "Fashion", "Art Direction"],
    details: "VOID reimagines the concept of luxury through the lens of negative space. Each piece in the series strips away the superfluous, leaving only the essential. The film series was shot across brutalist architectures in Berlin and Tokyo, creating a dialogue between human form and geometric precision.",
    role: "Director & Art Director",
    client: "Acne Studios",
  },
  {
    slug: "echo-frequency",
    title: "ECHO",
    category: "Music Projects",
    description: "Album artwork and visual identity for an experimental electronic record.",
    year: "2025",
    image: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=1200&q=80",
    tags: ["Music", "Visual Identity", "Design"],
    details: "ECHO is a visual identity system built for sound. The project translates audio frequencies into visual forms, creating a synesthetic experience across album artwork, merchandise, and live performance visuals. The design language uses fluid, generative patterns that respond to the music's emotional arc.",
    role: "Art Director & Visual Designer",
    client: "Independent Release",
  },
  {
    slug: "meridian-show",
    title: "MERIDIAN",
    category: "Art Direction",
    description: "Art direction for a contemporary art exhibition at the Palais de Tokyo.",
    year: "2024",
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=1200&q=80",
    tags: ["Exhibition", "Art Direction", "Installation"],
    details: "MERIDIAN brought together 12 international artists exploring the concept of borders — physical, digital, and psychological. The exhibition design used light as a spatial divider, creating rooms within rooms. Each transition space was designed as a sensory palate cleanser between distinct artistic visions.",
    role: "Art Director",
    client: "Palais de Tokyo",
  },
  {
    slug: "surface-studies",
    title: "SURFACE",
    category: "Visual Research",
    description: "An ongoing research project into material perception and digital texture.",
    year: "2024",
    image: "https://images.unsplash.com/photo-1550684376-efcbd6e3f031?w=1200&q=80",
    tags: ["Research", "Texture", "Digital Art"],
    details: "SURFACE is a visual research laboratory investigating how we perceive materiality in digital spaces. The project generates hyper-realistic textures that exist only in the digital realm, questioning the boundary between physical and virtual surfaces. Published as a monograph and exhibited at Design Miami.",
    role: "Lead Researcher",
    client: "Self-Initiated",
  },
  {
    slug: "phantom-series",
    title: "PHANTOM",
    category: "AI Campaigns",
    description: "A brand campaign using AI to create impossible architecture.",
    year: "2024",
    image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=1200&q=80",
    tags: ["AI", "Architecture", "Campaign"],
    details: "PHANTOM envisions spaces that cannot exist physically but feel emotionally real. Using advanced AI generation and careful prompt engineering, the campaign creates architectural impossibilities that maintain structural logic — arches that defy gravity, rooms that fold into themselves, light that comes from nowhere.",
    role: "Creative Director & AI Director",
    client: "The Row",
  },
];

export const journalEntries: JournalEntry[] = [
  {
    slug: "intelligence-as-empathy",
    title: "Intelligence as Empathy",
    excerpt: "On the convergence of artificial intelligence and emotional understanding — why the future of technology lies not in calculation but in compassion.",
    date: "March 2026",
    category: "Visual Culture",
  },
  {
    slug: "the-aesthetics-of-absence",
    title: "The Aesthetics of Absence",
    excerpt: "Exploring how negative space, minimalism, and restraint have become the new language of luxury in contemporary design.",
    date: "January 2026",
    category: "Art",
  },
  {
    slug: "digital-materiality",
    title: "Digital Materiality",
    excerpt: "When pixels become texture — a visual research essay on how we perceive surfaces and materials in virtual environments.",
    date: "November 2025",
    category: "Visual Research",
  },
  {
    slug: "cinema-of-architecture",
    title: "Cinema of Architecture",
    excerpt: "How brutalist spaces and geometric precision shape the emotional landscape of fashion film.",
    date: "September 2025",
    category: "Fashion",
  },
  {
    slug: "sound-as-image",
    title: "Sound as Image",
    excerpt: "Translating audio frequencies into visual forms — the synesthetic practice of album artwork design.",
    date: "July 2025",
    category: "Music",
  },
];

export const categories = [
  "All",
  "AI Campaigns",
  "Fashion Films",
  "Music Projects",
  "Art Direction",
  "Visual Research",
];

export const services = [
  {
    title: "Creative Direction",
    description: "Defining the visual and conceptual strategy for brands, campaigns, and cultural projects.",
  },
  {
    title: "AI Campaign Production",
    description: "Leveraging artificial intelligence to create imagery and narratives that transcend physical limitations.",
  },
  {
    title: "Visual Identity",
    description: "Crafting cohesive visual systems — from logos to full brand languages — that embody a vision.",
  },
  {
    title: "Content Production",
    description: "End-to-end production of photography, film, and digital content for editorial and commercial use.",
  },
  {
    title: "Art Direction",
    description: "Orchestrating the visual elements of a project to ensure a unified, compelling aesthetic.",
  },
];
