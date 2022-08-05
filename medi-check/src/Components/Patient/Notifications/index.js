/*
-----to get today's date ------ const date = new Date().toLocaleDateString()

if (someday > today) {
  text = "Today is before January 14, 2100.";
} else {
  text = "Today is after January 14, 2100.";
}


Text area for notification
Box for notifications, starts at 0. Changes depending on number of notifications and turns red(?)
clicking on number takes you to alerts/opens up window with them

for new prescription requirement we will need to:
        take in prescription start
        amount of medication prescribed
        work out how long that medication should last and get an estimated end date
        compare end date and today's date
        notify if less than 1 week(?)

*/
import { useEffect, useState } from 'react';
//import BasicModal from "../../../MUIcomponents/PrescriptionModal";
import './notifications.css';
import BasicPopover from '../../../MUIcomponents/Popover';

//dummy data for prepaid expiry
const pEmail = 'vickismith@email.com';

export const dummyData = [
  {
    name: 'simvastatin',
    dosage: '200',
    measurement: 'mg',
    freq1: '2',
    freq2: 'day',
    amount: 14,
    prescription_date: '2022-7-20',
    status: 'paused',
  },
  {
    name: 'apixaban',
    dosage: '400',
    measurement: 'mg',
    freq1: '2',
    freq2: 'day',
    amount: 14,
    prescription_date: '2022-7-20',
    status: 'paused',
  },
  {
    name: 'atorvastatin',
    dosage: '100',
    measurement: 'ml',
    freq1: '2',
    freq2: 'day',
    amount: 14,
    prescription_date: '2022-7-20',
    status: 'active',
  },
];

export function Notifications({ data }) {
  //alerts state contains medication that will need to be renewed and notifications state holds the number of them
  const [alerts, SetAlerts] = useState([]);
  const [notifications, SetNotifications] = useState(0);
  const [paidDate, setPaidDate] = useState('');
  const [patient, setPatient] = useState({});

  //gets patient data
  useEffect(() => {
    if (pEmail) {
      async function getPatient() {
        let response = await fetch(
          `http://localhost:3001/patient?email=${pEmail}`
        );
        let data = await response.json();
        console.log('patient data ', data.data[0]);
        setPatient(data.data[0]);
      }
      getPatient();
    }
  }, []);

  //works out if pre paid need updating prepaid
  useEffect(() => {
    // function takes the prepaid expiry date string and formats it into a full date
    function findDate(d) {
      const date = d.split('-');
      const newDate = new Date();
      newDate.setFullYear(date[0], date[1] - 1, date[2]);
      return newDate;
    }

    // a and b are javascript Date objects
    function dateDiffInDays(a, b) {
      const _MS_PER_DAY = 1000 * 60 * 60 * 24;
      // Discard the time and time-zone information.
      const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
      const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
      return Math.floor((utc2 - utc1) / _MS_PER_DAY);
    }

    if (Object.keys(patient).length !== 0) {
      const today = new Date();

      const dateOfExpiry = findDate(patient.prepaid);
      console.log('expires on', dateOfExpiry);
      const result = dateDiffInDays(today, dateOfExpiry);
      console.log('days till expiry,', result);
      const displayDate = `${dateOfExpiry.getDay()}/${
        dateOfExpiry.getMonth() + 1
      }/${dateOfExpiry.getFullYear()}`;

      if (result < 90 && result > 14) {
        console.log(
          `Your pre-paid prescription expires within 3 months, on ` +
            displayDate
        );
        setPaidDate(
          `Your pre-paid prescription expires within 3 months, on ` +
            displayDate
        );
      } else if (result < 14 && result > 0) {
        setPaidDate(
          `Your pre-paid prescription expires in less than a fortnight, on ` +
            displayDate
        );
      } else if (result <= 0) {
        setPaidDate(`Your pre-paid prescription has expired`);
      }

      if (paidDate !== '') {
        SetNotifications((notifications) => {
          return notifications + 1;
        });
      }
    }
  }, [patient, paidDate]);

  useEffect(() => {
    // function takes the prescription date string and formats it into a full date
    function findDate(obj) {
      let prescription_date = obj.prescription_date;
      const date = prescription_date.split('-');
      const newDate = new Date();
      newDate.setFullYear(date[0], date[1] - 1, date[2]);
      return newDate;
    }

    //function calculates the end date of prescription
    function prescriptionEndDate(date, obj) {
      let amount = obj.amount;
      let freq1 = Number(obj.freq1);
      let freq2 = obj.freq2;
      let times = 0;
      if (freq2 === 'day') {
        times = 1;
      } else if (freq2 === 'week') {
        times = 1 / 7;
      } else if (freq2 === 'hour') {
        times = 24;
      }
      const days = amount / (freq1 * times);
      const startDate = new Date(date);
      startDate.setDate(startDate.getDate() + days);
      return startDate;
    }

    // a and b are javascript Date objects
    function dateDiffInDays(a, b) {
      const _MS_PER_DAY = 1000 * 60 * 60 * 24;
      // Discard the time and time-zone information.
      const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
      const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

      return Math.floor((utc2 - utc1) / _MS_PER_DAY);
    }

    //compares prescription issue date with today's date and adds notification and alert for prescriptions with less than 7 days remaining
    function compareDates(prescription) {
      const alertArr = alerts;
      const today = new Date();
      const dateOfIssue = findDate(prescription);
      const endDate = prescriptionEndDate(dateOfIssue, prescription);
      const result = dateDiffInDays(today, endDate);
      if (result < 7) {
        SetNotifications((notifications) => {
          return notifications + 1;
        });
        alertArr.push(prescription.name);
      }
      SetAlerts(alertArr);
    }
    data.map((data) => {
      return compareDates(data);
    });
  }, [data, alerts]);
  return (
    <div className="notification-box">
      <h2>Notifications</h2>
      {/* <button>{notifications}</button> */}
      {/*<BasicModal data = {alerts} notifications = {notifications}/>*/}
      <BasicPopover
        data={alerts}
        notifications={notifications}
        prepaid={paidDate}
      />
    </div>
  );
}
// {alerts.map((alert) => {return <p key = {alert + 1}> {alert} </p>})}
