export const research = [
  {
    id: 'agentic-ai-leakage',
    title: 'Agentic AI Data Leakage Benchmarking',
    chip: 'Active · 2026',
    summary:
      'Designing a benchmark that measures whether LLM agents leak irrelevant sensitive information while completing realistic tasks.',
    body: [
      'The benchmark is a task suite spanning realistic workflows such as email drafting and social posts. Each task mixes information the agent needs with sensitive context that is irrelevant to the task, and measures whether the model discloses it anyway.',
      'The suite covers open-source models from 7B to 32B parameters alongside frontier closed-source models, enabling utility-to-leakage comparisons across deployment tiers.',
      'Planned defense evaluations are framed around the NIST AI RMF, FTC enforcement, and state attorney general activity, so the results speak directly to how AI privacy harms are assessed in practice.',
    ],
    tags: ['LLM agents', 'privacy', 'benchmarking', 'NIST AI RMF'],
    links: [],
  },
  {
    id: 'age-gate-measurement',
    title: 'Online Age-Gate Measurement',
    chip: 'Ongoing programme',
    summary:
      'One evolving research programme measuring how websites in regulated industries verify the age of their visitors, from a senior thesis to a published workshop paper to a current extension.',
    body: [
      'The programme began as a senior thesis: an automated measurement pipeline built on Selenium, headless Chromium, and GPT-4o-mini classifiers that identified and classified site-arrival age gates across 4,985 international websites in the e-cigarette, alcohol, and gambling industries.',
      'The published study catalogued 595 age gates across 8 country-code TLDs, with virtually all relying on trivial self-attestation. Screenshot-based detection reached 95.5 percent accuracy against 78.0 percent for HTML-only classification. Findings were tied to specific jurisdictional regimes, including Canada’s Vaping Promotion Regulations, the UK Gambling Commission LCCP, and NSW alcohol delivery rules.',
      'The current extension uses a transformer-based scraping agent to detect age gates at deeper purchase-flow interaction points such as cart, checkout, and account creation, navigating without site-specific heuristics. It is motivated by growing legislative attention to mid-flow verification.',
    ],
    tags: ['web measurement', 'Selenium', 'LLM classifiers', 'online safety policy'],
    links: [
      {
        label: 'ConPro 2025 paper',
        href: 'https://conpro25.ieee-security.org/papers/dhesi-conpro25.pdf',
      },
    ],
  },
  {
    id: 'content-moderation-auditing',
    title: 'Content Moderation Auditing',
    chip: 'NOISE Lab',
    summary:
      'Lab-wide work auditing content moderation policy enforcement across major platforms.',
    body: [
      'The work measures gaps between platforms’ stated community guidelines and observed enforcement practice.',
      'It sits within the NOISE Lab’s broader programme on content moderation across traditional platforms and emerging AI systems.',
    ],
    tags: ['platform audits', 'content moderation', 'policy'],
    links: [],
  },
]
