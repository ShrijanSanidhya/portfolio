import { Mic, BrainCircuit, Activity, GraduationCap, Code2, BookOpen } from 'lucide-react';

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
      "Hey, I'm Shrijan, a passionate B.Tech AI student at Newton School of Technology, Rishihood University. I'm currently in my 1st year, but I've already shipped 4 full-stack AI-powered projects.",
      "I live at the intersection of high-end frontend and GenAI innovation. I don't just build apps. I build intelligent experiences powered by LLMs, RAG pipelines, real-time voice AI, and clean UI.",
      "Driven by a product-first mindset. Always learning. Always shipping."
    ],
    quickInfo: [
      { label: "Education", value: "B.Tech AI, NST Rishihood (2024–2028)", icon: "education" },
      { label: "Location", value: "India", icon: "location" },
      { label: "Status", value: "Open to Internships", icon: "status" },
      { label: "Currently", value: "Building with LLMs & RAG", icon: "current" },
      { label: "Also into", value: "UI/UX, Figma, Creative Dev", icon: "creative" }
    ]
  },
  hero: {
    name: "Shrijan",
    titles: [
      "Full-Stack Developer",
      "GenAI Integrator",
      "UI/UX Enthusiast",
      "AI Builder"
    ],
    description: "B.Tech AI student shipping full-stack, AI-powered products. I build intelligent experiences with LLMs, RAG pipelines, and clean interfaces."
  },
  projects: [
    {
      id: "kavach",
      title: "Kavach.AI",
      description: "Voice-first SOS emergency system with AI-powered triage, real-time SSE dispatch, and multilingual voice reporting for rapid emergency response.",
      features: [
        "Multilingual voice reporting",
        "AI vision verification",
        "Real-time SSE tracking",
        "Confidence-based dispatch"
      ],
      stack: ["React", "Vite", "Node.js", "Express", "SSE", "Groq", "Llama"],
      github: "https://github.com/ShrijanSanidhya/kavach",
      demo: "https://kavach-ai-ivory.vercel.app/",
      date: "Apr 2026",
      tag: "AI Security",
      icon: Mic,
      image: "/projects/kavach.png"
    },
    {
      id: "voiceiq",
      title: "VoiceIQ",
      description: "Full-stack voice analytics pipeline with Whisper transcription, Gemini-powered insights, sentiment analysis, and transcript-grounded RAG chat.",
      features: [
        "Real-time streaming transcription",
        "AI action items + sentiment",
        "Transcript-grounded RAG chat",
        "Automated PDF export"
      ],
      stack: ["React", "FastAPI", "Gemini 2.0", "Whisper", "LangChain", "FAISS"],
      github: "https://github.com/ShrijanSanidhya/voiceiq",
      demo: "https://voice-iq-delta.vercel.app/",
      date: "Apr 2026",
      tag: "AI Analytics",
      icon: BrainCircuit,
      image: "/projects/voiceiq.png"
    },
    {
      id: "fitai",
      title: "Fit AI",
      description: "AI-powered health planner generating personalized meal plans, time-based workout routines, and streak tracking with a beautiful dashboard.",
      features: [
        "Personalized onboarding",
        "Smart meal filtering",
        "Time-based workout suggestions",
        "JWT-secured auth"
      ],
      stack: ["Vite", "Node.js", "Express", "MongoDB", "JWT", "Recharts"],
      github: "https://github.com/ShrijanSanidhya/fitai",
      demo: "https://health-care-rouge-eight.vercel.app/login",
      date: "Mar 2026",
      tag: "Health Tech",
      icon: Activity,
      image: "/projects/fitai.png"
    },
    {
      id: "studentmgmt",
      title: "Student Management",
      description: "Complete MERN-stack student portal — view fees, upcoming lectures, attendance tracking, and online exam management in one unified dashboard.",
      features: [
        "Fee management dashboard",
        "Upcoming lecture schedule",
        "Attendance tracking",
        "Online exam portal"
      ],
      stack: ["MongoDB", "Express", "React", "Node.js"],
      github: "https://github.com/ShrijanSanidhya/student-management",
      demo: "https://student-managment-system-eta-self.vercel.app/login",
      date: "Feb 2026",
      tag: "EdTech",
      icon: BookOpen,
      image: "/projects/studentmanagement.png"
    }
  ],
  skills: [
    {
      group: "Frontend",
      tags: ["React", "Vite", "HTML5", "CSS3", "Tailwind CSS", "TypeScript", "Figma"]
    },
    {
      group: "Backend",
      tags: ["Node.js", "Express.js", "FastAPI", "Python", "REST APIs"]
    },
    {
      group: "AI / GenAI",
      tags: ["LangChain", "LangGraph", "LangSmith", "Groq", "Gemini 2.0", "Whisper", "Hugging Face", "FAISS", "LLMs", "RAG Pipelines"]
    },
    {
      group: "Database",
      tags: ["MongoDB", "MySQL", "Prisma ORM", "SQL", "Mongoose"]
    },
    {
      group: "DevTools",
      tags: ["Git", "GitHub", "GitHub Actions", "Postman", "Vercel", "Render"]
    },
    {
      group: "Creative",
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
      image: "/certifications/generative-ai-certificate.png"
    },
    {
      title: "Python Head Start",
      issuer: "Newton School",
      date: "Sep 2024",
      description: "Comprehensive python programming foundation covering data structures, OOP, and algorithms.",
      tags: ["Python", "Algorithms", "OOP"],
      icon: Code2,
      image: "/certifications/python-certificate.png"
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
