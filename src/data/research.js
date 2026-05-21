export const currentResearch = [
  {
    id: 'agentic-ai-leakage',
    title: 'Agentic AI Data Leakage Benchmarking',
    dateRange: 'March 2026 – Present',
    status: 'active',
    shortDesc:
      'Designing a benchmark suite to measure data leakage in agentic LLM systems on realistic information-relay tasks — email drafting, social media posts — where inputs mix relevant and irrelevant sensitive PII. Evaluating defenses to characterize the utility-to-defense-efficacy tradeoff relevant to NIST AI RMF and FTC/state-AG enforcement.',
    bullets: [
      'Benchmark quantifies how often agents leak irrelevant PII content despite explicit instructions, across realistic information-relay scenarios (email drafting, social media posts).',
      'Spans open-source (7B–32B parameter) and frontier closed-source agents, enabling utility-vs-leakage comparisons across deployment tiers.',
      'Evaluating candidate defenses to characterize the utility-to-defense-efficacy tradeoff — relevant to NIST AI RMF guidance and emerging FTC/state-AG enforcement around AI privacy harms.',
    ],
    tags: ['Agentic AI', 'Privacy', 'Benchmarking', 'LLMs'],
  },
  {
    id: 'transformer-age-gate',
    title: 'Transformer-Based Web Scraping for Age-Gate Detection',
    dateRange: 'September 2025 – Present',
    status: 'active',
    shortDesc:
      'Extending prior thesis work to detect age gates at deeper purchase-flow interaction points — cart, checkout, account creation — using a transformer-based scraping agent that navigates without site-specific heuristics. Motivated by increasing legislative attention to mid-flow age verification.',
    bullets: [
      'Moves beyond site-arrival detection to mid-flow interaction points: cart pages, checkout flows, and account-creation gates.',
      'Transformer-based agent navigates purchase flows without site-specific rule engineering, generalizing across diverse site architectures.',
      'Motivated by legislative developments including UK LCCP 2025 and NSW/Queensland delivery rules requiring verification at point-of-sale.',
    ],
    tags: ['Web Measurement', 'Age Verification', 'Policy'],
  },
  {
    id: 'content-moderation-audit',
    title: 'Content Moderation Policy Auditing',
    dateRange: 'September 2025 – Present',
    status: 'active',
    shortDesc:
      'Contributing to lab-wide work auditing content-moderation policy enforcement across major platforms, measuring gaps between stated community guidelines and observed practice.',
    bullets: [
      'Systematic measurement of enforcement gaps between platform community guidelines and actual moderation decisions.',
      'Cross-platform comparison of policy consistency at scale.',
      'Part of the UChicago NOISE Lab\'s broader agenda on online safety measurement.',
    ],
    tags: ['Web Measurement', 'Content Moderation', 'Policy'],
  },
]

export const pastResearch = [
  {
    id: 'senior-thesis',
    title: 'Measuring the Variety of Website Arrival Age Gates',
    dateRange: 'August 2024 – May 2025',
    status: 'completed',
    shortDesc:
      'Built an automated pipeline (Selenium + headless Chromium + GPT-4o-mini) measuring site-arrival age gates across 4,985 international websites in the e-cigarette, alcohol, and gambling industries. Found 100% of alcohol industry age gates relied on trivial self-attestation. Led to publication at ConPro 2025.',
    bullets: [
      'Cataloged 595 age gates across 8 ccTLDs; pipeline combined Selenium-based scraping with GPT-4o-mini classifiers for gate detection and categorization.',
      'Key finding: 100% of alcohol industry age gates in the sample relied on trivial self-attestation with no technical enforcement.',
      'Findings translated into policy framing tied to specific jurisdictions: Canada Vaping Promotion Regulations, UK Gambling Commission LCCP, NSW alcohol delivery rules.',
      'Published at the Workshop on Technology and Consumer Protection (ConPro), co-located with IEEE S&P 2025.',
    ],
    tags: ['Web Scraping', 'Age Verification', 'Policy', 'Automation'],
    publication: {
      label: 'ConPro @ IEEE S&P 2025',
      href: '#',
    },
  },
  {
    id: 'rna-deep-learning',
    title: 'Deep Learning of Ligand-bound RNA Tertiary Structures',
    dateRange: '2023',
    status: 'completed',
    shortDesc:
      'Co-authored study comparing deep learning model performance on ligand-bound vs. unbound RNA tertiary structures using gRNAde software. Published on bioRxiv (2023).',
    bullets: [
      'Compared model performance and generalization across ligand-bound and unbound RNA structure prediction using gRNAde.',
      'Characterized how structural divergence between bound/unbound states affects learned representations.',
      'Published on bioRxiv; DOI: 10.1101/2023.09.13.557627.',
    ],
    tags: ['Deep Learning', 'Bioinformatics', 'RNA Structure'],
    publication: {
      label: 'bioRxiv 2023',
      href: 'https://doi.org/10.1101/2023.09.13.557627',
    },
  },
]
