let dummy = [
  'amoxicillin',
  'apixaban',
  'atorvastatin',
  'resveratrol',
  'acetaminophen',
  'aclidinium',
  'benzydamine',
  'Bisoprolol',
  'Chlorhexidine',
  'Codeine',
  'Cyanocobalamin',
  'Doxycycline',
  'Flucloxacillin',
  'Diltiazem',
  'Heparinoid',
  'Gliclazide',
];

let testInteractions = [
  {
    comment:
      'Drug1 (rxcui = 1364430, name = apixaban, tty = IN). Drug2 (rxcui = 83367, name = atorvastatin, tty = IN). Drug1 is resolved to apixaban, Drug2 is resolved to atorvastatin and interaction asserted in DrugBank between Apixaban and Atorvastatin.',
    minConcept: [
      {
        rxcui: '1364430',
        name: 'apixaban',
        tty: 'IN',
      },
      {
        rxcui: '83367',
        name: 'atorvastatin',
        tty: 'IN',
      },
    ],
    interactionPair: [
      {
        interactionConcept: [
          {
            minConceptItem: {
              rxcui: '1364430',
              name: 'apixaban',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'DB06605',
              name: 'Apixaban',
              url: 'https://go.drugbank.com/drugs/DB06605#interactions',
            },
          },
          {
            minConceptItem: {
              rxcui: '83367',
              name: 'atorvastatin',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'DB01076',
              name: 'Atorvastatin',
              url: 'https://go.drugbank.com/drugs/DB01076#interactions',
            },
          },
        ],
        severity: 'N/A',
        description:
          'The metabolism of Apixaban can be decreased when combined with Atorvastatin.',
      },
    ],
  },
  {
    comment:
      'Drug1 (rxcui = 11248, name = vitamin B12, tty = IN). Drug2 (rxcui = 1303098, name = aclidinium, tty = IN). Drug1 is resolved to vitamin B12, Drug2 is resolved to aclidinium and interaction asserted in DrugBank between Cyanocobalamin and Aclidinium.',
    minConcept: [
      {
        rxcui: '11248',
        name: 'vitamin B12',
        tty: 'IN',
      },
      {
        rxcui: '1303098',
        name: 'aclidinium',
        tty: 'IN',
      },
    ],
    interactionPair: [
      {
        interactionConcept: [
          {
            minConceptItem: {
              rxcui: '11248',
              name: 'vitamin B12',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'DB00115',
              name: 'Cyanocobalamin',
              url: 'https://go.drugbank.com/drugs/DB00115#interactions',
            },
          },
          {
            minConceptItem: {
              rxcui: '1303098',
              name: 'aclidinium',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'DB08897',
              name: 'Aclidinium',
              url: 'https://go.drugbank.com/drugs/DB08897#interactions',
            },
          },
        ],
        severity: 'N/A',
        description:
          'Cyanocobalamin may decrease the excretion rate of Aclidinium which could result in a higher serum level.',
      },
    ],
  },
  {
    comment:
      'Drug1 (rxcui = 1303098, name = aclidinium, tty = IN). Drug2 (rxcui = 1425, name = benzydamine, tty = IN). Drug1 is resolved to aclidinium, Drug2 is resolved to benzydamine and interaction asserted in DrugBank between Aclidinium and Benzydamine.',
    minConcept: [
      {
        rxcui: '1303098',
        name: 'aclidinium',
        tty: 'IN',
      },
      {
        rxcui: '1425',
        name: 'benzydamine',
        tty: 'IN',
      },
    ],
    interactionPair: [
      {
        interactionConcept: [
          {
            minConceptItem: {
              rxcui: '1303098',
              name: 'aclidinium',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'DB08897',
              name: 'Aclidinium',
              url: 'https://go.drugbank.com/drugs/DB08897#interactions',
            },
          },
          {
            minConceptItem: {
              rxcui: '1425',
              name: 'benzydamine',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'DB09084',
              name: 'Benzydamine',
              url: 'https://go.drugbank.com/drugs/DB09084#interactions',
            },
          },
        ],
        severity: 'N/A',
        description:
          'Benzydamine may decrease the excretion rate of Aclidinium which could result in a higher serum level.',
      },
    ],
  },
  {
    comment:
      'Drug1 (rxcui = 1425, name = benzydamine, tty = IN). Drug2 (rxcui = 19484, name = bisoprolol, tty = IN). Drug1 is resolved to benzydamine, Drug2 is resolved to bisoprolol and interaction asserted in DrugBank between Benzydamine and Bisoprolol.',
    minConcept: [
      {
        rxcui: '1425',
        name: 'benzydamine',
        tty: 'IN',
      },
      {
        rxcui: '19484',
        name: 'bisoprolol',
        tty: 'IN',
      },
    ],
    interactionPair: [
      {
        interactionConcept: [
          {
            minConceptItem: {
              rxcui: '1425',
              name: 'benzydamine',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'DB09084',
              name: 'Benzydamine',
              url: 'https://go.drugbank.com/drugs/DB09084#interactions',
            },
          },
          {
            minConceptItem: {
              rxcui: '19484',
              name: 'bisoprolol',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'DB00612',
              name: 'Bisoprolol',
              url: 'https://go.drugbank.com/drugs/DB00612#interactions',
            },
          },
        ],
        severity: 'N/A',
        description:
          'Benzydamine may decrease the antihypertensive activities of Bisoprolol.',
      },
    ],
  },
  {
    comment:
      'Drug1 (rxcui = 1364430, name = apixaban, tty = IN). Drug2 (rxcui = 19484, name = bisoprolol, tty = IN). Drug1 is resolved to apixaban, Drug2 is resolved to bisoprolol and interaction asserted in DrugBank between Apixaban and Bisoprolol.',
    minConcept: [
      {
        rxcui: '1364430',
        name: 'apixaban',
        tty: 'IN',
      },
      {
        rxcui: '19484',
        name: 'bisoprolol',
        tty: 'IN',
      },
    ],
    interactionPair: [
      {
        interactionConcept: [
          {
            minConceptItem: {
              rxcui: '1364430',
              name: 'apixaban',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'DB06605',
              name: 'Apixaban',
              url: 'https://go.drugbank.com/drugs/DB06605#interactions',
            },
          },
          {
            minConceptItem: {
              rxcui: '19484',
              name: 'bisoprolol',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'DB00612',
              name: 'Bisoprolol',
              url: 'https://go.drugbank.com/drugs/DB00612#interactions',
            },
          },
        ],
        severity: 'N/A',
        description:
          'The serum concentration of Apixaban can be increased when it is combined with Bisoprolol.',
      },
    ],
  },
  {
    comment:
      'Drug1 (rxcui = 1425, name = benzydamine, tty = IN). Drug2 (rxcui = 3443, name = diltiazem, tty = IN). Drug1 is resolved to benzydamine, Drug2 is resolved to diltiazem and interaction asserted in DrugBank between Benzydamine and Diltiazem.',
    minConcept: [
      {
        rxcui: '1425',
        name: 'benzydamine',
        tty: 'IN',
      },
      {
        rxcui: '3443',
        name: 'diltiazem',
        tty: 'IN',
      },
    ],
    interactionPair: [
      {
        interactionConcept: [
          {
            minConceptItem: {
              rxcui: '1425',
              name: 'benzydamine',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'DB09084',
              name: 'Benzydamine',
              url: 'https://go.drugbank.com/drugs/DB09084#interactions',
            },
          },
          {
            minConceptItem: {
              rxcui: '3443',
              name: 'diltiazem',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'DB00343',
              name: 'Diltiazem',
              url: 'https://go.drugbank.com/drugs/DB00343#interactions',
            },
          },
        ],
        severity: 'N/A',
        description:
          'The therapeutic efficacy of Diltiazem can be decreased when used in combination with Benzydamine.',
      },
    ],
  },
  {
    comment:
      'Drug1 (rxcui = 1303098, name = aclidinium, tty = IN). Drug2 (rxcui = 161, name = acetaminophen, tty = IN). Drug1 is resolved to aclidinium, Drug2 is resolved to acetaminophen and interaction asserted in DrugBank between Aclidinium and Acetaminophen.',
    minConcept: [
      {
        rxcui: '1303098',
        name: 'aclidinium',
        tty: 'IN',
      },
      {
        rxcui: '161',
        name: 'acetaminophen',
        tty: 'IN',
      },
    ],
    interactionPair: [
      {
        interactionConcept: [
          {
            minConceptItem: {
              rxcui: '1303098',
              name: 'aclidinium',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'DB08897',
              name: 'Aclidinium',
              url: 'https://go.drugbank.com/drugs/DB08897#interactions',
            },
          },
          {
            minConceptItem: {
              rxcui: '161',
              name: 'acetaminophen',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'DB00316',
              name: 'Acetaminophen',
              url: 'https://go.drugbank.com/drugs/DB00316#interactions',
            },
          },
        ],
        severity: 'N/A',
        description:
          'Acetaminophen may decrease the excretion rate of Aclidinium which could result in a higher serum level.',
      },
    ],
  },
  {
    comment:
      'Drug1 (rxcui = 161, name = acetaminophen, tty = IN). Drug2 (rxcui = 3443, name = diltiazem, tty = IN). Drug1 is resolved to acetaminophen, Drug2 is resolved to diltiazem and interaction asserted in DrugBank between Acetaminophen and Diltiazem.',
    minConcept: [
      {
        rxcui: '161',
        name: 'acetaminophen',
        tty: 'IN',
      },
      {
        rxcui: '3443',
        name: 'diltiazem',
        tty: 'IN',
      },
    ],
    interactionPair: [
      {
        interactionConcept: [
          {
            minConceptItem: {
              rxcui: '161',
              name: 'acetaminophen',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'DB00316',
              name: 'Acetaminophen',
              url: 'https://go.drugbank.com/drugs/DB00316#interactions',
            },
          },
          {
            minConceptItem: {
              rxcui: '3443',
              name: 'diltiazem',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'DB00343',
              name: 'Diltiazem',
              url: 'https://go.drugbank.com/drugs/DB00343#interactions',
            },
          },
        ],
        severity: 'N/A',
        description:
          'The metabolism of Acetaminophen can be decreased when combined with Diltiazem.',
      },
    ],
  },
  {
    comment:
      'Drug1 (rxcui = 3443, name = diltiazem, tty = IN). Drug2 (rxcui = 4816, name = gliclazide, tty = IN). Drug1 is resolved to diltiazem, Drug2 is resolved to gliclazide and interaction asserted in DrugBank between Diltiazem and Gliclazide.',
    minConcept: [
      {
        rxcui: '3443',
        name: 'diltiazem',
        tty: 'IN',
      },
      {
        rxcui: '4816',
        name: 'gliclazide',
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
              id: 'DB00343',
              name: 'Diltiazem',
              url: 'https://go.drugbank.com/drugs/DB00343#interactions',
            },
          },
          {
            minConceptItem: {
              rxcui: '4816',
              name: 'gliclazide',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'DB01120',
              name: 'Gliclazide',
              url: 'https://go.drugbank.com/drugs/DB01120#interactions',
            },
          },
        ],
        severity: 'N/A',
        description:
          'The risk or severity of hypoglycemia can be increased when Diltiazem is combined with Gliclazide.',
      },
    ],
  },
  {
    comment:
      'Drug1 (rxcui = 3443, name = diltiazem, tty = IN). Drug2 (rxcui = 3640, name = doxycycline, tty = IN). Drug1 is resolved to diltiazem, Drug2 is resolved to doxycycline and interaction asserted in DrugBank between Diltiazem and Doxycycline. Drug1 is resolved to diltiazem, Drug2 is resolved to doxycycline anhydrous and interaction asserted in DrugBank between Diltiazem and Doxycycline.',
    minConcept: [
      {
        rxcui: '3443',
        name: 'diltiazem',
        tty: 'IN',
      },
      {
        rxcui: '3640',
        name: 'doxycycline',
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
              id: 'DB00343',
              name: 'Diltiazem',
              url: 'https://go.drugbank.com/drugs/DB00343#interactions',
            },
          },
          {
            minConceptItem: {
              rxcui: '1545992',
              name: 'doxycycline anhydrous',
              tty: 'PIN',
            },
            sourceConceptItem: {
              id: 'DB00254',
              name: 'Doxycycline',
              url: 'https://go.drugbank.com/drugs/DB00254#interactions',
            },
          },
        ],
        severity: 'N/A',
        description:
          'The metabolism of Doxycycline can be decreased when combined with Diltiazem.',
      },
      {
        interactionConcept: [
          {
            minConceptItem: {
              rxcui: '3443',
              name: 'diltiazem',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'DB00343',
              name: 'Diltiazem',
              url: 'https://go.drugbank.com/drugs/DB00343#interactions',
            },
          },
          {
            minConceptItem: {
              rxcui: '3640',
              name: 'doxycycline',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'DB00254',
              name: 'Doxycycline',
              url: 'https://go.drugbank.com/drugs/DB00254#interactions',
            },
          },
        ],
        severity: 'N/A',
        description:
          'The metabolism of Doxycycline can be decreased when combined with Diltiazem.',
      },
    ],
  },
  {
    comment:
      'Drug1 (rxcui = 19484, name = bisoprolol, tty = IN). Drug2 (rxcui = 3640, name = doxycycline, tty = IN). Drug1 is resolved to bisoprolol, Drug2 is resolved to doxycycline anhydrous and interaction asserted in DrugBank between Bisoprolol and Doxycycline. Drug1 is resolved to bisoprolol, Drug2 is resolved to doxycycline and interaction asserted in DrugBank between Bisoprolol and Doxycycline.',
    minConcept: [
      {
        rxcui: '19484',
        name: 'bisoprolol',
        tty: 'IN',
      },
      {
        rxcui: '3640',
        name: 'doxycycline',
        tty: 'IN',
      },
    ],
    interactionPair: [
      {
        interactionConcept: [
          {
            minConceptItem: {
              rxcui: '19484',
              name: 'bisoprolol',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'DB00612',
              name: 'Bisoprolol',
              url: 'https://go.drugbank.com/drugs/DB00612#interactions',
            },
          },
          {
            minConceptItem: {
              rxcui: '1545992',
              name: 'doxycycline anhydrous',
              tty: 'PIN',
            },
            sourceConceptItem: {
              id: 'DB00254',
              name: 'Doxycycline',
              url: 'https://go.drugbank.com/drugs/DB00254#interactions',
            },
          },
        ],
        severity: 'N/A',
        description:
          'Doxycycline may decrease the excretion rate of Bisoprolol which could result in a higher serum level.',
      },
      {
        interactionConcept: [
          {
            minConceptItem: {
              rxcui: '19484',
              name: 'bisoprolol',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'DB00612',
              name: 'Bisoprolol',
              url: 'https://go.drugbank.com/drugs/DB00612#interactions',
            },
          },
          {
            minConceptItem: {
              rxcui: '3640',
              name: 'doxycycline',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'DB00254',
              name: 'Doxycycline',
              url: 'https://go.drugbank.com/drugs/DB00254#interactions',
            },
          },
        ],
        severity: 'N/A',
        description:
          'Doxycycline may decrease the excretion rate of Bisoprolol which could result in a higher serum level.',
      },
    ],
  },
  {
    comment:
      'Drug1 (rxcui = 1000492, name = resveratrol, tty = IN). Drug2 (rxcui = 161, name = acetaminophen, tty = IN). Drug1 is resolved to resveratrol, Drug2 is resolved to acetaminophen and interaction asserted in DrugBank between Resveratrol and Acetaminophen.',
    minConcept: [
      {
        rxcui: '1000492',
        name: 'resveratrol',
        tty: 'IN',
      },
      {
        rxcui: '161',
        name: 'acetaminophen',
        tty: 'IN',
      },
    ],
    interactionPair: [
      {
        interactionConcept: [
          {
            minConceptItem: {
              rxcui: '1000492',
              name: 'resveratrol',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'DB02709',
              name: 'Resveratrol',
              url: 'https://go.drugbank.com/drugs/DB02709#interactions',
            },
          },
          {
            minConceptItem: {
              rxcui: '161',
              name: 'acetaminophen',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'DB00316',
              name: 'Acetaminophen',
              url: 'https://go.drugbank.com/drugs/DB00316#interactions',
            },
          },
        ],
        severity: 'N/A',
        description:
          'The metabolism of Acetaminophen can be decreased when combined with Resveratrol.',
      },
    ],
  },
  {
    comment:
      'Drug1 (rxcui = 1364430, name = apixaban, tty = IN). Drug2 (rxcui = 3443, name = diltiazem, tty = IN). Drug1 is resolved to apixaban, Drug2 is resolved to diltiazem and interaction asserted in DrugBank between Apixaban and Diltiazem.',
    minConcept: [
      {
        rxcui: '1364430',
        name: 'apixaban',
        tty: 'IN',
      },
      {
        rxcui: '3443',
        name: 'diltiazem',
        tty: 'IN',
      },
    ],
    interactionPair: [
      {
        interactionConcept: [
          {
            minConceptItem: {
              rxcui: '1364430',
              name: 'apixaban',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'DB06605',
              name: 'Apixaban',
              url: 'https://go.drugbank.com/drugs/DB06605#interactions',
            },
          },
          {
            minConceptItem: {
              rxcui: '3443',
              name: 'diltiazem',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'DB00343',
              name: 'Diltiazem',
              url: 'https://go.drugbank.com/drugs/DB00343#interactions',
            },
          },
        ],
        severity: 'N/A',
        description:
          'The metabolism of Apixaban can be decreased when combined with Diltiazem.',
      },
    ],
  },
  {
    comment:
      'Drug1 (rxcui = 3443, name = diltiazem, tty = IN). Drug2 (rxcui = 83367, name = atorvastatin, tty = IN). Drug1 is resolved to diltiazem, Drug2 is resolved to atorvastatin and interaction asserted in DrugBank between Diltiazem and Atorvastatin.',
    minConcept: [
      {
        rxcui: '3443',
        name: 'diltiazem',
        tty: 'IN',
      },
      {
        rxcui: '83367',
        name: 'atorvastatin',
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
              id: 'DB00343',
              name: 'Diltiazem',
              url: 'https://go.drugbank.com/drugs/DB00343#interactions',
            },
          },
          {
            minConceptItem: {
              rxcui: '83367',
              name: 'atorvastatin',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'DB01076',
              name: 'Atorvastatin',
              url: 'https://go.drugbank.com/drugs/DB01076#interactions',
            },
          },
        ],
        severity: 'N/A',
        description:
          'The serum concentration of Diltiazem can be increased when it is combined with Atorvastatin.',
      },
    ],
  },
  {
    comment:
      'Drug1 (rxcui = 1425, name = benzydamine, tty = IN). Drug2 (rxcui = 161, name = acetaminophen, tty = IN). Drug1 is resolved to benzydamine, Drug2 is resolved to acetaminophen and interaction asserted in DrugBank between Benzydamine and Acetaminophen.',
    minConcept: [
      {
        rxcui: '1425',
        name: 'benzydamine',
        tty: 'IN',
      },
      {
        rxcui: '161',
        name: 'acetaminophen',
        tty: 'IN',
      },
    ],
    interactionPair: [
      {
        interactionConcept: [
          {
            minConceptItem: {
              rxcui: '1425',
              name: 'benzydamine',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'DB09084',
              name: 'Benzydamine',
              url: 'https://go.drugbank.com/drugs/DB09084#interactions',
            },
          },
          {
            minConceptItem: {
              rxcui: '161',
              name: 'acetaminophen',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'DB00316',
              name: 'Acetaminophen',
              url: 'https://go.drugbank.com/drugs/DB00316#interactions',
            },
          },
        ],
        severity: 'N/A',
        description:
          'The risk or severity of adverse effects can be increased when Acetaminophen is combined with Benzydamine.',
      },
    ],
  },
  {
    comment:
      'Drug1 (rxcui = 1425, name = benzydamine, tty = IN). Drug2 (rxcui = 3640, name = doxycycline, tty = IN). Drug1 is resolved to benzydamine, Drug2 is resolved to doxycycline and interaction asserted in DrugBank between Benzydamine and Doxycycline. Drug1 is resolved to benzydamine, Drug2 is resolved to doxycycline anhydrous and interaction asserted in DrugBank between Benzydamine and Doxycycline.',
    minConcept: [
      {
        rxcui: '1425',
        name: 'benzydamine',
        tty: 'IN',
      },
      {
        rxcui: '3640',
        name: 'doxycycline',
        tty: 'IN',
      },
    ],
    interactionPair: [
      {
        interactionConcept: [
          {
            minConceptItem: {
              rxcui: '1425',
              name: 'benzydamine',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'DB09084',
              name: 'Benzydamine',
              url: 'https://go.drugbank.com/drugs/DB09084#interactions',
            },
          },
          {
            minConceptItem: {
              rxcui: '1545992',
              name: 'doxycycline anhydrous',
              tty: 'PIN',
            },
            sourceConceptItem: {
              id: 'DB00254',
              name: 'Doxycycline',
              url: 'https://go.drugbank.com/drugs/DB00254#interactions',
            },
          },
        ],
        severity: 'N/A',
        description:
          'Benzydamine may decrease the excretion rate of Doxycycline which could result in a higher serum level.',
      },
      {
        interactionConcept: [
          {
            minConceptItem: {
              rxcui: '1425',
              name: 'benzydamine',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'DB09084',
              name: 'Benzydamine',
              url: 'https://go.drugbank.com/drugs/DB09084#interactions',
            },
          },
          {
            minConceptItem: {
              rxcui: '3640',
              name: 'doxycycline',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'DB00254',
              name: 'Doxycycline',
              url: 'https://go.drugbank.com/drugs/DB00254#interactions',
            },
          },
        ],
        severity: 'N/A',
        description:
          'Benzydamine may decrease the excretion rate of Doxycycline which could result in a higher serum level.',
      },
    ],
  },
  {
    comment:
      'Drug1 (rxcui = 1000492, name = resveratrol, tty = IN). Drug2 (rxcui = 83367, name = atorvastatin, tty = IN). Drug1 is resolved to resveratrol, Drug2 is resolved to atorvastatin and interaction asserted in DrugBank between Resveratrol and Atorvastatin.',
    minConcept: [
      {
        rxcui: '1000492',
        name: 'resveratrol',
        tty: 'IN',
      },
      {
        rxcui: '83367',
        name: 'atorvastatin',
        tty: 'IN',
      },
    ],
    interactionPair: [
      {
        interactionConcept: [
          {
            minConceptItem: {
              rxcui: '1000492',
              name: 'resveratrol',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'DB02709',
              name: 'Resveratrol',
              url: 'https://go.drugbank.com/drugs/DB02709#interactions',
            },
          },
          {
            minConceptItem: {
              rxcui: '83367',
              name: 'atorvastatin',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'DB01076',
              name: 'Atorvastatin',
              url: 'https://go.drugbank.com/drugs/DB01076#interactions',
            },
          },
        ],
        severity: 'N/A',
        description:
          'The metabolism of Atorvastatin can be decreased when combined with Resveratrol.',
      },
    ],
  },
  {
    comment:
      'Drug1 (rxcui = 1303098, name = aclidinium, tty = IN). Drug2 (rxcui = 19484, name = bisoprolol, tty = IN). Drug1 is resolved to aclidinium, Drug2 is resolved to bisoprolol and interaction asserted in DrugBank between Aclidinium and Bisoprolol.',
    minConcept: [
      {
        rxcui: '1303098',
        name: 'aclidinium',
        tty: 'IN',
      },
      {
        rxcui: '19484',
        name: 'bisoprolol',
        tty: 'IN',
      },
    ],
    interactionPair: [
      {
        interactionConcept: [
          {
            minConceptItem: {
              rxcui: '1303098',
              name: 'aclidinium',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'DB08897',
              name: 'Aclidinium',
              url: 'https://go.drugbank.com/drugs/DB08897#interactions',
            },
          },
          {
            minConceptItem: {
              rxcui: '19484',
              name: 'bisoprolol',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'DB00612',
              name: 'Bisoprolol',
              url: 'https://go.drugbank.com/drugs/DB00612#interactions',
            },
          },
        ],
        severity: 'N/A',
        description:
          'Bisoprolol may decrease the excretion rate of Aclidinium which could result in a higher serum level.',
      },
    ],
  },
  {
    comment:
      'Drug1 (rxcui = 1364430, name = apixaban, tty = IN). Drug2 (rxcui = 4816, name = gliclazide, tty = IN). Drug1 is resolved to apixaban, Drug2 is resolved to gliclazide and interaction asserted in DrugBank between Apixaban and Gliclazide.',
    minConcept: [
      {
        rxcui: '1364430',
        name: 'apixaban',
        tty: 'IN',
      },
      {
        rxcui: '4816',
        name: 'gliclazide',
        tty: 'IN',
      },
    ],
    interactionPair: [
      {
        interactionConcept: [
          {
            minConceptItem: {
              rxcui: '1364430',
              name: 'apixaban',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'DB06605',
              name: 'Apixaban',
              url: 'https://go.drugbank.com/drugs/DB06605#interactions',
            },
          },
          {
            minConceptItem: {
              rxcui: '4816',
              name: 'gliclazide',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'DB01120',
              name: 'Gliclazide',
              url: 'https://go.drugbank.com/drugs/DB01120#interactions',
            },
          },
        ],
        severity: 'N/A',
        description:
          'The metabolism of Apixaban can be decreased when combined with Gliclazide.',
      },
    ],
  },
  {
    comment:
      'Drug1 (rxcui = 2670, name = codeine, tty = IN). Drug2 (rxcui = 3443, name = diltiazem, tty = IN). Drug1 is resolved to codeine anhydrous, Drug2 is resolved to diltiazem and interaction asserted in DrugBank between Codeine and Diltiazem. Drug1 is resolved to codeine polistirex, Drug2 is resolved to diltiazem and interaction asserted in DrugBank between Codeine and Diltiazem. Drug1 is resolved to codeine, Drug2 is resolved to diltiazem and interaction asserted in DrugBank between Codeine and Diltiazem.',
    minConcept: [
      {
        rxcui: '2670',
        name: 'codeine',
        tty: 'IN',
      },
      {
        rxcui: '3443',
        name: 'diltiazem',
        tty: 'IN',
      },
    ],
    interactionPair: [
      {
        interactionConcept: [
          {
            minConceptItem: {
              rxcui: '1545976',
              name: 'codeine anhydrous',
              tty: 'PIN',
            },
            sourceConceptItem: {
              id: 'DB00318',
              name: 'Codeine',
              url: 'https://go.drugbank.com/drugs/DB00318#interactions',
            },
          },
          {
            minConceptItem: {
              rxcui: '3443',
              name: 'diltiazem',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'DB00343',
              name: 'Diltiazem',
              url: 'https://go.drugbank.com/drugs/DB00343#interactions',
            },
          },
        ],
        severity: 'N/A',
        description:
          'The metabolism of Codeine can be decreased when combined with Diltiazem.',
      },
      {
        interactionConcept: [
          {
            minConceptItem: {
              rxcui: '235412',
              name: 'codeine polistirex',
              tty: 'PIN',
            },
            sourceConceptItem: {
              id: 'DB00318',
              name: 'Codeine',
              url: 'https://go.drugbank.com/drugs/DB00318#interactions',
            },
          },
          {
            minConceptItem: {
              rxcui: '3443',
              name: 'diltiazem',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'DB00343',
              name: 'Diltiazem',
              url: 'https://go.drugbank.com/drugs/DB00343#interactions',
            },
          },
        ],
        severity: 'N/A',
        description:
          'The metabolism of Codeine can be decreased when combined with Diltiazem.',
      },
      {
        interactionConcept: [
          {
            minConceptItem: {
              rxcui: '2670',
              name: 'codeine',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'DB00318',
              name: 'Codeine',
              url: 'https://go.drugbank.com/drugs/DB00318#interactions',
            },
          },
          {
            minConceptItem: {
              rxcui: '3443',
              name: 'diltiazem',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'DB00343',
              name: 'Diltiazem',
              url: 'https://go.drugbank.com/drugs/DB00343#interactions',
            },
          },
        ],
        severity: 'N/A',
        description:
          'The metabolism of Codeine can be decreased when combined with Diltiazem.',
      },
    ],
  },
  {
    comment:
      'Drug1 (rxcui = 3640, name = doxycycline, tty = IN). Drug2 (rxcui = 723, name = amoxicillin, tty = IN). Drug1 is resolved to doxycycline, Drug2 is resolved to amoxicillin anhydrous and interaction asserted in DrugBank between Doxycycline and Amoxicillin. Drug1 is resolved to doxycycline anhydrous, Drug2 is resolved to amoxicillin anhydrous and interaction asserted in DrugBank between Doxycycline and Amoxicillin. Drug1 is resolved to doxycycline, Drug2 is resolved to amoxicillin and interaction asserted in DrugBank between Doxycycline and Amoxicillin. Drug1 is resolved to doxycycline anhydrous, Drug2 is resolved to amoxicillin and interaction asserted in DrugBank between Doxycycline and Amoxicillin.',
    minConcept: [
      {
        rxcui: '3640',
        name: 'doxycycline',
        tty: 'IN',
      },
      {
        rxcui: '723',
        name: 'amoxicillin',
        tty: 'IN',
      },
    ],
    interactionPair: [
      {
        interactionConcept: [
          {
            minConceptItem: {
              rxcui: '1545992',
              name: 'doxycycline anhydrous',
              tty: 'PIN',
            },
            sourceConceptItem: {
              id: 'DB00254',
              name: 'Doxycycline',
              url: 'https://go.drugbank.com/drugs/DB00254#interactions',
            },
          },
          {
            minConceptItem: {
              rxcui: '1297882',
              name: 'amoxicillin anhydrous',
              tty: 'PIN',
            },
            sourceConceptItem: {
              id: 'DB01060',
              name: 'Amoxicillin',
              url: 'https://go.drugbank.com/drugs/DB01060#interactions',
            },
          },
        ],
        severity: 'N/A',
        description:
          'The therapeutic efficacy of Amoxicillin can be decreased when used in combination with Doxycycline.',
      },
      {
        interactionConcept: [
          {
            minConceptItem: {
              rxcui: '1545992',
              name: 'doxycycline anhydrous',
              tty: 'PIN',
            },
            sourceConceptItem: {
              id: 'DB00254',
              name: 'Doxycycline',
              url: 'https://go.drugbank.com/drugs/DB00254#interactions',
            },
          },
          {
            minConceptItem: {
              rxcui: '723',
              name: 'amoxicillin',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'DB01060',
              name: 'Amoxicillin',
              url: 'https://go.drugbank.com/drugs/DB01060#interactions',
            },
          },
        ],
        severity: 'N/A',
        description:
          'The therapeutic efficacy of Amoxicillin can be decreased when used in combination with Doxycycline.',
      },
      {
        interactionConcept: [
          {
            minConceptItem: {
              rxcui: '3640',
              name: 'doxycycline',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'DB00254',
              name: 'Doxycycline',
              url: 'https://go.drugbank.com/drugs/DB00254#interactions',
            },
          },
          {
            minConceptItem: {
              rxcui: '1297882',
              name: 'amoxicillin anhydrous',
              tty: 'PIN',
            },
            sourceConceptItem: {
              id: 'DB01060',
              name: 'Amoxicillin',
              url: 'https://go.drugbank.com/drugs/DB01060#interactions',
            },
          },
        ],
        severity: 'N/A',
        description:
          'The therapeutic efficacy of Amoxicillin can be decreased when used in combination with Doxycycline.',
      },
      {
        interactionConcept: [
          {
            minConceptItem: {
              rxcui: '3640',
              name: 'doxycycline',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'DB00254',
              name: 'Doxycycline',
              url: 'https://go.drugbank.com/drugs/DB00254#interactions',
            },
          },
          {
            minConceptItem: {
              rxcui: '723',
              name: 'amoxicillin',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'DB01060',
              name: 'Amoxicillin',
              url: 'https://go.drugbank.com/drugs/DB01060#interactions',
            },
          },
        ],
        severity: 'N/A',
        description:
          'The therapeutic efficacy of Amoxicillin can be decreased when used in combination with Doxycycline.',
      },
    ],
  },
  {
    comment:
      'Drug1 (rxcui = 1000492, name = resveratrol, tty = IN). Drug2 (rxcui = 1364430, name = apixaban, tty = IN). Drug1 is resolved to resveratrol, Drug2 is resolved to apixaban and interaction asserted in DrugBank between Resveratrol and Apixaban.',
    minConcept: [
      {
        rxcui: '1000492',
        name: 'resveratrol',
        tty: 'IN',
      },
      {
        rxcui: '1364430',
        name: 'apixaban',
        tty: 'IN',
      },
    ],
    interactionPair: [
      {
        interactionConcept: [
          {
            minConceptItem: {
              rxcui: '1000492',
              name: 'resveratrol',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'DB02709',
              name: 'Resveratrol',
              url: 'https://go.drugbank.com/drugs/DB02709#interactions',
            },
          },
          {
            minConceptItem: {
              rxcui: '1364430',
              name: 'apixaban',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'DB06605',
              name: 'Apixaban',
              url: 'https://go.drugbank.com/drugs/DB06605#interactions',
            },
          },
        ],
        severity: 'N/A',
        description:
          'The risk or severity of adverse effects can be increased when Resveratrol is combined with Apixaban.',
      },
    ],
  },
  {
    comment:
      'Drug1 (rxcui = 1303098, name = aclidinium, tty = IN). Drug2 (rxcui = 723, name = amoxicillin, tty = IN). Drug1 is resolved to aclidinium, Drug2 is resolved to amoxicillin anhydrous and interaction asserted in DrugBank between Aclidinium and Amoxicillin. Drug1 is resolved to aclidinium, Drug2 is resolved to amoxicillin and interaction asserted in DrugBank between Aclidinium and Amoxicillin.',
    minConcept: [
      {
        rxcui: '1303098',
        name: 'aclidinium',
        tty: 'IN',
      },
      {
        rxcui: '723',
        name: 'amoxicillin',
        tty: 'IN',
      },
    ],
    interactionPair: [
      {
        interactionConcept: [
          {
            minConceptItem: {
              rxcui: '1303098',
              name: 'aclidinium',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'DB08897',
              name: 'Aclidinium',
              url: 'https://go.drugbank.com/drugs/DB08897#interactions',
            },
          },
          {
            minConceptItem: {
              rxcui: '1297882',
              name: 'amoxicillin anhydrous',
              tty: 'PIN',
            },
            sourceConceptItem: {
              id: 'DB01060',
              name: 'Amoxicillin',
              url: 'https://go.drugbank.com/drugs/DB01060#interactions',
            },
          },
        ],
        severity: 'N/A',
        description:
          'Amoxicillin may decrease the excretion rate of Aclidinium which could result in a higher serum level.',
      },
      {
        interactionConcept: [
          {
            minConceptItem: {
              rxcui: '1303098',
              name: 'aclidinium',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'DB08897',
              name: 'Aclidinium',
              url: 'https://go.drugbank.com/drugs/DB08897#interactions',
            },
          },
          {
            minConceptItem: {
              rxcui: '723',
              name: 'amoxicillin',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'DB01060',
              name: 'Amoxicillin',
              url: 'https://go.drugbank.com/drugs/DB01060#interactions',
            },
          },
        ],
        severity: 'N/A',
        description:
          'Amoxicillin may decrease the excretion rate of Aclidinium which could result in a higher serum level.',
      },
    ],
  },
  {
    comment:
      'Drug1 (rxcui = 1303098, name = aclidinium, tty = IN). Drug2 (rxcui = 3640, name = doxycycline, tty = IN). Drug1 is resolved to aclidinium, Drug2 is resolved to doxycycline and interaction asserted in DrugBank between Aclidinium and Doxycycline. Drug1 is resolved to aclidinium, Drug2 is resolved to doxycycline anhydrous and interaction asserted in DrugBank between Aclidinium and Doxycycline.',
    minConcept: [
      {
        rxcui: '1303098',
        name: 'aclidinium',
        tty: 'IN',
      },
      {
        rxcui: '3640',
        name: 'doxycycline',
        tty: 'IN',
      },
    ],
    interactionPair: [
      {
        interactionConcept: [
          {
            minConceptItem: {
              rxcui: '1303098',
              name: 'aclidinium',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'DB08897',
              name: 'Aclidinium',
              url: 'https://go.drugbank.com/drugs/DB08897#interactions',
            },
          },
          {
            minConceptItem: {
              rxcui: '1545992',
              name: 'doxycycline anhydrous',
              tty: 'PIN',
            },
            sourceConceptItem: {
              id: 'DB00254',
              name: 'Doxycycline',
              url: 'https://go.drugbank.com/drugs/DB00254#interactions',
            },
          },
        ],
        severity: 'N/A',
        description:
          'Doxycycline may decrease the excretion rate of Aclidinium which could result in a higher serum level.',
      },
      {
        interactionConcept: [
          {
            minConceptItem: {
              rxcui: '1303098',
              name: 'aclidinium',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'DB08897',
              name: 'Aclidinium',
              url: 'https://go.drugbank.com/drugs/DB08897#interactions',
            },
          },
          {
            minConceptItem: {
              rxcui: '3640',
              name: 'doxycycline',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'DB00254',
              name: 'Doxycycline',
              url: 'https://go.drugbank.com/drugs/DB00254#interactions',
            },
          },
        ],
        severity: 'N/A',
        description:
          'Doxycycline may decrease the excretion rate of Aclidinium which could result in a higher serum level.',
      },
    ],
  },
  {
    comment:
      'Drug1 (rxcui = 3640, name = doxycycline, tty = IN). Drug2 (rxcui = 4448, name = floxacillin, tty = IN). Drug1 is resolved to doxycycline, Drug2 is resolved to floxacillin and interaction asserted in DrugBank between Doxycycline and Flucloxacillin. Drug1 is resolved to doxycycline anhydrous, Drug2 is resolved to floxacillin and interaction asserted in DrugBank between Doxycycline and Flucloxacillin.',
    minConcept: [
      {
        rxcui: '3640',
        name: 'doxycycline',
        tty: 'IN',
      },
      {
        rxcui: '4448',
        name: 'floxacillin',
        tty: 'IN',
      },
    ],
    interactionPair: [
      {
        interactionConcept: [
          {
            minConceptItem: {
              rxcui: '1545992',
              name: 'doxycycline anhydrous',
              tty: 'PIN',
            },
            sourceConceptItem: {
              id: 'DB00254',
              name: 'Doxycycline',
              url: 'https://go.drugbank.com/drugs/DB00254#interactions',
            },
          },
          {
            minConceptItem: {
              rxcui: '4448',
              name: 'floxacillin',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'DB00301',
              name: 'Flucloxacillin',
              url: 'https://go.drugbank.com/drugs/DB00301#interactions',
            },
          },
        ],
        severity: 'N/A',
        description:
          'The therapeutic efficacy of Flucloxacillin can be decreased when used in combination with Doxycycline.',
      },
      {
        interactionConcept: [
          {
            minConceptItem: {
              rxcui: '3640',
              name: 'doxycycline',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'DB00254',
              name: 'Doxycycline',
              url: 'https://go.drugbank.com/drugs/DB00254#interactions',
            },
          },
          {
            minConceptItem: {
              rxcui: '4448',
              name: 'floxacillin',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'DB00301',
              name: 'Flucloxacillin',
              url: 'https://go.drugbank.com/drugs/DB00301#interactions',
            },
          },
        ],
        severity: 'N/A',
        description:
          'The therapeutic efficacy of Flucloxacillin can be decreased when used in combination with Doxycycline.',
      },
    ],
  },
  {
    comment:
      'Drug1 (rxcui = 161, name = acetaminophen, tty = IN). Drug2 (rxcui = 83367, name = atorvastatin, tty = IN). Drug1 is resolved to acetaminophen, Drug2 is resolved to atorvastatin and interaction asserted in DrugBank between Acetaminophen and Atorvastatin.',
    minConcept: [
      {
        rxcui: '161',
        name: 'acetaminophen',
        tty: 'IN',
      },
      {
        rxcui: '83367',
        name: 'atorvastatin',
        tty: 'IN',
      },
    ],
    interactionPair: [
      {
        interactionConcept: [
          {
            minConceptItem: {
              rxcui: '161',
              name: 'acetaminophen',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'DB00316',
              name: 'Acetaminophen',
              url: 'https://go.drugbank.com/drugs/DB00316#interactions',
            },
          },
          {
            minConceptItem: {
              rxcui: '83367',
              name: 'atorvastatin',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'DB01076',
              name: 'Atorvastatin',
              url: 'https://go.drugbank.com/drugs/DB01076#interactions',
            },
          },
        ],
        severity: 'N/A',
        description:
          'The metabolism of Atorvastatin can be decreased when combined with Acetaminophen.',
      },
    ],
  },
  {
    comment:
      'Drug1 (rxcui = 11248, name = vitamin B12, tty = IN). Drug2 (rxcui = 19484, name = bisoprolol, tty = IN). Drug1 is resolved to vitamin B12, Drug2 is resolved to bisoprolol and interaction asserted in DrugBank between Cyanocobalamin and Bisoprolol.',
    minConcept: [
      {
        rxcui: '11248',
        name: 'vitamin B12',
        tty: 'IN',
      },
      {
        rxcui: '19484',
        name: 'bisoprolol',
        tty: 'IN',
      },
    ],
    interactionPair: [
      {
        interactionConcept: [
          {
            minConceptItem: {
              rxcui: '11248',
              name: 'vitamin B12',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'DB00115',
              name: 'Cyanocobalamin',
              url: 'https://go.drugbank.com/drugs/DB00115#interactions',
            },
          },
          {
            minConceptItem: {
              rxcui: '19484',
              name: 'bisoprolol',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'DB00612',
              name: 'Bisoprolol',
              url: 'https://go.drugbank.com/drugs/DB00612#interactions',
            },
          },
        ],
        severity: 'N/A',
        description:
          'Cyanocobalamin may decrease the excretion rate of Bisoprolol which could result in a higher serum level.',
      },
    ],
  },
  {
    comment:
      'Drug1 (rxcui = 19484, name = bisoprolol, tty = IN). Drug2 (rxcui = 4816, name = gliclazide, tty = IN). Drug1 is resolved to bisoprolol, Drug2 is resolved to gliclazide and interaction asserted in DrugBank between Bisoprolol and Gliclazide.',
    minConcept: [
      {
        rxcui: '19484',
        name: 'bisoprolol',
        tty: 'IN',
      },
      {
        rxcui: '4816',
        name: 'gliclazide',
        tty: 'IN',
      },
    ],
    interactionPair: [
      {
        interactionConcept: [
          {
            minConceptItem: {
              rxcui: '19484',
              name: 'bisoprolol',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'DB00612',
              name: 'Bisoprolol',
              url: 'https://go.drugbank.com/drugs/DB00612#interactions',
            },
          },
          {
            minConceptItem: {
              rxcui: '4816',
              name: 'gliclazide',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'DB01120',
              name: 'Gliclazide',
              url: 'https://go.drugbank.com/drugs/DB01120#interactions',
            },
          },
        ],
        severity: 'N/A',
        description:
          'The therapeutic efficacy of Gliclazide can be increased when used in combination with Bisoprolol.',
      },
    ],
  },
  {
    comment:
      'Drug1 (rxcui = 1425, name = benzydamine, tty = IN). Drug2 (rxcui = 4816, name = gliclazide, tty = IN). Drug1 is resolved to benzydamine, Drug2 is resolved to gliclazide and interaction asserted in DrugBank between Benzydamine and Gliclazide.',
    minConcept: [
      {
        rxcui: '1425',
        name: 'benzydamine',
        tty: 'IN',
      },
      {
        rxcui: '4816',
        name: 'gliclazide',
        tty: 'IN',
      },
    ],
    interactionPair: [
      {
        interactionConcept: [
          {
            minConceptItem: {
              rxcui: '1425',
              name: 'benzydamine',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'DB09084',
              name: 'Benzydamine',
              url: 'https://go.drugbank.com/drugs/DB09084#interactions',
            },
          },
          {
            minConceptItem: {
              rxcui: '4816',
              name: 'gliclazide',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'DB01120',
              name: 'Gliclazide',
              url: 'https://go.drugbank.com/drugs/DB01120#interactions',
            },
          },
        ],
        severity: 'N/A',
        description:
          'The protein binding of Gliclazide can be decreased when combined with Benzydamine.',
      },
    ],
  },
  {
    comment:
      'Drug1 (rxcui = 1425, name = benzydamine, tty = IN). Drug2 (rxcui = 723, name = amoxicillin, tty = IN). Drug1 is resolved to benzydamine, Drug2 is resolved to amoxicillin anhydrous and interaction asserted in DrugBank between Benzydamine and Amoxicillin. Drug1 is resolved to benzydamine, Drug2 is resolved to amoxicillin and interaction asserted in DrugBank between Benzydamine and Amoxicillin.',
    minConcept: [
      {
        rxcui: '1425',
        name: 'benzydamine',
        tty: 'IN',
      },
      {
        rxcui: '723',
        name: 'amoxicillin',
        tty: 'IN',
      },
    ],
    interactionPair: [
      {
        interactionConcept: [
          {
            minConceptItem: {
              rxcui: '1425',
              name: 'benzydamine',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'DB09084',
              name: 'Benzydamine',
              url: 'https://go.drugbank.com/drugs/DB09084#interactions',
            },
          },
          {
            minConceptItem: {
              rxcui: '1297882',
              name: 'amoxicillin anhydrous',
              tty: 'PIN',
            },
            sourceConceptItem: {
              id: 'DB01060',
              name: 'Amoxicillin',
              url: 'https://go.drugbank.com/drugs/DB01060#interactions',
            },
          },
        ],
        severity: 'N/A',
        description:
          'Benzydamine may decrease the excretion rate of Amoxicillin which could result in a higher serum level.',
      },
      {
        interactionConcept: [
          {
            minConceptItem: {
              rxcui: '1425',
              name: 'benzydamine',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'DB09084',
              name: 'Benzydamine',
              url: 'https://go.drugbank.com/drugs/DB09084#interactions',
            },
          },
          {
            minConceptItem: {
              rxcui: '723',
              name: 'amoxicillin',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'DB01060',
              name: 'Amoxicillin',
              url: 'https://go.drugbank.com/drugs/DB01060#interactions',
            },
          },
        ],
        severity: 'N/A',
        description:
          'Benzydamine may decrease the excretion rate of Amoxicillin which could result in a higher serum level.',
      },
    ],
  },
  {
    comment:
      'Drug1 (rxcui = 161, name = acetaminophen, tty = IN). Drug2 (rxcui = 19484, name = bisoprolol, tty = IN). Drug1 is resolved to acetaminophen, Drug2 is resolved to bisoprolol and interaction asserted in DrugBank between Acetaminophen and Bisoprolol.',
    minConcept: [
      {
        rxcui: '161',
        name: 'acetaminophen',
        tty: 'IN',
      },
      {
        rxcui: '19484',
        name: 'bisoprolol',
        tty: 'IN',
      },
    ],
    interactionPair: [
      {
        interactionConcept: [
          {
            minConceptItem: {
              rxcui: '161',
              name: 'acetaminophen',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'DB00316',
              name: 'Acetaminophen',
              url: 'https://go.drugbank.com/drugs/DB00316#interactions',
            },
          },
          {
            minConceptItem: {
              rxcui: '19484',
              name: 'bisoprolol',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'DB00612',
              name: 'Bisoprolol',
              url: 'https://go.drugbank.com/drugs/DB00612#interactions',
            },
          },
        ],
        severity: 'N/A',
        description:
          'Acetaminophen may decrease the excretion rate of Bisoprolol which could result in a higher serum level.',
      },
    ],
  },
  {
    comment:
      'Drug1 (rxcui = 161, name = acetaminophen, tty = IN). Drug2 (rxcui = 3640, name = doxycycline, tty = IN). Drug1 is resolved to acetaminophen, Drug2 is resolved to doxycycline anhydrous and interaction asserted in DrugBank between Acetaminophen and Doxycycline. Drug1 is resolved to acetaminophen, Drug2 is resolved to doxycycline and interaction asserted in DrugBank between Acetaminophen and Doxycycline.',
    minConcept: [
      {
        rxcui: '161',
        name: 'acetaminophen',
        tty: 'IN',
      },
      {
        rxcui: '3640',
        name: 'doxycycline',
        tty: 'IN',
      },
    ],
    interactionPair: [
      {
        interactionConcept: [
          {
            minConceptItem: {
              rxcui: '161',
              name: 'acetaminophen',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'DB00316',
              name: 'Acetaminophen',
              url: 'https://go.drugbank.com/drugs/DB00316#interactions',
            },
          },
          {
            minConceptItem: {
              rxcui: '1545992',
              name: 'doxycycline anhydrous',
              tty: 'PIN',
            },
            sourceConceptItem: {
              id: 'DB00254',
              name: 'Doxycycline',
              url: 'https://go.drugbank.com/drugs/DB00254#interactions',
            },
          },
        ],
        severity: 'N/A',
        description:
          'Doxycycline may decrease the excretion rate of Acetaminophen which could result in a higher serum level.',
      },
      {
        interactionConcept: [
          {
            minConceptItem: {
              rxcui: '161',
              name: 'acetaminophen',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'DB00316',
              name: 'Acetaminophen',
              url: 'https://go.drugbank.com/drugs/DB00316#interactions',
            },
          },
          {
            minConceptItem: {
              rxcui: '3640',
              name: 'doxycycline',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'DB00254',
              name: 'Doxycycline',
              url: 'https://go.drugbank.com/drugs/DB00254#interactions',
            },
          },
        ],
        severity: 'N/A',
        description:
          'Doxycycline may decrease the excretion rate of Acetaminophen which could result in a higher serum level.',
      },
    ],
  },
  {
    comment:
      'Drug1 (rxcui = 11248, name = vitamin B12, tty = IN). Drug2 (rxcui = 1425, name = benzydamine, tty = IN). Drug1 is resolved to vitamin B12, Drug2 is resolved to benzydamine and interaction asserted in DrugBank between Cyanocobalamin and Benzydamine.',
    minConcept: [
      {
        rxcui: '11248',
        name: 'vitamin B12',
        tty: 'IN',
      },
      {
        rxcui: '1425',
        name: 'benzydamine',
        tty: 'IN',
      },
    ],
    interactionPair: [
      {
        interactionConcept: [
          {
            minConceptItem: {
              rxcui: '11248',
              name: 'vitamin B12',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'DB00115',
              name: 'Cyanocobalamin',
              url: 'https://go.drugbank.com/drugs/DB00115#interactions',
            },
          },
          {
            minConceptItem: {
              rxcui: '1425',
              name: 'benzydamine',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'DB09084',
              name: 'Benzydamine',
              url: 'https://go.drugbank.com/drugs/DB09084#interactions',
            },
          },
        ],
        severity: 'N/A',
        description:
          'Benzydamine may decrease the excretion rate of Cyanocobalamin which could result in a higher serum level.',
      },
    ],
  },
  {
    comment:
      'Drug1 (rxcui = 19484, name = bisoprolol, tty = IN). Drug2 (rxcui = 723, name = amoxicillin, tty = IN). Drug1 is resolved to bisoprolol, Drug2 is resolved to amoxicillin anhydrous and interaction asserted in DrugBank between Bisoprolol and Amoxicillin. Drug1 is resolved to bisoprolol, Drug2 is resolved to amoxicillin and interaction asserted in DrugBank between Bisoprolol and Amoxicillin.',
    minConcept: [
      {
        rxcui: '19484',
        name: 'bisoprolol',
        tty: 'IN',
      },
      {
        rxcui: '723',
        name: 'amoxicillin',
        tty: 'IN',
      },
    ],
    interactionPair: [
      {
        interactionConcept: [
          {
            minConceptItem: {
              rxcui: '19484',
              name: 'bisoprolol',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'DB00612',
              name: 'Bisoprolol',
              url: 'https://go.drugbank.com/drugs/DB00612#interactions',
            },
          },
          {
            minConceptItem: {
              rxcui: '1297882',
              name: 'amoxicillin anhydrous',
              tty: 'PIN',
            },
            sourceConceptItem: {
              id: 'DB01060',
              name: 'Amoxicillin',
              url: 'https://go.drugbank.com/drugs/DB01060#interactions',
            },
          },
        ],
        severity: 'N/A',
        description:
          'Bisoprolol may decrease the excretion rate of Amoxicillin which could result in a higher serum level.',
      },
      {
        interactionConcept: [
          {
            minConceptItem: {
              rxcui: '19484',
              name: 'bisoprolol',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'DB00612',
              name: 'Bisoprolol',
              url: 'https://go.drugbank.com/drugs/DB00612#interactions',
            },
          },
          {
            minConceptItem: {
              rxcui: '723',
              name: 'amoxicillin',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'DB01060',
              name: 'Amoxicillin',
              url: 'https://go.drugbank.com/drugs/DB01060#interactions',
            },
          },
        ],
        severity: 'N/A',
        description:
          'Bisoprolol may decrease the excretion rate of Amoxicillin which could result in a higher serum level.',
      },
    ],
  },
  {
    comment:
      'Drug1 (rxcui = 19484, name = bisoprolol, tty = IN). Drug2 (rxcui = 3443, name = diltiazem, tty = IN). Drug1 is resolved to bisoprolol, Drug2 is resolved to diltiazem and interaction asserted in DrugBank between Bisoprolol and Diltiazem.',
    minConcept: [
      {
        rxcui: '19484',
        name: 'bisoprolol',
        tty: 'IN',
      },
      {
        rxcui: '3443',
        name: 'diltiazem',
        tty: 'IN',
      },
    ],
    interactionPair: [
      {
        interactionConcept: [
          {
            minConceptItem: {
              rxcui: '19484',
              name: 'bisoprolol',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'DB00612',
              name: 'Bisoprolol',
              url: 'https://go.drugbank.com/drugs/DB00612#interactions',
            },
          },
          {
            minConceptItem: {
              rxcui: '3443',
              name: 'diltiazem',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'DB00343',
              name: 'Diltiazem',
              url: 'https://go.drugbank.com/drugs/DB00343#interactions',
            },
          },
        ],
        severity: 'N/A',
        description:
          'The therapeutic efficacy of Diltiazem can be increased when used in combination with Bisoprolol.',
      },
    ],
  },
  {
    comment:
      'Drug1 (rxcui = 1303098, name = aclidinium, tty = IN). Drug2 (rxcui = 2670, name = codeine, tty = IN). Drug1 is resolved to aclidinium, Drug2 is resolved to codeine anhydrous and interaction asserted in DrugBank between Aclidinium and Codeine. Drug1 is resolved to aclidinium, Drug2 is resolved to codeine polistirex and interaction asserted in DrugBank between Aclidinium and Codeine. Drug1 is resolved to aclidinium, Drug2 is resolved to codeine and interaction asserted in DrugBank between Aclidinium and Codeine.',
    minConcept: [
      {
        rxcui: '1303098',
        name: 'aclidinium',
        tty: 'IN',
      },
      {
        rxcui: '2670',
        name: 'codeine',
        tty: 'IN',
      },
    ],
    interactionPair: [
      {
        interactionConcept: [
          {
            minConceptItem: {
              rxcui: '1303098',
              name: 'aclidinium',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'DB08897',
              name: 'Aclidinium',
              url: 'https://go.drugbank.com/drugs/DB08897#interactions',
            },
          },
          {
            minConceptItem: {
              rxcui: '1545976',
              name: 'codeine anhydrous',
              tty: 'PIN',
            },
            sourceConceptItem: {
              id: 'DB00318',
              name: 'Codeine',
              url: 'https://go.drugbank.com/drugs/DB00318#interactions',
            },
          },
        ],
        severity: 'N/A',
        description:
          'The risk or severity of adverse effects can be increased when Aclidinium is combined with Codeine.',
      },
      {
        interactionConcept: [
          {
            minConceptItem: {
              rxcui: '1303098',
              name: 'aclidinium',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'DB08897',
              name: 'Aclidinium',
              url: 'https://go.drugbank.com/drugs/DB08897#interactions',
            },
          },
          {
            minConceptItem: {
              rxcui: '235412',
              name: 'codeine polistirex',
              tty: 'PIN',
            },
            sourceConceptItem: {
              id: 'DB00318',
              name: 'Codeine',
              url: 'https://go.drugbank.com/drugs/DB00318#interactions',
            },
          },
        ],
        severity: 'N/A',
        description:
          'The risk or severity of adverse effects can be increased when Aclidinium is combined with Codeine.',
      },
      {
        interactionConcept: [
          {
            minConceptItem: {
              rxcui: '1303098',
              name: 'aclidinium',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'DB08897',
              name: 'Aclidinium',
              url: 'https://go.drugbank.com/drugs/DB08897#interactions',
            },
          },
          {
            minConceptItem: {
              rxcui: '2670',
              name: 'codeine',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'DB00318',
              name: 'Codeine',
              url: 'https://go.drugbank.com/drugs/DB00318#interactions',
            },
          },
        ],
        severity: 'N/A',
        description:
          'The risk or severity of adverse effects can be increased when Aclidinium is combined with Codeine.',
      },
    ],
  },
  {
    comment:
      'Drug1 (rxcui = 1000492, name = resveratrol, tty = IN). Drug2 (rxcui = 1425, name = benzydamine, tty = IN). Drug1 is resolved to resveratrol, Drug2 is resolved to benzydamine and interaction asserted in DrugBank between Resveratrol and Benzydamine.',
    minConcept: [
      {
        rxcui: '1000492',
        name: 'resveratrol',
        tty: 'IN',
      },
      {
        rxcui: '1425',
        name: 'benzydamine',
        tty: 'IN',
      },
    ],
    interactionPair: [
      {
        interactionConcept: [
          {
            minConceptItem: {
              rxcui: '1000492',
              name: 'resveratrol',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'DB02709',
              name: 'Resveratrol',
              url: 'https://go.drugbank.com/drugs/DB02709#interactions',
            },
          },
          {
            minConceptItem: {
              rxcui: '1425',
              name: 'benzydamine',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'DB09084',
              name: 'Benzydamine',
              url: 'https://go.drugbank.com/drugs/DB09084#interactions',
            },
          },
        ],
        severity: 'N/A',
        description:
          'The risk or severity of bleeding can be increased when Benzydamine is combined with Resveratrol.',
      },
    ],
  },
  {
    comment:
      'Drug1 (rxcui = 11248, name = vitamin B12, tty = IN). Drug2 (rxcui = 3640, name = doxycycline, tty = IN). Drug1 is resolved to vitamin B12, Drug2 is resolved to doxycycline and interaction asserted in DrugBank between Cyanocobalamin and Doxycycline. Drug1 is resolved to vitamin B12, Drug2 is resolved to doxycycline anhydrous and interaction asserted in DrugBank between Cyanocobalamin and Doxycycline.',
    minConcept: [
      {
        rxcui: '11248',
        name: 'vitamin B12',
        tty: 'IN',
      },
      {
        rxcui: '3640',
        name: 'doxycycline',
        tty: 'IN',
      },
    ],
    interactionPair: [
      {
        interactionConcept: [
          {
            minConceptItem: {
              rxcui: '11248',
              name: 'vitamin B12',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'DB00115',
              name: 'Cyanocobalamin',
              url: 'https://go.drugbank.com/drugs/DB00115#interactions',
            },
          },
          {
            minConceptItem: {
              rxcui: '1545992',
              name: 'doxycycline anhydrous',
              tty: 'PIN',
            },
            sourceConceptItem: {
              id: 'DB00254',
              name: 'Doxycycline',
              url: 'https://go.drugbank.com/drugs/DB00254#interactions',
            },
          },
        ],
        severity: 'N/A',
        description:
          'Cyanocobalamin may decrease the excretion rate of Doxycycline which could result in a higher serum level.',
      },
      {
        interactionConcept: [
          {
            minConceptItem: {
              rxcui: '11248',
              name: 'vitamin B12',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'DB00115',
              name: 'Cyanocobalamin',
              url: 'https://go.drugbank.com/drugs/DB00115#interactions',
            },
          },
          {
            minConceptItem: {
              rxcui: '3640',
              name: 'doxycycline',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'DB00254',
              name: 'Doxycycline',
              url: 'https://go.drugbank.com/drugs/DB00254#interactions',
            },
          },
        ],
        severity: 'N/A',
        description:
          'Cyanocobalamin may decrease the excretion rate of Doxycycline which could result in a higher serum level.',
      },
    ],
  },
  {
    comment:
      'Drug1 (rxcui = 4448, name = floxacillin, tty = IN). Drug2 (rxcui = 83367, name = atorvastatin, tty = IN). Drug1 is resolved to floxacillin, Drug2 is resolved to atorvastatin and interaction asserted in DrugBank between Flucloxacillin and Atorvastatin.',
    minConcept: [
      {
        rxcui: '4448',
        name: 'floxacillin',
        tty: 'IN',
      },
      {
        rxcui: '83367',
        name: 'atorvastatin',
        tty: 'IN',
      },
    ],
    interactionPair: [
      {
        interactionConcept: [
          {
            minConceptItem: {
              rxcui: '4448',
              name: 'floxacillin',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'DB00301',
              name: 'Flucloxacillin',
              url: 'https://go.drugbank.com/drugs/DB00301#interactions',
            },
          },
          {
            minConceptItem: {
              rxcui: '83367',
              name: 'atorvastatin',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'DB01076',
              name: 'Atorvastatin',
              url: 'https://go.drugbank.com/drugs/DB01076#interactions',
            },
          },
        ],
        severity: 'N/A',
        description:
          'Flucloxacillin may decrease the excretion rate of Atorvastatin which could result in a higher serum level.',
      },
    ],
  },
  {
    comment:
      'Drug1 (rxcui = 1364430, name = apixaban, tty = IN). Drug2 (rxcui = 1425, name = benzydamine, tty = IN). Drug1 is resolved to apixaban, Drug2 is resolved to benzydamine and interaction asserted in DrugBank between Apixaban and Benzydamine.',
    minConcept: [
      {
        rxcui: '1364430',
        name: 'apixaban',
        tty: 'IN',
      },
      {
        rxcui: '1425',
        name: 'benzydamine',
        tty: 'IN',
      },
    ],
    interactionPair: [
      {
        interactionConcept: [
          {
            minConceptItem: {
              rxcui: '1364430',
              name: 'apixaban',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'DB06605',
              name: 'Apixaban',
              url: 'https://go.drugbank.com/drugs/DB06605#interactions',
            },
          },
          {
            minConceptItem: {
              rxcui: '1425',
              name: 'benzydamine',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'DB09084',
              name: 'Benzydamine',
              url: 'https://go.drugbank.com/drugs/DB09084#interactions',
            },
          },
        ],
        severity: 'N/A',
        description:
          'The risk or severity of bleeding and hemorrhage can be increased when Benzydamine is combined with Apixaban.',
      },
    ],
  },
  {
    comment:
      'Drug1 (rxcui = 11248, name = vitamin B12, tty = IN). Drug2 (rxcui = 723, name = amoxicillin, tty = IN). Drug1 is resolved to vitamin B12, Drug2 is resolved to amoxicillin anhydrous and interaction asserted in DrugBank between Cyanocobalamin and Amoxicillin. Drug1 is resolved to vitamin B12, Drug2 is resolved to amoxicillin and interaction asserted in DrugBank between Cyanocobalamin and Amoxicillin.',
    minConcept: [
      {
        rxcui: '11248',
        name: 'vitamin B12',
        tty: 'IN',
      },
      {
        rxcui: '723',
        name: 'amoxicillin',
        tty: 'IN',
      },
    ],
    interactionPair: [
      {
        interactionConcept: [
          {
            minConceptItem: {
              rxcui: '11248',
              name: 'vitamin B12',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'DB00115',
              name: 'Cyanocobalamin',
              url: 'https://go.drugbank.com/drugs/DB00115#interactions',
            },
          },
          {
            minConceptItem: {
              rxcui: '1297882',
              name: 'amoxicillin anhydrous',
              tty: 'PIN',
            },
            sourceConceptItem: {
              id: 'DB01060',
              name: 'Amoxicillin',
              url: 'https://go.drugbank.com/drugs/DB01060#interactions',
            },
          },
        ],
        severity: 'N/A',
        description:
          'Cyanocobalamin may decrease the excretion rate of Amoxicillin which could result in a higher serum level.',
      },
      {
        interactionConcept: [
          {
            minConceptItem: {
              rxcui: '11248',
              name: 'vitamin B12',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'DB00115',
              name: 'Cyanocobalamin',
              url: 'https://go.drugbank.com/drugs/DB00115#interactions',
            },
          },
          {
            minConceptItem: {
              rxcui: '723',
              name: 'amoxicillin',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'DB01060',
              name: 'Amoxicillin',
              url: 'https://go.drugbank.com/drugs/DB01060#interactions',
            },
          },
        ],
        severity: 'N/A',
        description:
          'Cyanocobalamin may decrease the excretion rate of Amoxicillin which could result in a higher serum level.',
      },
    ],
  },
  {
    comment:
      'Drug1 (rxcui = 1364430, name = apixaban, tty = IN). Drug2 (rxcui = 3640, name = doxycycline, tty = IN). Drug1 is resolved to apixaban, Drug2 is resolved to doxycycline and interaction asserted in DrugBank between Apixaban and Doxycycline. Drug1 is resolved to apixaban, Drug2 is resolved to doxycycline anhydrous and interaction asserted in DrugBank between Apixaban and Doxycycline.',
    minConcept: [
      {
        rxcui: '1364430',
        name: 'apixaban',
        tty: 'IN',
      },
      {
        rxcui: '3640',
        name: 'doxycycline',
        tty: 'IN',
      },
    ],
    interactionPair: [
      {
        interactionConcept: [
          {
            minConceptItem: {
              rxcui: '1364430',
              name: 'apixaban',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'DB06605',
              name: 'Apixaban',
              url: 'https://go.drugbank.com/drugs/DB06605#interactions',
            },
          },
          {
            minConceptItem: {
              rxcui: '1545992',
              name: 'doxycycline anhydrous',
              tty: 'PIN',
            },
            sourceConceptItem: {
              id: 'DB00254',
              name: 'Doxycycline',
              url: 'https://go.drugbank.com/drugs/DB00254#interactions',
            },
          },
        ],
        severity: 'N/A',
        description:
          'The risk or severity of bleeding can be increased when Doxycycline is combined with Apixaban.',
      },
      {
        interactionConcept: [
          {
            minConceptItem: {
              rxcui: '1364430',
              name: 'apixaban',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'DB06605',
              name: 'Apixaban',
              url: 'https://go.drugbank.com/drugs/DB06605#interactions',
            },
          },
          {
            minConceptItem: {
              rxcui: '3640',
              name: 'doxycycline',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'DB00254',
              name: 'Doxycycline',
              url: 'https://go.drugbank.com/drugs/DB00254#interactions',
            },
          },
        ],
        severity: 'N/A',
        description:
          'The risk or severity of bleeding can be increased when Doxycycline is combined with Apixaban.',
      },
    ],
  },
  {
    comment:
      'Drug1 (rxcui = 161, name = acetaminophen, tty = IN). Drug2 (rxcui = 723, name = amoxicillin, tty = IN). Drug1 is resolved to acetaminophen, Drug2 is resolved to amoxicillin anhydrous and interaction asserted in DrugBank between Acetaminophen and Amoxicillin. Drug1 is resolved to acetaminophen, Drug2 is resolved to amoxicillin and interaction asserted in DrugBank between Acetaminophen and Amoxicillin.',
    minConcept: [
      {
        rxcui: '161',
        name: 'acetaminophen',
        tty: 'IN',
      },
      {
        rxcui: '723',
        name: 'amoxicillin',
        tty: 'IN',
      },
    ],
    interactionPair: [
      {
        interactionConcept: [
          {
            minConceptItem: {
              rxcui: '161',
              name: 'acetaminophen',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'DB00316',
              name: 'Acetaminophen',
              url: 'https://go.drugbank.com/drugs/DB00316#interactions',
            },
          },
          {
            minConceptItem: {
              rxcui: '1297882',
              name: 'amoxicillin anhydrous',
              tty: 'PIN',
            },
            sourceConceptItem: {
              id: 'DB01060',
              name: 'Amoxicillin',
              url: 'https://go.drugbank.com/drugs/DB01060#interactions',
            },
          },
        ],
        severity: 'N/A',
        description:
          'Acetaminophen may decrease the excretion rate of Amoxicillin which could result in a higher serum level.',
      },
      {
        interactionConcept: [
          {
            minConceptItem: {
              rxcui: '161',
              name: 'acetaminophen',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'DB00316',
              name: 'Acetaminophen',
              url: 'https://go.drugbank.com/drugs/DB00316#interactions',
            },
          },
          {
            minConceptItem: {
              rxcui: '723',
              name: 'amoxicillin',
              tty: 'IN',
            },
            sourceConceptItem: {
              id: 'DB01060',
              name: 'Amoxicillin',
              url: 'https://go.drugbank.com/drugs/DB01060#interactions',
            },
          },
        ],
        severity: 'N/A',
        description:
          'Acetaminophen may decrease the excretion rate of Amoxicillin which could result in a higher serum level.',
      },
    ],
  },
];
export default dummy;
