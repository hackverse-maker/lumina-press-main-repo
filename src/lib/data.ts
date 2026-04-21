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
    id: "cyber-cable",
    title: "Twelve Lords Cyber Cable",
    subtitle: "Secure Charging. Controlled Data. Total Protection.",
    author: "Twelve Lords Tech",
    genre: "Hardware / Security",
    publishDate: "2026",
    description: "At Twelve Lords, we design hardware with security at its core. The Cyber Cable is built to address a fundamental weakness in modern connectivity: the automatic trust placed in USB connections. Conventional cables allow unrestricted power and data flow, exposing devices to potential threats the moment they are plugged into an unknown source.",
    benefits: [
      "Default Charge-Only Mode",
      "Controlled Data Enablement",
      "Hardware-Level Enforcement"
    ],
    image: "/images/cable-new.png",
    featured: true,
    sections: [
      {
        title: "Development Philosophy",
        content: [
          "The Cyber Cable was developed by a team of cybersecurity engineers and hardware specialists focused on real-world attack vectors affecting everyday users.",
          "Through analysis of public charging environments such as airports, hotels, and shared workspaces, we identified a consistent risk: devices are vulnerable at the point of connection, before any software-based defenses can intervene.",
          "To address this, we engineered a cable that enforces security at the physical layer. By controlling the internal data pathways, the Cyber Cable eliminates unauthorized communication at the source, providing protection that does not depend on the device’s operating system or user awareness."
        ]
      },
      {
        title: "Threat Landscape",
        content: [
          "Public and untrusted USB connections can be exploited through multiple attack methods:",
          "• Juice Jacking: Malicious charging stations can attempt to install malware during charging.",
          "• HID Injection: A comprised connection may emulate keyboards to execute unauthorized commands.",
          "• Data Interception: Unsecured connections can allow data to be monitored or captured during transfer."
        ]
      },
      {
        title: "Product Specifications",
        content: [
          "• Variants: USB-A to Lightning, USB-A to USB-C, USB-C to Lightning, USB-C to USB-C",
          "• Power Delivery: Up to 60W fast charging",
          "• Length: 1 meter / 2 meters",
          "• Build Quality: Reinforced structure with high-quality internal shielding",
          "• Modes: Charge-Only (Default), Data Mode (User Controlled)"
        ]
      }
    ]
  },
  {
    id: "echoes-of-eternity",
    title: "Echos of Eternity",
    author: "Elena Vance",
    publishDate: "Dec 2025",
    genre: "Philosophy",
    description: "A journey through the cyclic nature of time and the human experience.",
    image: "/images/books/echoes.jpg"
  },
  {
    id: "digital-stoic",
    title: "The Digital Stoic",
    author: "Marcus Aurelius II",
    publishDate: "Jan 2026",
    genre: "Self-Help",
    description: "Applying ancient principles to the modern noise of the digital age.",
    image: "/images/books/stoic.jpg"
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
