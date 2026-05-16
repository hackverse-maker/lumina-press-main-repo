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
  slug: string;
  thumb: string;
  category: string;
  subtitle?: string;
  author: string;
  authorImage: string;
  authorBio: string;
  publishDate: string;
  readTime: string;
  preview: string;
  content: string[];
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
    author: "Muhammad Raza",
    genre: "Non-Fiction",
    publishDate: "2026",
    description: "The Self as Witness explores the timeless struggle for self-mastery—the internal battle that has defined the human condition across history. Drawing from the wisdom of great thinkers, it distills profound philosophies into a clear, practical framework. Rather than remaining abstract, this book transforms ancient insight into actionable discipline, guiding you to apply self-awareness and control in your everyday life.",
    benefits: [
      "Recognition of the Inner Adversary",
      "Deep Self-Awareness and Insight",
      "A Structured Strategy for Inner Mastery"
    ],
    image: "/images/books/self-as-witness-v2.png",
    featured: true,
    gallery: [
      "/images/books/self-as-witness.png",
      "/images/books/self-as-witness-perspective.png",
      "/images/books/self-as-witness-desk.png"
    ]
  },
  {
    id: "cyber-cable",
    title: "Twelve Lords Cyber Cable",
    subtitle: "Security Hardware-Level",
    author: "Twelve Lords Engineers",
    genre: "Hardware",
    publishDate: "2026",
    description: "Secure Charging. Controlled Data. Total Protection. Our team of engineers developed the Cyber Cable to eliminate 'Juice Jacking' and data theft at the physical layer.",
    image: "/images/cablepost.jpg.jpeg",
    featured: true
  }
];

export const articles: Article[] = [
  {
    title: "As Cyber Threats Accelerate, Human Awareness Remains the Critical Weakness",
    slug: "cyber-threats-human-awareness",
    category: "Technology",
    subtitle: "Exploring how human vulnerability in cybersecurity remains the greatest risk factor in our increasingly digital world.",
    thumb: "/images/article.jpg",
    author: "Muhammad Raza",
    authorImage: "/images/books/self-as-witness-v2.png",
    authorBio: "Muhammad Raza is a writer and philosopher exploring the intersection of technology and human consciousness.",
    publishDate: "April 15, 2026",
    readTime: "8 min read",
    preview: "Organizations invest heavily in technology, but the human element often becomes the weakest link.",
    content: [
      "## The Human Factor in Security",
      "In today's rapidly evolving digital landscape, organizations face an unprecedented wave of cyber threats. From ransomware attacks to data breaches, the consequences have become increasingly severe. Yet, despite massive investments in cutting-edge security technology, one vulnerability remains consistently exploited: human awareness.",
      "The statistics paint a sobering picture. According to recent research, over 90% of successful data breaches involve some form of human error. Whether it's clicking a malicious link, using weak passwords, or inadvertently sharing sensitive information, the human element remains the weakest link in the security chain.",
      "## The Disconnect",
      "This disconnect between technological sophistication and human preparedness represents a critical gap in our collective security posture. No amount of firewalls, encryption, or intrusion detection systems can fully compensate for an uninformed user base.",
      "> \"The greatest threat to security is the illusion of security.\"",
      "The challenge lies not just in the technical implementation of security measures, but in the cultural shift required to make cybersecurity awareness a fundamental part of organizational DNA.",
      "## The Path Forward",
      "This requires regular, ongoing training programs that evolve with emerging threats, clear communication of security policies, and the creation of a psychological safety environment where users can report suspicious activity.",
      "As cyber threats continue to accelerate in sophistication and scale, the path forward is clear: we must place the human element at the center of our cybersecurity strategy. Not as a liability to be contained, but as the strongest asset we possess—when properly informed, empowered, and supported."
    ]
  },
  {
    title: "The Quiet Craft of Writing Every Day",
    slug: "quiet-craft-of-writing",
    category: "Productivity",
    subtitle: "Small daily rituals that turn writing from a chore into a craft.",
    thumb: "/images/article.jpg",
    author: "Maya Aldrin",
    authorImage: "/images/books/self-as-witness-v2.png",
    authorBio: "Maya Aldrin is an author focused on mindful productivity and the art of writing.",
    publishDate: "Apr 12, 2026",
    readTime: "6 min read",
    preview: "Small daily rituals that turn writing from a chore into a craft you'll never want to stop refining.",
    content: [
      "## Writing as a Ritual",
      "Writing is not just about putting words on a page; it's about the discipline of showing up every single day. The quiet craft of writing is found in the moments of silence before the first word is typed.",
      "## Consistency Over Intensity",
      "Many writers wait for inspiration to strike. But professional writers know that inspiration is a guest that only arrives when you are already working. By setting a small, manageable daily goal, you bypass the fear of the blank page.",
      "## The Long Game",
      "The results of a daily writing practice aren't immediately visible. It's only after weeks and months of consistent effort that you begin to see the architecture of your own voice emerging from the noise."
    ]
  },
  {
    title: "A Generation Under Fear: How Corporal Punishment Is Quietly Damaging Pakistan’s Youth",
    slug: "pakistan-corporal-punishment",
    category: "Social Analysis",
    subtitle: "Every generation is told it is the future of the nation. But what happens when that future is shaped by fear?",
    thumb: "/cybersecurity-featured.png",
    author: "Twelve Lords Editorial",
    authorImage: "/images/books/self-as-witness-v2.png",
    authorBio: "Twelve Lords Editorial team provides deep-dives into social and educational issues affecting the modern world.",
    publishDate: "April 21, 2024",
    readTime: "12 min read",
    preview: "Across many schools and madrassas in Pakistan, corporal punishment remains an embedded part of discipline.",
    content: [
      "Every generation is told it is the future of the nation. In Pakistan, that idea is repeated often—by policymakers, by educators, and by parents. But what happens when that future is shaped not by curiosity and confidence, but by fear?",
      "Across many schools and madrassas in Pakistan, corporal punishment remains an embedded part of discipline. For countless children, the school day does not begin with learning, but with anxiety: the anticipation of humiliation, the threat of violence, and the quiet erosion of self-worth.",
      "## The Scale of the Issue",
      "A 2018 peer-reviewed study found that more than 90% of boys and over 60% of girls experienced corporal punishment within a four-week period in school. More recent research from 2023 in Khyber Pakhtunkhwa reported that approximately 83% of students had been subjected to physical punishment.",
      "## The Psychological Cost",
      "Research on childhood trauma offers a mistake warning. Adverse childhood experiences—including physical abuse, humiliation, and chronic fear—are strongly associated with mental health problems later in life, including anxiety, depression, and substance misuse.",
      "> \"This raises a difficult question: how can a child be expected to learn effectively in an environment where they feel unsafe?\"",
      "## The Path to Change",
      "If Pakistan is serious about investing in its future, the conversation around education must go beyond access and curriculum. It must include the psychological safety of students. Stronger enforcement of existing laws and better teacher training are necessary steps."
    ]
  },
  {
    title: "9AM Exams Are Failing Students — And We Know It",
    slug: "9am-exams-failing-students",
    category: "Educational Critique",
    subtitle: "At 9:00 a.m. sharp, millions of students sit in silence. But is this system truly fair?",
    thumb: "/cybersecurity-featured.png",
    author: "Twelve Lords Editorial",
    authorImage: "/images/books/self-as-witness-v2.png",
    authorBio: "Twelve Lords Editorial team provides deep-dives into social and educational issues affecting the modern world.",
    publishDate: "April 21, 2024",
    readTime: "10 min read",
    preview: "At 9:00 a.m. sharp, millions of students sit in silence. But is this system truly fair, or is it merely testing how well a student can perform while half-asleep?",
    content: [
      "At 9:00 a.m. sharp, millions of students sit in a heavy, collective silence, staring at exam papers that will shape the trajectory of their adult lives. We are told this system represents fairness—a standardised, meritocratic “level playing field.”",
      "## The Biological Bias",
      "But as our understanding of human biology has advanced, a glaring contradiction has emerged. The very structure of high-stakes morning examinations may be creating an invisible, biological bias that penalises a significant portion of the student population.",
      "The circadian rhythm undergoes a dramatic shift during adolescence. Research consistently shows that teenagers and young adults have a natural tendency toward later sleep and wake times. For many, 9:00 a.m. is a time when their brains are still in a physiological state of rest.",
      "> \"It is bias, dressed up as fairness.\"",
      "## Beyond Convenience",
      "A system that ignores the fundamental biology of the human brain is not a system of excellence; it is a system of convenience. It is not a pure test of knowledge, but a test of how well a student can perform while half-asleep."
    ]
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
    title: "Twelve Lords SDK",
    description: "The complete toolkit for integrating Twelve Lords insights into your apps.",
    icon: "box"
  }
];
