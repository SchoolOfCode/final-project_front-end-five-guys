import useInteractions from '../../../Hooks/useInteractionsFromName';
import { dummy, testInteractions } from './dummyData';
//Will fetch backend to get the patient prescription names and information, then plug that into the API twice.
//Working on functionality now, not completeness
function PrescriptionDisplay() {
  // let itemInteractions = useInteractions(dummy);
  let itemInteractions = testInteractions;
  console.log(itemInteractions);
  return <div className="hi">{itemInteractions.length}</div>;
}

export default PrescriptionDisplay;
