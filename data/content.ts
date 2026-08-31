export const siteContent = {
  hero: {
    heading: "No work? no internship? This is how you get \"Hands-on\" real work experience",
    subheading: "Spend 12 weeks building AI agents solving real business problems.",
    body: "Work with a team of 5. Ship real agent-to-agent systems. Build a portfolio that proves what you can do. Free, remote, and you own your work. This is your chance to showcase your talent and stand out."
  },

  whatIsA2A: {
    heading: "What is A2A development?",
    body: "Agentic development means building AI agents that can plan and act on their own, not just respond to prompts. A2A (Agent-to-Agent) is how those agents talk to other agents - even ones built by completely different teams or companies. They discover each other, share information, and work together. The A2A protocol went v1.0 in March 2026, so almost nobody has real experience with it yet."
  },

  opportunity: {
    heading: "12 weeks to prove what you can build",
    body: "This isn't a course. You'll work on a real team of 5, building production A2A systems that integrate with two other teams. The work is yours. The code is yours. Use your creativity, ship real features, and build proof that gets you hired.",
    stats: [
      { label: "Duration", value: "12 weeks", sublabel: "~12 hours/week" },
      { label: "Team size", value: "5 people", sublabel: "3 teams total" },
      { label: "Cost", value: "Free", sublabel: "Remote, any timezone" },
      { label: "Your work", value: "You own it", sublabel: "Portfolio-ready" }
    ]
  },


  why: {
    title: "What you'll walk away with",
    tagline: "Build proof that gets you hired",
    points: [
      {
        title: "Production code in your portfolio",
        description: "Real GitHub commits, real architecture decisions, real systems running in production. Not course projects - actual work you can show employers."
      },
      {
        title: "References from working engineers",
        description: "Engineers who've reviewed your code and seen you ship will vouch for you. That's worth more than any certificate."
      },
      {
        title: "Experience in a brand new field",
        description: "A2A went v1.0 in March 2026. Nobody has years of experience yet. 12 weeks of real A2A work puts you ahead of most candidates."
      }
    ]
  },

  projects: {
    title: "What you'll build",
    subtitle: "Teams of 5 build one of three real A2A systems. All three projects work together - you'll coordinate with other teams, integrate your agents, and ship real features.",
    items: [
      {
        id: "sourcing",
        title: "Sourcing Desk",
        tagline: "Buyer-side procurement agent",
        description: "Takes a requirement in plain language, discovers supplier agents, requests quotes, compares them, and hands a shortlist to a human.",
        whyA2A: "Buyers and suppliers are different organizations. No shared database, no shared schema. Discovery happens through signed Agent Cards, and trust has to be established between parties that have never met.",
        delivers: [
          "Requirement parsing from fuzzy human intent",
          "Agent discovery and card validation",
          "Quote negotiation across untrusted peers",
          "PO data sharing with Team 3"
        ]
      },
      {
        id: "triage",
        title: "Triage Desk",
        tagline: "On-call incident response",
        description: "When an alert fires, orchestrates specialist agents — logs, diffs, runbooks, dependency health — and returns a ranked hypothesis of what broke and why.",
        whyA2A: "Specialists are owned separately, run on different infrastructure, and fail independently. The system has to stay useful when a specialist is the thing that's down.",
        delivers: [
          "Orchestration under time pressure",
          "Graceful degradation when specialists fail",
          "Approval routing via Team 3",
          "Peer health signals for all teams"
        ]
      },
      {
        id: "backoffice",
        title: "Back Office Desk",
        tagline: "Purchase-to-pay automation",
        description: "Invoices arrive in whatever shape the world sends them, get matched against POs, exceptions get flagged, approvals get routed, and clean items get prepared for payment.",
        whyA2A: "Partial failure is unavoidable. If matching succeeds but approval routing fails, the invoice is half-committed. That's the agent equivalent of a distributed transaction.",
        delivers: [
          "Invoice extraction from hostile formats",
          "PO matching with fuzzy reconciliation",
          "Compensating actions for partial failures",
          "Approval routing for Teams 1 & 2"
        ]
      }
    ],
    opportunityTitle: "Build a portfolio that stands out",
    opportunityBody: "Employers want to see what you can build. After 12 weeks, you'll have production code, real references, and a case study of something you shipped. This is portfolio work that proves your abilities.",
    artifacts: [
      "Live AI agent in production",
      "Real GitHub commit history",
      "Evaluation metrics & test suite",
      "Case study of a failure you fixed",
      "Reference from engineers who reviewed your code"
    ]
  },

  roles: {
    title: "Choose your role",
    description: "Each team has 5 people across these roles. Pick what you want to own and showcase your strengths.",
    cards: [
      {
        id: 'product-lead',
        title: "Product Lead",
        tagline: "Define what your agent can do",
        responsibilities: [
          "Set the capability boundaries - what your agent automates vs what requires human input",
          "Design the user experience - how humans interact with your AI system",
          "Coordinate with other teams to ensure integrations serve real use cases"
        ],
        whatYoullShow: "Product thinking, user empathy, and ability to scope AI capabilities realistically",
        goodFit: "You like defining what to build and why",
        notGoodFit: "You'd rather be given clear specs"
      },
      {
        id: 'lead-engineer',
        title: "Lead Engineer",
        tagline: "Own the architecture and integrations",
        responsibilities: [
          "Design the system architecture and interface contracts with other teams",
          "Coordinate technical decisions across your team and with dependent teams",
          "Make integration and reliability tradeoffs as the system evolves"
        ],
        whatYoullShow: "System design skills, technical leadership, and cross-team collaboration",
        goodFit: "You want to own technical direction",
        notGoodFit: "You prefer focused individual work"
      },
      {
        id: 'engineer',
        title: "Engineer",
        tagline: "Build the agent or prove it works",
        responsibilities: [
          "Capability engineer: Build the core AI features, handle edge cases, make it work in production",
          "Reliability engineer: Design evaluations, build monitoring, ensure quality and observability",
          "Both roles collaborate to ship features that actually work"
        ],
        whatYoullShow: "Coding ability, problem-solving, and practical AI engineering skills",
        goodFit: "You love building or measuring things",
        notGoodFit: "You want to work alone"
      },
      {
        id: 'marketing-lead',
        title: "Marketing Lead",
        tagline: "Position your agent for discovery",
        responsibilities: [
          "Write the Agent Card - how other agents discover and understand your capabilities",
          "Document your agent's value proposition for both humans and AI consumers",
          "Build trust in a probabilistic system - communicate what it does and how well it works"
        ],
        whatYoullShow: "Communication skills, technical writing, and ability to position new technology",
        goodFit: "You like explaining complex things clearly",
        notGoodFit: "You prefer backend technical work"
      }
    ]
  },

  faq: {
    title: "Common questions",
    items: [
      {
        question: "What does \"hands-on real work experience\" actually mean?",
        answer: "It means learning by doing the actual work, not studying about it. Four things make it real: (1) Real stakes - your code gets deployed and used, not thrown away after grading. (2) Messy and unpredictable - requirements are ambiguous, tools break, other people's work affects yours. You figure things out as you go. (3) You produce evidence - code, portfolio pieces, references from people who worked with you. Not just a certificate. (4) Real constraints - time pressure, collaboration, dependencies you don't control, incomplete information. These are the conditions of actual jobs."
      },
      {
        question: "Is it really free?",
        answer: "Yes, completely free. Remote, any timezone. We're running this to build a talent pipeline, and we want to see what you can build."
      },
      {
        question: "Do I need A2A experience?",
        answer: "No. A2A is brand new (v1.0 in March 2026), so almost nobody has experience. If you can code and work with a team, you're qualified."
      },
      {
        question: "What if I can't finish or the project struggles?",
        answer: "You still walk away with the work you did, the code you wrote, and references from engineers who saw you contribute. The experience is what matters."
      },
      {
        question: "How much time does it take?",
        answer: "About 12 hours per week for 12 weeks. It's designed to fit alongside studies or another commitment. Just be realistic about what you can commit to."
      },
      {
        question: "Will this help me get a job?",
        answer: "It gives you real production work to show employers - code, references, and proof you can ship. That's valuable whether you're interviewing with us or anyone else."
      }
    ]
  }
};

export const formFields = {
  title: "Apply to 10X-your-Skills",
  engineerQuestion: {
    label: "Which is more you?",
    options: [
      "I like making messy things work",
      "I don't trust anything I can't measure"
    ]
  },
  roleOptions: [
    { id: 'product-lead', label: 'Product Lead' },
    { id: 'lead-engineer', label: 'Lead Engineer' },
    { id: 'engineer', label: 'Engineer' },
    { id: 'marketing-lead', label: 'Marketing Lead' }
  ]
};
