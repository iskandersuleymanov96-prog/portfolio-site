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

export const projects: Project[] = [
  {
    slug: "noir-campaign",
    title: "NOIR",
    category: "AI Campaigns",
    description: "A cinematic AI-generated campaign exploring the intersection of light and shadow.",
    year: "2026",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&q=80",
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
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1200&q=80",
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
    image: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?w=1200&q=80",
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
    image: "https://images.unsplash.com/photo-1549490349-8643362247b5?w=1200&q=80",
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
    image: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=1200&q=80",
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
    description: "Defining the visual and conceptual strategy for brands, campaigns, and cultural projects. From initial concept to final execution — building cohesive visual narratives that resonate.",
  },
  {
    title: "AI Filmmaking",
    description: "Leveraging artificial intelligence to create imagery and narratives that transcend physical limitations. Pushing the boundaries of what's possible in visual storytelling.",
  },
  {
    title: "Visual Research",
    description: "Investigating how we perceive materiality, texture, and form in digital spaces. Publishing findings as monographs, exhibitions, and applied visual systems.",
  },
  {
    title: "Art Direction",
    description: "Orchestrating the visual elements of a project to ensure a unified, compelling aesthetic. Every frame, every surface, every shadow — considered.",
  },
  {
    title: "Music & Sound",
    description: "Translating audio frequencies into visual forms. Album artwork, live performance visuals, and synesthetic design systems that bridge sound and image.",
  },
  {
    title: "Visual Identity",
    description: "Crafting cohesive visual systems — from logos to full brand languages — that embody a vision. Restraint, craft, intention.",
  },
];
