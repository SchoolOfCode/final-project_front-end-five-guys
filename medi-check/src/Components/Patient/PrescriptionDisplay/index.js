import useInteractions from '../../../Hooks/useInteractionsFromName';
import Item from './Item';
import { dummy, testInteractions } from './dummyData';
import CustomizedAccordions from '../../../MUIcomponents/Accordian';

//Will fetch backend to get the patient prescription names and information, then plug that into the API twice.
//Working on functionality now, not completeness
function PrescriptionDisplay() {
  // let itemInteractions = useInteractions(dummy);
  let itemInteractions = testInteractions;

  //This is taking the API data and for each drug interaction it is grouping together the drug, the drug it is interacting with, and the description
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

  return (
    <CustomizedAccordions drugArray={combo}>
      {combo.map((item) => {
        return <Item medicine={item} />;
      })}
    </CustomizedAccordions>
  );
}

export default PrescriptionDisplay;
