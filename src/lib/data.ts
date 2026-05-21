export interface Book {
  id: string;
  title: string;
  subtitle?: string;
  author: string;
  publishDate: string;
  genre: string;
  description: string;
  benefits?: {
    title: string;
    description: string;
  }[];
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
    genre: "NON-FICTION",
    publishDate: "2026",
    description: "The Self as Witness explores the timeless struggle for self-mastery—the internal battle that has defined the human condition across history. Drawing from the wisdom of great thinkers, it distills profound philosophies into a clear, practical framework. Rather than remaining abstract, this book transforms ancient insight into actionable discipline, guiding you to apply self-awareness and control in your everyday life.",
    benefits: [
      {
        title: "Recognition of the Inner Adversary",
        description: "Cultivate the ability to identify the \"inner suspect\"—the hidden patterns, impulses, and tendencies that undermine your discipline and clarity."
      },
      {
        title: "Deep Self-Awareness and Insight",
        description: "Develop a heightened awareness of your inner world, gaining knowledge of your thoughts, emotions, and behaviors at their root."
      },
      {
        title: "A Structured Strategy for Inner Mastery",
        description: "Formulate a disciplined and practical framework to confront, regulate, and ultimately transcend the limitations of your inner self."
      },
      {
        title: "Witnessing the Self Beyond Impulse",
        description: "Learn to observe your impulses without being controlled by them, creating the space needed for conscious choice and authentic self-direction."
      }
    ],
    image: "/images/books/self-as-witness-v2.png",
    featured: true
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
    subtitle: "In a world engineered for digital convenience, the failure to build widespread cyber awareness is leaving individuals dangerously exposed.",
    thumb: "/images/article.jpg",
    author: "Muhammad Raza",
    authorImage: "/images/books/self-as-witness-v2.png",
    authorBio: "Muhammad Raza is a writer and philosopher exploring the intersection of technology and human consciousness.",
    publishDate: "May 20, 2026",
    readTime: "8 min read",
    preview: "In a world engineered for digital convenience, the failure to build widespread cyber awareness is leaving individuals dangerously exposed.",
    content: [
      "## The Human Factor in Security",
      "In a world engineered for digital convenience, the failure to build widespread cyber awareness is leaving individuals dangerously exposed.",
      "In the race to digitise modern life, convenience has become the defining principle. From children navigating smartphones before they can write, to transport networks and public infrastructure running on interconnected systems, technology is no longer simply a tool—it is the environment in which we live. Yet as this environment expands, so too does its exposure to risk. The unsettling reality is that while cyber threats are accelerating, human awareness is not evolving alongside them.",
      "Recent figures from the National Cyber Security Centre illustrate the scale of the challenge. In 2025, the UK experienced 204 nationally significant cyber attacks—more than double the 89 recorded the previous year. Government data further indicates that nearly 43% of businesses identified breaches or attacks, with around one in five experiencing cyber crime directly. Globally, the trajectory is similarly concerning: thousands of breaches occur annually, while more than 30,000 new vulnerabilities were identified in 2024 alone.",
      "Cyber attacks are becoming more frequent, more sophisticated, and more deeply embedded in everyday systems. But the most persistent vulnerability is not technical—it is human.",
      "## The Easiest System to Breach",
      "Despite continuous investment in advanced security technologies, human behaviour remains central to the majority of cyber incidents. Research suggests that up to 88% of breaches involve some form of human error. This is not simply carelessness; it reflects a broader culture of passive interaction with technology.",
      "Social engineering has become the dominant method of attack. Rather than attempting to break through hardened systems, attackers target individuals directly—exploiting trust, urgency, and routine behaviour. Phishing alone accounts for approximately 93% of UK cyber crimes, increasingly enhanced by AI-generated messages and deepfake impersonations that are difficult to distinguish from legitimate communication.",
      "In this landscape, the user is no longer just a participant in the system, but its most accessible entry point. A reused password, a clicked link, or a hastily granted permission can bypass even the most sophisticated defences. Credential theft remains a leading cause of breaches, while email-based attacks continue to serve as a primary infection vector.",
      "Awareness, in theory, exists. In practice, it rarely translates into consistent behaviour. Security warnings are dismissed, updates are delayed, and permissions are granted without scrutiny. The result is a gap between what people know and how they act—a gap that attackers are increasingly skilled at exploiting.",
      "## When Breaches Go Unnoticed",
      "If human vulnerability enables attacks, delayed detection allows them to flourish. One of the most concerning aspects of modern cyber incidents is the length of time they remain undiscovered. On average, organisations take 181 days to identify a breach, followed by an additional 60 days to contain it—an eight-month window in which attackers can operate largely undetected.",
      "During this period, attackers are not idle. They move through systems, escalate privileges, and extract sensitive data, often without triggering immediate alarms. By the time a breach is identified, the damage is not only complete but amplified.",
      "The financial cost is significant. According to IBM, the global average cost of a data breach has reached approximately $4.44 million, rising further when detection is delayed. Yet the deeper impact lies beyond immediate losses.",
      "## The Quiet Erosion of Privacy",
      "Every breach carries a longer-term consequence: the gradual erosion of personal privacy. Cyber attacks are responsible for around 80% of data breaches, exposing sensitive information such as personal identifiers, login credentials, and financial data.",
      "Unlike physical assets, stolen data does not disappear—it multiplies. Once compromised, it is copied, traded, and redistributed across digital networks, often resurfacing months or years later. This creates an ongoing cycle of risk, where individuals remain vulnerable to identity theft, fraud, and account compromise long after the initial incident.",
      "This phenomenon—often described as “privacy erosion”—is cumulative. It reflects not a single failure, but a sustained loss of control over personal information in an increasingly interconnected world.",
      "## A Failure of Public Awareness",
      "While organisations continue to invest in technical defences, a critical gap remains largely unaddressed: public education. There are few large-scale, effective awareness campaigns capable of reaching everyday users—particularly those outside formal education systems.",
      "Cybersecurity knowledge is often treated as a specialist skill, rather than a basic life competency. Yet the reality suggests otherwise. In earlier eras, survival depended on understanding the tools and threats of the time. Today, the threat landscape has shifted, but the need for foundational awareness has not.",
      "A more recent comparison is equally instructive. During the Covid-19 pandemic, public health messaging successfully embedded simple protective behaviours into daily life: handwashing, mask-wearing, and social distancing. These practices became widely understood and routinely applied because they were communicated clearly and consistently.",
      "No equivalent effort exists for cybersecurity. There is no universal expectation that individuals should recognise phishing attempts, manage passwords securely, or question digital permissions. As a result, many users remain exposed—not through lack of intelligence, but through lack of accessible, practical education.",
      "## Rethinking Responsibility",
      "Addressing this imbalance requires a broader shift in how cybersecurity is understood and implemented. Responsibility cannot rest solely with individuals, nor entirely with organisations. It must be shared across systems, design, and public infrastructure.",
      "Technology itself must play a role. Security features need to move beyond optional prompts and become embedded, intuitive, and resistant to misuse. At the same time, awareness efforts must evolve from passive training into practical education that reflects how attacks actually occur.",
      "Most importantly, cybersecurity must be reframed as a public necessity rather than a technical afterthought. Just as basic hygiene became essential during a global health crisis, basic cyber practices must become part of everyday behaviour—understood, normalised, and widely adopted.",
      "## The Cost of Inaction",
      "The trajectory of cyber threats is unlikely to slow. As artificial intelligence enhances both defensive tools and offensive tactics, the gap between sophisticated attackers and everyday users is likely to widen further.",
      "Without widespread awareness, individuals will continue to act as unintended gateways into larger systems—linking personal vulnerability to organisational and national risk. The consequences will not always be immediate, but they will be cumulative, shaping a future in which privacy is increasingly fragile and security increasingly reactive.",
      "The challenge, then, is not simply technological. It is cultural.",
      "Until awareness is treated as essential infrastructure—something to be built, maintained, and shared—cybersecurity will remain fundamentally incomplete. And in a world defined by digital dependence, that may prove to be the most critical weakness of all."
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
    publishDate: "May 20, 2026",
    readTime: "12 min read",
    preview: "Across many schools and madrassas in Pakistan, corporal punishment remains an embedded part of discipline.",
    content: [
      "Every generation is told it is the future of the nation. In Pakistan, that idea is repeated often—by policymakers, by educators, and by parents. But what happens when that future is shaped not by curiosity and confidence, but by fear?",
      "Across many schools and madrassas in Pakistan, corporal punishment remains an embedded part of discipline. For countless children, the school day does not begin with learning, but with anxiety: the anticipation of humiliation, the threat of violence, and the quiet erosion of self-worth. Education, which should nurture potential, instead becomes a source of psychological strain.",
      "## The Scale of the Issue",
      "A 2018 peer-reviewed study found that more than 90% of boys and over 60% of girls experienced corporal punishment within a four-week period in school. More recent research from 2023 in Khyber Pakhtunkhwa reported that approximately 83% of students in schools and madrassas had been subjected to physical punishment. These are not isolated figures—they reflect a broader system in which physical discipline is normalised rather than questioned.",
      "## The Psychological Cost",
      "Research on childhood trauma offers a stark warning. Studies from institutions such as the Centers for Disease Control and Prevention and the World Health Organization show that adverse childhood experiences—including physical abuse, humiliation, and chronic fear—are strongly associated with mental health problems later in life, including anxiety, depression, substance misuse, and even suicidal behaviour. More importantly, such experiences can alter how a child understands themselves and the world.",
      "A child repeatedly exposed to punishment and humiliation may begin to internalise damaging beliefs: that they are inadequate, that mistakes deserve pain, or that authority must be feared rather than respected. Over time, this can disrupt personality development itself. Emotional regulation becomes harder, self-esteem weakens, and relationships—both in childhood and adulthood—can be shaped by insecurity or distrust.",
      "## Neuroscience Reinforces the Concern",
      "Research highlighted by the Harvard Center on the Developing Child explains how prolonged exposure to stress in childhood—often referred to as “toxic stress”—can affect brain development, particularly in areas related to learning, memory, and emotional control. In simple terms, a child who learns in fear is not just emotionally affected; their ability to think, focus, and create may also be compromised.",
      "## The Educational Paradox",
      "This raises a difficult question: how can a child be expected to learn effectively in an environment where they feel unsafe? In Pakistan, this contradiction is particularly striking. Students who struggle academically often face harsher punishment rather than additional support. Instead of receiving guidance, they are made to feel inadequate—reinforcing a cycle where fear replaces motivation. Creativity, critical thinking, and innovation—qualities essential for national development—are unlikely to thrive under such conditions.",
      "## Legal Landscape",
      "The legal landscape, while evolving, has yet to fully address this reality. Laws such as the Islamabad Capital Territory Prohibition of Corporal Punishment Act 2021 and provincial measures in Sindh represent important progress. They signal a growing recognition that physical punishment has no place in education. However, enforcement remains uneven, and in many parts of the country such practices continue with little oversight.",
      "## Cultural Attitudes",
      "Cultural attitudes also play a role. Many parents, even when aware of these practices, accept them as necessary. The belief that “this is how children learn” remains deeply ingrained. In doing so, discipline is prioritised over dignity, and obedience over well‑being.",
      "## Systemic Roots",
      "At the same time, it would be too simplistic to place blame solely on teachers or institutions. The issue is systemic. It reflects gaps in training, policy enforcement, and awareness. Teachers under pressure, parents driven by expectations, and institutions concerned with reputation all contribute—often unintentionally—to an environment where harm is normalised.",
      "## Broader Consequences",
      "The consequences, however, are far from abstract. Pakistan continues to face significant challenges in innovation, entrepreneurship, and youth retention. While these issues have multiple causes, the psychological environment in which children are raised and educated cannot be ignored. A generation shaped by fear, anxiety, and diminished self‑worth is less likely to take risks, think independently, or challenge ideas—all essential traits for progress.",
      "## Path to Change",
      "If Pakistan is serious about investing its future, the conversation around education must go beyond access and curriculum. It must include the psychological safety of students. Stronger enforcement of existing laws, better teacher training in non‑violent discipline, and a shift in societal attitudes are not optional—they are necessary."
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
    publishDate: "May 20, 2026",
    readTime: "10 min read",
    preview: "At 9:00 a.m. sharp, millions of students sit in silence. But is this system truly fair, or is it merely testing how well a student can perform while half-asleep?",
    content: [
      "At 9:00 a.m. sharp, millions of students sit in a heavy, collective silence, staring at exam papers that will shape the trajectory of their adult lives. We are told this system represents fairness at its highest level—a standardised, meritocratic \"level playing field\" where effort and ability determine outcomes.",
      "But the science tells a very different story.",
      "At that exact moment, a significant portion of those students are not fully awake. Not mentally, not biologically, and certainly not cognitively. What appears to be a neutral testing environment is, in reality, a deeply uneven one—tilted not by intelligence or preparation, but by biology.",
      "The data is no longer new, and the science is no longer in dispute. The real question is no longer whether early morning exams are flawed, but why we continue to cling to the fiction that they are fair.",
      "## The Mismatch of Circadian Rhythms",
      "Human performance is governed by circadian rhythms—the internal biological clocks that regulate sleep, alertness and cognitive efficiency. These rhythms are not identical across individuals. Some people naturally reach peak performance early in the day. Many others do not. For them, a 9:00 a.m. exam is not simply an inconvenience; it is a physiological barrier.",
      "A landmark study of more than 700 students in the Netherlands illustrates the consequences of this mismatch. Researchers found that \"night owls\" performed significantly worse in 9:00 a.m. exams than their \"morning-type\" peers. Crucially, by early afternoon, this performance gap vanished entirely. Nothing about the students’ knowledge had changed. Nothing about their preparation had improved. Only the time of day had shifted.",
      "What we often label as \"underperformance\" in the morning is, in many cases, simply mistimed performance.",
      "This distinction matters. Because if exam results vary depending on when a student is tested, then those results cannot be understood as pure measures of ability. They are, at least in part, reflections of how well a student’s internal clock happens to align with an arbitrary institutional schedule. In effect, we are not just assessing knowledge—we are assessing biological timing.",
      "## The Teen Brain and Physiological Timetables",
      "For teenagers, this misalignment is even more pronounced. During puberty, the body’s internal clock shifts forward, making it a biological necessity—not a behavioural choice—to fall asleep later and wake up later. This shift is well-documented across sleep science and has been observed consistently across cultures.",
      "Sleep researcher Mary Carskadon has described the impact in stark terms: asking a teenager to perform at high capacity at 8:00 or 9:00 a.m. is equivalent to asking an adult to function at around 4:00 a.m.",
      "> \"Asking a teenager to perform at high capacity at 8:00 or 9:00 a.m. is equivalent to asking an adult to function at around 4:00 a.m.\"",
      "It is a striking comparison—and an uncomfortable one. Few would consider it reasonable to ask a professional to deliver a life-defining performance in the middle of the night. Yet this is precisely what the education system demands of millions of students every year. When those students inevitably fall short of their peak performance, the system interprets it as a lack of ability rather than a predictable consequence of biological misalignment.",
      "The effects of this mismatch extend beyond individual exam performance. Chronic sleep deprivation, which is widespread among students forced into early schedules, has been linked to reduced concentration, impaired memory, increased stress and lower overall academic attainment. In other words, the system is not merely inconvenient—it is actively counterproductive.",
      "## A Legacy of the Industrial Revolution",
      "Given the weight of this evidence, the persistence of early morning exams becomes difficult to justify. And yet, they remain the norm.",
      "The explanation lies not in science, but in history.",
      "Modern school timetables are, in many ways, a legacy of the Industrial Revolution. As mass education systems developed in the 19th century, they were designed to mirror the structure of factory life—characterised by fixed hours, rigid discipline and synchronised routines. At the same time, the expansion of railway networks required the standardisation of time itself, embedding the familiar rhythms of the working day into everyday life.",
      "Schools adopted these structures, not because they optimised learning, but because they aligned with the logistical demands of the time.",
      "As Paul Kelley has pointed out, we are still attempting to run a 21st-century education system on a timetable designed for a 19th-century industrial society. While teaching methods, technology and curricula have evolved, the underlying structure of the school day has remained largely unchanged.",
      "This inertia would be easier to defend if the system were effective. But evidence suggests otherwise.",
      "## Timing as a Critical Factor",
      "When school schedules are aligned more closely with human biology, the results are difficult to ignore. In a study conducted in England, where start times were shifted to 10:00 a.m., researchers observed a significant reduction in illness-related absences alongside a measurable improvement in academic performance. When the earlier start times were reinstated, these gains disappeared.",
      "This is not a marginal effect. It is a clear indication that timing is a critical factor in educational outcomes.",
      "At this point, continuing to schedule high-stakes exams at 9:00 a.m. is no longer a neutral administrative choice. It is an active decision to prioritise convenience over accuracy, and tradition over evidence.",
      "## The Illusion of Meritocracy",
      "There is a quiet absurdity at the heart of this system. We claim that exams are designed to measure knowledge, intelligence and effort. Yet we systematically place students in conditions that suppress all three.",
      "In other high-performance domains, such an approach would be unthinkable. Elite athletes are not scheduled to compete at their physiological low point. Surgeons are not asked to perform complex procedures while sleep-deprived as a test of their competence. Performance, in these contexts, is evaluated under conditions that allow individuals to operate at their best.",
      "Education, however, operates differently.",
      "Students are tested at a time when many of them are not fully capable of demonstrating their abilities. Their results are then treated as objective measures of merit, shaping opportunities, pathways and, in some cases, entire careers.",
      "## Choosing Evidence Over Tradition",
      "At some point, this stops being an oversight and starts becoming a choice.",
      "A choice to maintain a system that is familiar, even when it is flawed. A choice to uphold the appearance of fairness while ignoring the underlying inequity. A choice to value tradition over the well-being and potential of students.",
      "The solution does not require sweeping reform or technological innovation. It is, in principle, remarkably simple: schedule exams at a time when students are actually awake.",
      "The science is clear. The evidence is consistent. The benefits are measurable.",
      "What remains uncertain is not whether change is possible, but whether there is sufficient willingness to pursue it.",
      "Until then, every 9:00 a.m. exam carries the same fundamental flaw.",
      "It is not a pure test of knowledge or ability.",
      "It is a test of how well a student can perform while half-asleep.",
      "And that is not education.",
      "> \"It is bias, dressed up as fairness.\""
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
