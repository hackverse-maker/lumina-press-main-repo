export interface Book {
  id: string;
  title: string;
  subtitle?: string;
  author: string;
  publishDate: string;
  genre: string;
  description: string;
  benefits?: string[];
  image: string;
  featured?: boolean;
  gallery?: string[];
  sections?: {
    title: string;
    content: string[];
  }[];
}

export interface Article {
  title: string;
  thumb: string;
  author: string;
  publishDate: string;
  readTime: string;
  preview: string;
}

export interface TechItem {
  title: string;
  description: string;
  image?: string;
  icon?: string;
}

export const books: Book[] = [
  {
    id: "self-as-witness",
    title: "THE SELF AS WITNESS",
    subtitle: "Exploring How the Self Becomes Both Subject and Suspect in Its Own Gaze",
    author: "Raza",
    genre: "Non-Fiction",
    publishDate: "2026",
    description: "The Self as Witness explores the timeless struggle for self-mastery—the internal battle that has defined the human condition across history. Drawing from the wisdom of great thinkers, it distills profound philosophies into a clear, practical framework. Rather than remaining abstract, this book transforms ancient insight into actionable discipline, guiding you to apply self-awareness and control in your everyday life.",
    benefits: [
      "Recognition of the Inner Adversary",
      "Deep Self-Awareness and Insight",
      "A Structured Strategy for Inner Mastery"
    ],
    image: "/images/books/self-as-witness-clean.png",
    featured: true,
    gallery: [
      "/images/books/self-as-witness-clean.png",
      "/images/books/self-as-witness-perspective.png",
      "/images/books/self-as-witness-desk.png"
    ]
  },
  {
    id: "subtle-art",
    title: "The Subtle Art of Not Giving a F*ck",
    author: "Mark Manson",
    publishDate: "2016",
    genre: "Self-Help",
    description: "The mega bestseller. The self-help book for people who hate self-help books. The Subtle Art of Not Giving a F*ck is all about self-improvement not through avoiding problems or always being happy, but rather through improving upon problems and learning to accept the occasional unhappiness.",
    image: "/images/books/subtle-art.png"
  },
  {
    id: "everything-is-fucked",
    title: "Everything Is F*cked: A Book About Hope",
    author: "Mark Manson",
    publishDate: "2019",
    genre: "Philosophy / Psychology",
    description: "In Everything Is F*cked, Mark Manson turns his gaze from the inevitable flaws within each individual self to the endless calamities taking place in the world around us. Drawing on mountains of psychological research, as well as the timeless wisdom of philosophers such as Plato and Nietzsche.",
    image: "/images/books/everything-is-fucked.png"
  },
  {
    id: "will",
    title: "Will",
    author: "Will Smith & Mark Manson",
    publishDate: "2021",
    genre: "Memoir",
    description: "Will Smith opens up fully in a brave and inspiring book, co-authored by Mark Manson, that traces his learning curve to a place where outer success, inner happiness, and human connection align. This memoir is the product of a profound journey of self-knowledge.",
    image: "/images/books/will.png"
  },
  {
    id: "models",
    title: "Models: Attract Women Through Honesty",
    author: "Mark Manson",
    publishDate: "2011",
    genre: "Self-Help",
    description: "Models is a book on becoming an attractive man that’s based not on tricks, tactics, games or techniques, but on self-development. Its goal is to create powerful connections with women instead of trying to impress them.",
    image: "/images/books/models.png"
  },
  {
    id: "love-is-not-enough",
    title: "Love Is Not Enough",
    author: "Mark Manson",
    publishDate: "2020",
    genre: "Relationships",
    description: "Follow the stories of five people brave enough to sit down with Mark Manson and air out their relationship problems. Wade into heavy topics like trauma, abuse, sexuality, and loss to uncover universal truths about healthy relationships.",
    image: "/images/books/love-is-not-enough.png"
  },
  {
    id: "subtle-art-journal",
    title: "The Subtle Art of Not Giving a F*ck Journal",
    author: "Mark Manson",
    publishDate: "2022",
    genre: "Self-Help / Journal",
    description: "The Subtle Art Journal is chock full of hundreds of actionable prompts and writing exercises to help you get all your fucks in a row. Start applying the lessons from the book and watch your garden of 'no fucks given' grow.",
    image: "/images/books/subtle-art-journal.png"
  },
  {
    id: "cyber-cable",
    title: "Twelve Lords Cyber Cable",
    author: "Twelve Lords",
    publishDate: "2026",
    genre: "Security Hardware",
    description: "Secure Charging. Controlled Data. Total Protection.",
    image: "/images/cyber-cable-hero.jpg",
    benefits: [
      "Hardware-level data isolation",
      "60W Fast Charging",
      "HID Injection Protection"
    ]
  }
];

export const articles: Article[] = [
  {
    title: "The Quiet Craft of Writing Every Day",
    thumb: "/images/articles/writing.jpg",
    author: "Maya Aldrin",
    publishDate: "Apr 12, 2026",
    readTime: "6 min read",
    preview: "Small daily rituals that turn writing from a chore into a craft you'll never want to stop refining."
  },
  {
    title: "Why Edge Computing Will Reshape The Web",
    thumb: "/images/articles/tech.jpg",
    author: "Daniel Cho",
    publishDate: "Apr 09, 2026",
    readTime: "9 min read",
    preview: "How moving compute closer to users is rewriting the rules of performance, privacy, and product design."
  },
  {
    title: "How Reading Slowly Changes Your Mind",
    thumb: "/images/articles/knowledge.jpg",
    author: "Iris Bennett",
    publishDate: "Apr 02, 2026",
    readTime: "5 min read",
    preview: "The neuroscience of deep reading — and why slowing down may be the most radical productivity hack."
  },
  {
    title: "The Art of Minimalist Productivity",
    thumb: "/images/articles/minimal.jpg",
    author: "Leo Babauta",
    publishDate: "Mar 25, 2026",
    readTime: "4 min read",
    preview: "Finding focus in a world designed to distract us from our most important work."
  }
];

export const techItems: TechItem[] = [
  {
    title: "AI-assisted editor",
    description: "Smart suggestions that respect your voice and help you write faster.",
    icon: "cpu"
  },
  {
    title: "Instant publish",
    description: "From draft to live in under a second with our global edge network.",
    icon: "zap"
  },
  {
    title: "Developer friendly",
    description: "API and embeds for your own stack, built with modern standards.",
    icon: "code-2"
  },
  {
    title: "Lumina SDK",
    description: "The complete toolkit for integrating Lumina insights into your apps.",
    icon: "box"
  }
];
