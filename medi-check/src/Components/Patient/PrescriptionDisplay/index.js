import useInteractions from '../../../Hooks/useInteractionsFromName';
import { dummy, testInteractions } from './dummyData';
//Will fetch backend to get the patient prescription names and information, then plug that into the API twice.
//Working on functionality now, not completeness
function PrescriptionDisplay() {
  // let itemInteractions = useInteractions(dummy);
  let itemInteractions = testInteractions;
  // console.log(itemInteractions, Array.isArray(itemInteractions));
  // console.log("rawr", itemInteractions[0].interactionPair[0].severity)
  let i = 0;
  let combo = dummy.map((item) => {
    let overview = itemInteractions.filter((info) => {
      return (
        item === info.minConcept[0].name || item === info.minConcept[1].name
      );
    });
    let relevantInfo = overview.map((item) => {
      return {
        description: item.interactionPair[0].description,
        drugs: item.minConcept,
      };
    });
    return {
      drug: item,
      interactionInfo: relevantInfo,
    };
  });
  console.log('done?', combo);
  return (
    <>
      <div className="hi">{itemInteractions.length}</div>
      <div>Medicine 1: {itemInteractions[i].minConcept[0].name}</div>
      <div>Medicine 2: {itemInteractions[i].minConcept[1].name}</div>
      <div>
        Severity of interaction:{' '}
        {itemInteractions[i].interactionPair[0].severity}
      </div>
      <div>
        Description: {itemInteractions[i].interactionPair[0].description}
      </div>
    </>
  );
}

export default PrescriptionDisplay;
