// All portfolio content lives here — easy to edit/replace later.

export const profile = {
  name: "Muhammad Afif",
  initials: "AFIF.",
  logo: "https://customer-assets-m6fa6gv7.emergentagent.net/job_afif-multimedia/artifacts/ncoxcz2d_-bkp4CKEr8l78G2E0aDDjkLtyyx5yjo53sPhD5eM4grcN_ETyOhTdnvCTA4ugLHtpB-RgZjNe-8YpmoKxzewP1aIt3QeVRCeVRIzce2zU8u4GqjeFGAsVQaWEdIwDiiVdWDo6G35lkfIDLp4Mw-QP_F6njYt7AKVoTI3fBDrKBrThk_lA6N33EJ93bLWfFS2.jfif",
  role: "Interactive Multimedia Student",
  statement:
    "Creating visual experiences through design, motion and interactive media.",
  description:
    "An Interactive Multimedia student passionate about graphic design, video editing, motion graphics and immersive digital experiences.",
  email: "afifadam10@gmail.com",
  linkedin: "https://www.linkedin.com/in/muhd-afif-768978227",
  linkedinLabel: "linkedin.com/in/muhd-afif",
  location: "Kuala Lumpur, Malaysia",
  resumeUrl:
    "https://customer-assets-m6fa6gv7.emergentagent.net/job_afif-multimedia/artifacts/of2mrmzh_Resume%20%28MUHAMMAD%20AFIF%20BIN%20AZHAR%29.pdf",
  portrait:
    "https://customer-assets-m6fa6gv7.emergentagent.net/job_afif-multimedia/artifacts/86aottn3_WhatsApp%20Image%202026-07-31%20at%209.14.55%20AM.jpeg",
  heroVisual:
    "https://images.pexels.com/photos/29652327/pexels-photo-29652327.jpeg?auto=compress&cs=srgb&dpr=2&h=1400&w=1000",
};

export const stats = [
  { value: "06+", label: "Selected Projects" },
  { value: "05+", label: "Creative Tools" },
  { value: "01", label: "Multimedia Student" },
];

export const about = {
  title: "About Me",
  paragraphs: [
    "I'm Muhammad Afif, an Interactive Multimedia student who lives at the intersection of visual communication and technology. My work spans digital design, video production and interactive experiences.",
    "I care about clarity, rhythm and craft — whether that's a 360° documentary, an augmented reality book, or a single carefully composed poster. I'm driven by the challenge of turning ideas into experiences people can feel.",
  ],
};

export const projects = [
  {
    id: "muar-river-cruise",
    index: "01",
    title: "Muar River Cruise",
    category: "Interactive Documentary / AR / 360° Video",
    year: "2025",
    description:
      "An interactive multimedia documentary promoting Muar's cultural heritage and tourism through drone cinematography, 360° video and augmented reality.",
    image:
      "https://images.unsplash.com/photo-1785420668786-8cd760202cb0?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600",
    overview:
      "Muar River Cruise is an immersive documentary experience that invites viewers to explore the cultural heritage along Malaysia's Muar River. Combining aerial cinematography, spherical 360° footage and layered AR annotations, it reframes a traditional tourism film as something you can step inside.",
    objective:
      "Promote Muar's heritage and tourism by transforming passive documentary viewing into an interactive, explorable journey.",
    role: "Concept, drone cinematography, 360° capture, editing and AR integration.",
    tools: ["Adobe Premiere Pro", "Adobe After Effects", "Unity", "360° Camera", "Drone"],
    process:
      "Started with location scouting and a shot list along the river. Captured drone and 360° footage across golden-hour sessions, then edited a cinematic cut and overlaid AR points of interest that surface historical context as viewers navigate the scene.",
    outcome:
      "A cohesive interactive documentary that reimagines regional tourism content — merging film, spatial media and AR into one guided experience.",
    gallery: [
      "https://images.unsplash.com/photo-1785420668786-8cd760202cb0?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600",
      "https://images.unsplash.com/photo-1682897207869-567469e1cb1a?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600",
      "https://images.pexels.com/photos/7519263/pexels-photo-7519263.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1400",
    ],
  },
  {
    id: "discovering-insects",
    index: "02",
    title: "Discovering Insects",
    category: "AR / Interactive Children's Book",
    year: "2024",
    description:
      "An interactive AR children's book designed to introduce children to insects through animated digital experiences.",
    image:
      "https://images.unsplash.com/photo-1676668078714-4ed10b15e882?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600",
    overview:
      "Discovering Insects turns the pages of a printed children's book into a launchpad for animated AR creatures. Point a device at an illustration and the insect comes alive — moving, buzzing and explaining itself to young readers.",
    objective:
      "Make early science education playful and memorable by pairing tactile print with responsive digital animation.",
    role: "Illustration direction, 3D/animation, AR marker design and interaction flow.",
    tools: ["Unity", "Adobe Illustrator", "Adobe Photoshop", "Adobe After Effects"],
    process:
      "Designed printable illustrations as AR markers, modelled and animated each insect, then wired up an intuitive tap-to-learn interaction so children can explore at their own pace.",
    outcome:
      "A hybrid print + AR learning tool that makes discovering insects delightful and interactive for children.",
    gallery: [
      "https://images.unsplash.com/photo-1676668078714-4ed10b15e882?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600",
      "https://images.pexels.com/photos/38839922/pexels-photo-38839922.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1400",
      "https://images.pexels.com/photos/760031/pexels-photo-760031.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1400",
    ],
  },
  {
    id: "ar-cooking-guide",
    index: "03",
    title: "AR Cooking Guide",
    category: "Augmented Reality / Interactive Media",
    year: "2024",
    description:
      "An AR-based cooking guide combining physical recipe cards with interactive digital content.",
    image:
      "https://images.unsplash.com/photo-1621494547944-5ddbc84514b2?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600",
    overview:
      "AR Cooking Guide bridges a set of physical recipe cards with step-by-step interactive content. Scanning a card reveals timed instructions, ingredient breakdowns and short technique clips layered over the real world.",
    objective:
      "Reduce friction in the kitchen by delivering guidance exactly where and when it's needed — hands-free and in context.",
    role: "UX flow, AR content design, motion graphics and editing.",
    tools: ["Unity", "Adobe Premiere Pro", "Adobe After Effects", "Figma"],
    process:
      "Mapped a cooking journey into discrete steps, designed printed cards as triggers, and produced concise motion clips that appear as overlays to guide each stage of the recipe.",
    outcome:
      "An engaging AR utility that makes following a recipe feel guided, modern and effortless.",
    gallery: [
      "https://images.unsplash.com/photo-1621494547944-5ddbc84514b2?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600",
      "https://images.unsplash.com/photo-1623092242739-5a382879cec9?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600",
      "https://images.pexels.com/photos/12557546/pexels-photo-12557546.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1400",
    ],
  },
  {
    id: "nacho-macho",
    index: "04",
    title: "Nacho Macho",
    category: "Branding / Marketing / Business",
    year: "2023",
    description:
      "A student-led food and beverage brand developed with visual branding, promotional content and social media marketing.",
    image:
      "https://images.pexels.com/photos/12557546/pexels-photo-12557546.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1000&w=1600",
    overview:
      "Nacho Macho is a complete brand identity for a student-run food and beverage venture — from logo and packaging to promotional campaigns and a social presence designed to stand out in a crowded feed.",
    objective:
      "Build a bold, memorable brand and drive engagement through consistent visual identity and marketing content.",
    role: "Brand identity, packaging, social content and campaign design.",
    tools: ["Adobe Illustrator", "Adobe Photoshop", "Canva", "Figma"],
    process:
      "Developed a distinctive logo and colour system, applied it across packaging and menus, then produced a run of promotional posts and short-form videos tuned for social platforms.",
    outcome:
      "A cohesive, appetising brand system that gave the venture a confident, professional presence.",
    gallery: [
      "https://images.pexels.com/photos/12557546/pexels-photo-12557546.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1000&w=1600",
      "https://images.pexels.com/photos/34353943/pexels-photo-34353943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1400",
    ],
  },
  {
    id: "travel-magazine",
    index: "05",
    title: "Travel Magazine",
    category: "Editorial Design / Layout",
    year: "2023",
    description:
      "A 30-page travel magazine project focused on editorial layout, typography, photography and visual storytelling.",
    image:
      "https://images.pexels.com/photos/8084481/pexels-photo-8084481.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1000&w=1600",
    overview:
      "A 30-page travel magazine built from the ground up — establishing a grid, type system and photographic language that carries a reader through destinations with rhythm and pace.",
    objective:
      "Demonstrate command of editorial design: hierarchy, typography, white space and long-form visual storytelling.",
    role: "Art direction, layout, typography and image treatment.",
    tools: ["Adobe InDesign", "Adobe Photoshop", "Adobe Illustrator"],
    process:
      "Defined a flexible baseline grid and typographic scale, curated photography, and composed spreads that balance imagery, pull quotes and body copy across the full 30 pages.",
    outcome:
      "A polished, print-ready magazine that reads with the confidence of a professional publication.",
    gallery: [
      "https://images.pexels.com/photos/8084481/pexels-photo-8084481.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1000&w=1600",
      "https://images.pexels.com/photos/23436817/pexels-photo-23436817.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1400",
    ],
  },
  {
    id: "poster-design",
    index: "06",
    title: "Poster Design",
    category: "Graphic Design",
    year: "2022",
    description:
      "A collection of promotional poster experiments created to explore composition, typography, imagery and visual hierarchy.",
    image:
      "https://images.unsplash.com/photo-1669909625629-c341fa2d2822?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600",
    overview:
      "A series of poster studies pushing composition, type and imagery in different directions — a sandbox for developing a personal graphic voice.",
    objective:
      "Experiment freely with visual hierarchy, contrast and typographic expression across a range of subjects.",
    role: "Concept, art direction and design across the full series.",
    tools: ["Adobe Photoshop", "Adobe Illustrator", "Figma"],
    process:
      "Explored multiple layouts per brief, iterated on type pairings and grids, and refined each poster toward a single confident visual idea.",
    outcome:
      "A versatile poster collection showing range, restraint and a strong sense of composition.",
    gallery: [
      "https://images.unsplash.com/photo-1669909625629-c341fa2d2822?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600",
      "https://images.pexels.com/photos/11141530/pexels-photo-11141530.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1400",
    ],
  },
];

export const skills = [
  {
    category: "Design",
    items: ["Graphic Design", "Poster Design", "Editorial Layout", "Visual Composition", "Typography"],
  },
  {
    category: "Video",
    items: ["Video Editing", "Cinematic Editing", "Motion Graphics", "Visual Effects"],
  },
  {
    category: "Interactive",
    items: ["Augmented Reality", "360° Media", "Unity", "Interactive Multimedia"],
  },
];

export const software = [
  "Adobe Photoshop",
  "Adobe Illustrator",
  "Adobe Premiere Pro",
  "Adobe After Effects",
  "Figma",
  "Unity",
  "InDesign",
  "Canva",
];

export const education = [
  {
    degree: "Bachelor of Multimedia Technology (Hons.) — Interactive Multimedia Design",
    school: "Universiti Kuala Lumpur (MIIT)",
    period: "Present",
    description:
      "Studying interactive multimedia with a focus on digital design, video production, interactive media and emerging technologies — building a foundation that spans both creative craft and technical execution.",
  },
  {
    degree: "Diploma in Multimedia",
    school: "Kolej Poly-Tech MARA",
    period: "Completed",
    description:
      "Built core multimedia skills across graphic design, video editing and content creation using the Adobe Creative Suite, Canva and CapCut.",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const marqueeWords = [
  "Creative Design",
  "Motion Graphics",
  "Interactive Media",
  "Augmented Reality",
  "Video Editing",
  "Visual Storytelling",
];
