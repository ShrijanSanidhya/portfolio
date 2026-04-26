import { Mic, BrainCircuit, Activity, GraduationCap, Code2 } from 'lucide-react';

export const portfolioData = {
  personal: {
    name: "Shrijan Sanidhya",
    email: "shrijan.sanidhya2024@nst.rishihood.edu.in",
    phone: "+91 9175919836",
    taglines: [
      "Full-Stack Developer",
      "GenAI Integrator",
      "UI/UX Enthusiast",
      "AI Builder"
    ],
    bio: [
      "Hey, I'm Shrijan — a passionate B.Tech AI student at Newton School of Technology, Rishihood University. I'm currently in my 1st year, but I've already shipped 3 full-stack AI-powered projects.",
      "I live at the intersection of high-end frontend and GenAI innovation. I don't just build apps — I build intelligent experiences powered by LLMs, RAG pipelines, real-time voice AI, and clean UI.",
      "Driven by a product-first mindset. Always learning. Always shipping."
    ],
    quickInfo: [
      { label: "Education", value: "B.Tech AI, NST Rishihood (2024–2028)", icon: "🎓" },
      { label: "Location", value: "India", icon: "📍" },
      { label: "Status", value: "Open to Internships", icon: "💼" },
      { label: "Currently", value: "Building with LLMs & RAG", icon: "⚡" },
      { label: "Also into", value: "UI/UX, Figma, Creative Dev", icon: "🎨" }
    ]
  },
  projects: [
    {
      id: "kavach",
      title: "Kavach.AI",
      description: "Voice-first SOS system, AI triage, real-time SSE dispatch",
      features: [
        "Multilingual voice reporting",
        "AI vision verification",
        "Real-time SSE tracking",
        "Confidence-based dispatch"
      ],
      stack: ["React", "Vite", "Node.js", "Express", "SSE", "Groq", "Llama"],
      github: "https://github.com/ShrijanSanidhya/kavach",
      demo: "#",
      date: "April 2026",
      tag: "AI Security",
      color: "purple",
      icon: Mic,
      accent: "#7c3aed"
    },
    {
      id: "voiceiq",
      title: "VoiceIQ",
      description: "Voice analytics pipeline, Whisper transcription, Gemini insights",
      features: [
        "Real-time streaming transcription",
        "AI action items + sentiment",
        "Transcript-grounded RAG chat",
        "Automated PDF export"
      ],
      stack: ["React", "FastAPI", "Gemini 2.0", "Whisper", "LangChain", "FAISS", "WebSockets"],
      github: "https://github.com/ShrijanSanidhya/voiceiq",
      demo: "#",
      date: "April 2026",
      tag: "AI Analytics",
      color: "cyan",
      icon: BrainCircuit,
      accent: "#06b6d4"
    },
    {
      id: "fitai",
      title: "Fit AI",
      description: "Full-stack AI health planner, meal/workout plans, streak dashboard",
      features: [
        "Personalized onboarding",
        "Smart meal filtering",
        "Time-based workout suggestions",
        "JWT-secured auth"
      ],
      stack: ["Vite", "Node.js", "Express", "MongoDB", "JWT", "Recharts", "Vercel"],
      github: "https://github.com/ShrijanSanidhya/fitai",
      demo: "#",
      date: "March 2026",
      tag: "Health Tech",
      color: "green",
      icon: Activity,
      accent: "#10b981"
    }
  ],
  skills: [
    {
      group: "Frontend",
      color: "cyan",
      tags: ["React", "Vite", "HTML5", "CSS3", "Tailwind CSS", "TypeScript", "Figma"]
    },
    {
      group: "Backend",
      color: "purple",
      tags: ["Node.js", "Express.js", "FastAPI", "Python", "REST APIs"]
    },
    {
      group: "AI / GenAI",
      color: "pink",
      tags: ["LangChain", "LangGraph", "LangSmith", "Groq", "Gemini 2.0", "Whisper", "Hugging Face", "FAISS", "LLMs", "RAG Pipelines"]
    },
    {
      group: "Database",
      color: "amber",
      tags: ["MongoDB", "MySQL", "Prisma ORM", "SQL", "Mongoose"]
    },
    {
      group: "DevTools",
      color: "blue",
      tags: ["Git", "GitHub", "GitHub Actions", "Postman", "Vercel", "Render"]
    },
    {
      group: "Creative",
      color: "rose",
      tags: ["Figma", "Photoshop", "Tableau", "UI/UX"]
    }
  ],
  certifications: [
    {
      title: "Career Essentials in Generative AI",
      issuer: "Microsoft & LinkedIn",
      date: "Oct 2024",
      description: "Foundational concepts of Generative AI, prompt engineering, and ethical considerations.",
      tags: ["Generative AI", "Prompt Engineering"],
      icon: GraduationCap,
      color: "cyan"
    },
    {
      title: "Python Head Start",
      issuer: "Newton School",
      date: "Sep 2024",
      description: "Comprehensive python programming foundation covering data structures, OOP, and algorithms.",
      tags: ["Python", "Algorithms", "OOP"],
      icon: Code2,
      color: "purple"
    }
  ],
  contact: {
    email: "shrijan.sanidhya2024@nst.rishihood.edu.in",
    phone: "+91 9175919836",
    socials: [
      { name: "GitHub", url: "https://github.com/ShrijanSanidhya" },
      { name: "LinkedIn", url: "#" },
      { name: "Twitter", url: "#" }
    ]
  }
};
