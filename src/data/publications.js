export const publications = [
  {
    id: 'arxiv-2026-agent-networking',
    chip: 'arXiv 2026',
    title: 'Rethinking Agent Security as a Networking Problem',
    authors: ['V. Tran*', 'T. Sharma*', 'T. S. Dhesi*', 'N. Feamster'],
    note: '* Equal contribution',
    links: [
      {
        label: 'arXiv',
        href: 'https://arxiv.org/abs/2608.12172',
      },
      {
        label: 'PDF',
        href: 'https://arxiv.org/pdf/2608.12172',
      },
    ],
    bibtex: `@misc{tran2026agentsecurity,
  author        = {Tran, Van and Sharma, Taveesh and Dhesi, Tajveer Singh and Feamster, Nick},
  title         = {Rethinking Agent Security as a Networking Problem},
  year          = {2026},
  eprint        = {2608.12172},
  archivePrefix = {arXiv},
  primaryClass  = {cs.MA},
  url           = {https://arxiv.org/abs/2608.12172}
}`,
  },
  {
    id: 'thesis-2025',
    chip: 'Thesis 2025',
    title:
      'Measuring the Variety of Website Arrival Age Gates in the E-Cigarette, Alcohol and Gambling Industry',
    authors: ['T. S. Dhesi', 'N. Apthorpe', 'A. Gember-Jacobson'],
    links: [
      {
        label: 'PDF',
        href: `${import.meta.env.BASE_URL}thesis.pdf`,
      },
    ],
    bibtex: `@thesis{dhesi2025thesis,
  author      = {Dhesi, Tajveer Singh and Apthorpe, Noah and Gember-Jacobson, Aaron},
  title       = {Measuring the Variety of Website Arrival Age Gates in the E-Cigarette, Alcohol and Gambling Industry},
  type        = {Bachelor's Thesis (Senior Honors Thesis, COSC 492)},
  institution = {Colgate University},
  year        = {2025},
  url         = {https://tsinghdhesi.github.io/Tajveer-Website/thesis.pdf}
}`,
  },
  {
    id: 'conpro-2025',
    chip: 'ConPro 2025',
    title: 'Measuring the Prevalence and Variety of Online Age Gates',
    authors: ['T. S. Dhesi', 'N. Apthorpe'],
    links: [
      {
        label: 'PDF',
        href: 'https://conpro25.ieee-security.org/papers/dhesi-conpro25.pdf',
      },
      {
        label: 'Workshop',
        href: 'https://conpro25.ieee-security.org/',
      },
    ],
    bibtex: `@inproceedings{dhesi2025agegates,
  author    = {Dhesi, Tajveer Singh and Apthorpe, Noah},
  title     = {Measuring the Prevalence and Variety of Online Age Gates},
  booktitle = {Workshop on Technology and Consumer Protection (ConPro)},
  year      = {2025},
  url       = {https://conpro25.ieee-security.org/papers/dhesi-conpro25.pdf}
}`,
  },
  {
    id: 'biorxiv-2023',
    chip: 'bioRxiv 2023',
    title:
      'Deep Learning of Ligand-bound RNA Tertiary Structures Diverges from Learning Unbound Ones: A Case Study Using The gRNAde Software',
    authors: ['T. S. Dhesi', 'A. W. Bannister', 'A. Manzourolajdad'],
    links: [
      {
        label: 'DOI',
        href: 'https://doi.org/10.1101/2023.09.13.557627',
      },
    ],
    bibtex: `@article{dhesi2023grnade,
  author  = {Dhesi, Tajveer Singh and Bannister, A. W. and Manzourolajdad, Amirhossein},
  title   = {Deep Learning of Ligand-bound RNA Tertiary Structures Diverges from Learning Unbound Ones: A Case Study Using The gRNAde Software},
  journal = {bioRxiv},
  year    = {2023},
  doi     = {10.1101/2023.09.13.557627},
  url     = {https://doi.org/10.1101/2023.09.13.557627}
}`,
  },
]
