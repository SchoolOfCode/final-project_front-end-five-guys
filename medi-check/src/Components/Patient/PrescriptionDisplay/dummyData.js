let dummy = [
  {
    name: 'simvastatin',
    dosage: '200',
    measurement: 'mg',
    freq1: '2',
    freq2: 'day',
    status: 'paused',
  },
  {
    name: 'Irinotecan',
    dosage: '200',
    measurement: 'mg',
    freq1: '2',
    freq2: 'day',
    status: 'paused',
  },
  {
    name: 'simvastatin',
    dosage: '200',
    measurement: 'mg',
    freq1: '2',
    freq2: 'day',
    status: 'paused',
  },
  {
    name: 'apixaban',
    dosage: '400',
    measurement: 'mg',
    freq1: '2',
    freq2: 'day',
    status: 'paused',
  },
  {
    name: 'atorvastatin',
    dosage: '100',
    measurement: 'ml',
    freq1: '3',
    freq2: 'week',
    status: 'active',
  },
  {
    name: 'resveratrol',
    dosage: '1',
    measurement: 'puff',
    freq1: '3',
    freq2: 'day',
    status: 'active',
  },
  {
    name: 'acetaminophen',
    dosage: '10',
    measurement: 'mg',
    freq1: '3',
    freq2: 'hour',
    status: 'active',
  },
  {
    name: 'fluconazole',
    dosage: '1000',
    measurement: 'mg',
    freq1: '1',
    freq2: 'hour',
    status: 'active',
  },
  {
    name: 'simvastatin',
    dosage: '200',
    measurement: 'mg',
    freq1: '2',
    freq2: 'day',
    status: 'active',
  },
  {
    name: 'Ciprofloxacin',
    dosage: '200',
    measurement: 'mg',
    freq1: '2',
    freq2: 'day',
    status: 'active',
  },
  {
    name: 'tiZANidine',
    dosage: '250',
    measurement: 'mg',
    freq1: '3',
    freq2: 'day',
    status: 'inactive',
  },
  {
    name: 'Gliclazide',
    dosage: '200',
    measurement: 'mg',
    freq1: '5',
    freq2: 'day',
    status: 'inactive',
  },
  {
    name: 'Ramelteon',
    dosage: '200',
    measurement: 'mg',
    freq1: '5',
    freq2: 'day',
    status: 'inactive',
  },
  {
    name: 'fluvoxaMINE',
    dosage: '200',
    measurement: 'mg',
    freq1: '5',
    freq2: 'day',
    status: 'inactive',
  },
  {
    name: 'Rifampin',
    dosage: '200',
    measurement: 'mg',
    freq1: '5',
    freq2: 'day',
    status: 'active',
  },
  {
    name: 'ritonavir',
    dosage: '200',
    measurement: 'mg',
    freq1: '5',
    freq2: 'day',
    status: 'paused',
  },
];

let testInteractions = [
  {
    comment:
      'Drug1 (rxcui = 36567, name = simvastatin, tty = IN). Drug2 (rxcui = 85762, name = ritonavir, tty = IN). Drug1 is resolved to simvastatin, Drug2 is resolved to ritonavir and interaction asserted in ONCHigh between simvastatin and ritonavir.',
    minConcept: [
      {
        rxcui: '36567',
        name: 'simvastatin',
        tty: 'IN',
      },
      {
        rxcui: '85762',
        name: 'ritonavir',
        tty: 'IN',
      },
    ],
    interactionPair: [
      {
        interactionConcept: [
          {
            minConceptItem: {
              rxcui: '36567',
              name: 'simvastatin',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'NA',
              name: 'simvastatin',
              url: 'NA',
            },
          },
          {
            minConceptItem: {
              rxcui: '85762',
              name: 'ritonavir',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'NA',
              name: 'ritonavir',
              url: 'NA',
            },
          },
        ],
        severity: 'high',
        description: 'HMG Co-A reductase inhibitors - CYP3A4 inhibitors',
      },
    ],
  },
  {
    comment:
      'Drug1 (rxcui = 2551, name = ciprofloxacin, tty = IN). Drug2 (rxcui = 57258, name = tizanidine, tty = IN). Drug1 is resolved to ciprofloxacin, Drug2 is resolved to tizanidine and interaction asserted in ONCHigh between ciprofloxacin and tizanidine.',
    minConcept: [
      {
        rxcui: '2551',
        name: 'ciprofloxacin',
        tty: 'IN',
      },
      {
        rxcui: '57258',
        name: 'tizanidine',
        tty: 'IN',
      },
    ],
    interactionPair: [
      {
        interactionConcept: [
          {
            minConceptItem: {
              rxcui: '2551',
              name: 'ciprofloxacin',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'NA',
              name: 'ciprofloxacin',
              url: 'NA',
            },
          },
          {
            minConceptItem: {
              rxcui: '57258',
              name: 'tizanidine',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'NA',
              name: 'tizanidine',
              url: 'NA',
            },
          },
        ],
        severity: 'high',
        description: 'Tizanidine - CYP 1A2 inhibitors',
      },
    ],
  },
  {
    comment:
      'Drug1 (rxcui = 42355, name = fluvoxamine, tty = IN). Drug2 (rxcui = 57258, name = tizanidine, tty = IN). Drug1 is resolved to fluvoxamine, Drug2 is resolved to tizanidine and interaction asserted in ONCHigh between fluvoxamine and tizanidine.',
    minConcept: [
      {
        rxcui: '42355',
        name: 'fluvoxamine',
        tty: 'IN',
      },
      {
        rxcui: '57258',
        name: 'tizanidine',
        tty: 'IN',
      },
    ],
    interactionPair: [
      {
        interactionConcept: [
          {
            minConceptItem: {
              rxcui: '42355',
              name: 'fluvoxamine',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'NA',
              name: 'fluvoxamine',
              url: 'NA',
            },
          },
          {
            minConceptItem: {
              rxcui: '57258',
              name: 'tizanidine',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'NA',
              name: 'tizanidine',
              url: 'NA',
            },
          },
        ],
        severity: 'high',
        description: 'Tizanidine - CYP 1A2 inhibitors',
      },
    ],
  },
  {
    comment:
      'Drug1 (rxcui = 2551, name = ciprofloxacin, tty = IN). Drug2 (rxcui = 596205, name = ramelteon, tty = IN). Drug1 is resolved to ciprofloxacin, Drug2 is resolved to ramelteon and interaction asserted in ONCHigh between ciprofloxacin and ramelteon.',
    minConcept: [
      {
        rxcui: '2551',
        name: 'ciprofloxacin',
        tty: 'IN',
      },
      {
        rxcui: '596205',
        name: 'ramelteon',
        tty: 'IN',
      },
    ],
    interactionPair: [
      {
        interactionConcept: [
          {
            minConceptItem: {
              rxcui: '2551',
              name: 'ciprofloxacin',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'NA',
              name: 'ciprofloxacin',
              url: 'NA',
            },
          },
          {
            minConceptItem: {
              rxcui: '596205',
              name: 'ramelteon',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'NA',
              name: 'ramelteon',
              url: 'NA',
            },
          },
        ],
        severity: 'high',
        description: 'Ramelteon - specific CYP1A2 inhibitors',
      },
    ],
  },
  {
    comment:
      'Drug1 (rxcui = 36567, name = simvastatin, tty = IN). Drug2 (rxcui = 4450, name = fluconazole, tty = IN). Drug1 is resolved to simvastatin, Drug2 is resolved to fluconazole and interaction asserted in ONCHigh between simvastatin and fluconazole.',
    minConcept: [
      {
        rxcui: '36567',
        name: 'simvastatin',
        tty: 'IN',
      },
      {
        rxcui: '4450',
        name: 'fluconazole',
        tty: 'IN',
      },
    ],
    interactionPair: [
      {
        interactionConcept: [
          {
            minConceptItem: {
              rxcui: '36567',
              name: 'simvastatin',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'NA',
              name: 'simvastatin',
              url: 'NA',
            },
          },
          {
            minConceptItem: {
              rxcui: '4450',
              name: 'fluconazole',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'NA',
              name: 'fluconazole',
              url: 'NA',
            },
          },
        ],
        severity: 'high',
        description: 'HMG Co-A reductase inhibitors - CYP3A4 inhibitors',
      },
    ],
  },
  {
    comment:
      'Drug1 (rxcui = 2551, name = ciprofloxacin, tty = IN). Drug2 (rxcui = 4450, name = fluconazole, tty = IN). Drug1 is resolved to ciprofloxacin, Drug2 is resolved to fluconazole and interaction asserted in ONCHigh between ciprofloxacin and fluconazole.',
    minConcept: [
      {
        rxcui: '2551',
        name: 'ciprofloxacin',
        tty: 'IN',
      },
      {
        rxcui: '4450',
        name: 'fluconazole',
        tty: 'IN',
      },
    ],
    interactionPair: [
      {
        interactionConcept: [
          {
            minConceptItem: {
              rxcui: '2551',
              name: 'ciprofloxacin',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'NA',
              name: 'ciprofloxacin',
              url: 'NA',
            },
          },
          {
            minConceptItem: {
              rxcui: '4450',
              name: 'fluconazole',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'NA',
              name: 'fluconazole',
              url: 'NA',
            },
          },
        ],
        severity: 'high',
        description: 'QT prolonging agents - QT prolonging agents',
      },
    ],
  },
  {
    comment:
      'Drug1 (rxcui = 85762, name = ritonavir, tty = IN). Drug2 (rxcui = 9384, name = rifampin, tty = IN). Drug1 is resolved to ritonavir, Drug2 is resolved to rifampin and interaction asserted in ONCHigh between ritonavir and rifampin.',
    minConcept: [
      {
        rxcui: '85762',
        name: 'ritonavir',
        tty: 'IN',
      },
      {
        rxcui: '9384',
        name: 'rifampin',
        tty: 'IN',
      },
    ],
    interactionPair: [
      {
        interactionConcept: [
          {
            minConceptItem: {
              rxcui: '85762',
              name: 'ritonavir',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'NA',
              name: 'ritonavir',
              url: 'NA',
            },
          },
          {
            minConceptItem: {
              rxcui: '9384',
              name: 'rifampin',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'NA',
              name: 'rifampin',
              url: 'NA',
            },
          },
        ],
        severity: 'high',
        description: 'Strong CYP3A4 inducers - protease inhibitors',
      },
    ],
  },
  {
    comment:
      'Drug1 (rxcui = 42355, name = fluvoxamine, tty = IN). Drug2 (rxcui = 596205, name = ramelteon, tty = IN). Drug1 is resolved to fluvoxamine, Drug2 is resolved to ramelteon and interaction asserted in ONCHigh between fluvoxamine and ramelteon.',
    minConcept: [
      {
        rxcui: '42355',
        name: 'fluvoxamine',
        tty: 'IN',
      },
      {
        rxcui: '596205',
        name: 'ramelteon',
        tty: 'IN',
      },
    ],
    interactionPair: [
      {
        interactionConcept: [
          {
            minConceptItem: {
              rxcui: '42355',
              name: 'fluvoxamine',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'NA',
              name: 'fluvoxamine',
              url: 'NA',
            },
          },
          {
            minConceptItem: {
              rxcui: '596205',
              name: 'ramelteon',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'NA',
              name: 'ramelteon',
              url: 'NA',
            },
          },
        ],
        severity: 'high',
        description: 'Ramelteon - specific CYP1A2 inhibitors',
      },
    ],
  },
  {
    comment:
      'Drug1 (rxcui = 3443, name = diltiazem, tty = IN). Drug2 (rxcui = 36567, name = simvastatin, tty = IN). Drug1 is resolved to diltiazem, Drug2 is resolved to simvastatin and interaction asserted in ONCHigh between diltiazem and simvastatin.',
    minConcept: [
      {
        rxcui: '3443',
        name: 'diltiazem',
        tty: 'IN',
      },
      {
        rxcui: '36567',
        name: 'simvastatin',
        tty: 'IN',
      },
    ],
    interactionPair: [
      {
        interactionConcept: [
          {
            minConceptItem: {
              rxcui: '3443',
              name: 'diltiazem',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'NA',
              name: 'diltiazem',
              url: 'NA',
            },
          },
          {
            minConceptItem: {
              rxcui: '36567',
              name: 'simvastatin',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'NA',
              name: 'simvastatin',
              url: 'NA',
            },
          },
        ],
        severity: 'high',
        description: 'HMG Co-A reductase inhibitors - CYP3A4 inhibitors',
      },
    ],
  },
];
export { dummy, testInteractions };
