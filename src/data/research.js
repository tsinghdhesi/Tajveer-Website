export const research = [
  {
    id: 'sidecar',
    title: 'Agentic AI Privacy Enforcement (SIDECAR)',
    chip: 'Active · 2026',
    summary:
      'Building SIDECAR, a context-aware privacy enforcement layer that sits in the network path of LLM agents and blocks or redacts outbound information that is inappropriate for its recipient, across email, web posts, and agent-to-agent messages.',
    body: [
      'SIDECAR is framework-agnostic by design, so its protections hold even when an agent is compromised, misconfigured, or simply over-helpful. It combines Docker network isolation and iptables interception with a curated information-type taxonomy, recipient-specific disclosure norms, and LLM labelers.',
      'In pilot results, SIDECAR reduced information leakage by 84 percent on PrivacyLens (470 cases) while retaining 85 percent of task utility, and by 75 percent on AgentDAM.',
      'The result is an auditable, fail-closed control aligned with NIST AI RMF guidance and with emerging FTC and state attorney general enforcement around AI privacy harms.',
    ],
    tags: ['LLM agents', 'privacy', 'network enforcement', 'NIST AI RMF'],
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
    id: 'youtube-age-estimation',
    title: 'YouTube AI Age-Estimation Audit',
    chip: 'Active · NOISE Lab',
    summary:
      'A black-box audit of YouTube’s production AI age-estimation system, measuring which behavioral signals (search, viewing, app installs) cause self-attested adult accounts to be reclassified as minors.',
    body: [
      'Regulators have questioned the accuracy of this deployed system, but no prior work has measured it.',
      'The audit relies on a scalable sock-puppet measurement harness built on Android emulators with accessibility-driven UI automation, replicated across multiple jurisdictions.',
      'The findings give regulators an empirical basis to assess the necessity and proportionality of behavioral age inference under GDPR data minimisation, EU DSA Art. 28, the UK Online Safety Act, and Australia’s social media minimum-age law.',
    ],
    tags: ['platform audits', 'age assurance', 'Android automation', 'online safety policy'],
    links: [],
  },
]
