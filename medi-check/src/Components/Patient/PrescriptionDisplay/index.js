import useInteractions from '../../../Hooks/useInteractionsFromName';
// import Item from './Item';
import { dummy, testInteractions } from './dummyData';
import CustomizedAccordions from '../../../MUIcomponents/Accordian';

//Will fetch backend to get the patient prescription names and information, then plug that into the API twice.
//Working on functionality now, not completeness
function PrescriptionDisplay() {
  // let itemInteractions = useInteractions(dummy);
  let itemInteractions = testInteractions;

  //This is taking the API data and for each drug interaction it is grouping together the drug, the drug it is interacting with, and the description
  let combo = dummy.map((obj) => {
    let overview = itemInteractions.filter((info) => {
      return (
        obj.name === info.minConcept[0].name ||
        obj.name === info.minConcept[1].name
      );
    });
    let relevantInfo = overview.map((item) => {
      return {
        description: item.interactionPair[0].description,
        drugs: item.minConcept,
      };
    });
    return {
      drug: obj.name,
      interactionInfo: relevantInfo,
      drugInfo:
        obj.dosage +
        obj.measurement +
        ' ' +
        obj.freq1 +
        ' time(s) per ' +
        obj.freq2,
      status: obj.status
    };
  })
//filter out inactive
const history = combo.filter((info) => {return info.status === 'inactive'})
//fliter active and paused
const current = combo.filter((info) => {return info.status === 'active' || info.status === 'paused'})

  return (
  <CustomizedAccordions drugArray={current}></CustomizedAccordions>
  );
}

export default PrescriptionDisplay;
