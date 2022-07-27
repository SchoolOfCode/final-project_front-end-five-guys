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
import { useEffect, useState } from "react"
import BasicModal from "../../../MUIcomponents/modal"
import "./notifications.css"

const dummyData = 
{
    name: 'simvastatin',
    dosage: '200',
    measurement: 'mg',
    freq1: '2',
    freq2: 'day',
    amount: 14,
    prescription_date: "2022-7-20",
    status: 'paused',
  }

//   {
//     name: 'apixaban',
//     dosage: '400',
//     measurement: 'mg',
//     freq1: '2',
//     freq2: 'day',
//     status: 'paused',
//   }
//   {
//     name: 'atorvastatin',
//     dosage: '100',
//     measurement: 'ml',
//     freq1: '3',
//     freq2: 'week',
//     status: 'active',
//   },

//  ******controlled drugs have a default max 6 months timeline*****

const issues = ["You Need to renew your prescription for awesomeness pills", "Please make an appointment with your doctor regarding you blood sugar levels"]

export default function Notifications(){
const [alerts, SetAlerts] = useState(issues)
const [notifications, SetNotifications] = useState(0)


useEffect ( ()=>{

function findDate(obj){
    let a = obj.prescription_date
    const l = a.split("-")
    const i = new Date()
    i.setFullYear(l[0], l[1]-1, l[2])
    // const p = i.toLocaleDateString()
    return i
}


function prescriptionEndDate(date, obj){
    let amount = obj.amount
    let freq1 = Number(obj.freq1)
    let freq2 = obj.freq2
    let times = 0
    if (freq2 === 'day'){
        times = 1;
    } else if (freq2 === 'week') { 
        times = 1/7
    } else if (freq2 === 'hour') {
        times = 24
    }
    const days = amount/(freq1*times)
    const startDate = new Date(date)
    //const test = new Date(startDate)
    startDate.setDate(startDate.getDate()+ days)
    return startDate
   }

   
   const _MS_PER_DAY = 1000 * 60 * 60 * 24;
   
   // a and b are javascript Date objects
   function dateDiffInDays(a, b) {
     // Discard the time and time-zone information.
     const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
     const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
   
     return Math.floor((utc2 - utc1) / _MS_PER_DAY);
   }

   
   
    function compareDates(dummyData){
        const today = new Date();
        const dateOfIssue = findDate(dummyData);
        const endDate = prescriptionEndDate(dateOfIssue, dummyData)
        const result = dateDiffInDays(today, endDate)
        if (result < 7) {
            SetNotifications((notifications) => {return notifications +1})
            // SetNotifications(notifications +1)
        }
    
    }
compareDates(dummyData)
},[]
)
return(
<div className = "notification-box">
    <h2>Notifications</h2>
    <button>{notifications}</button>
    {/* {alerts.map((alerts) => {return <BasicModal data = {alerts}/>})} */}
</div>
)
}
// {alerts.map((alert) => {return <p key = {alert + 1}> {alert} </p>})}

    


