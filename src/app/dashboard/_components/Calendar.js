"use client"

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import styled from 'styled-components';
import moment from 'moment'
import { Calendar1Icon } from 'lucide-react';
import { Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle } from '@/components/ui/drawer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Editor from './Editor';
import TinyMCEEditor from './Editor';


function CustomCalendar({mark}) {
  const [date, setDate] = useState(new Date()); // state to handle date selection
  const [selectedDate, setSelectedDate] = useState(null); // state to store the selected date
  const [drawerOpen,setDrawerOpen] = useState(false)
  const [sheetOpen,setsheetOpen] = useState(false)
  const [sheetData,setSheetData] = useState([])



  const monthNames = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
  ]

  const monthsWithYear = mark.map(item => {
    const date = new Date(item.date.split("-").reverse().join("-"))
    return `${monthNames[date.getMonth()]} ${date.getFullYear()}`
  })

  const uniqueMonthsWithYear = [...new Set(monthsWithYear)]
  uniqueMonthsWithYear.push("All")

  // Handler for tile click (to select a date)
  const handleDateClick = (value) => {
    setSelectedDate(value);  // Set the selected date
    //alert(`You clicked on ${value.toDateString()}`);
    setDrawerOpen(true)
  };


  // console.log(mark)


  // Function to disable dates ahead of today
  const tileDisabled = ({ date }) => {
    return date > new Date(); // Disable dates that are after today
  };

  const tileClassName = ({date}) =>{
    const formattedDate = moment(date).format("DD-MM-YYYY");
    const matchingMark = mark.find(item => item.date === formattedDate)

    if(matchingMark){
      return 'highlightColor';
    }
    else{
      return '';
    }
  }

  const handleCloseDrawer = () =>{
    setDrawerOpen(false)
  }

  const handleActivities = () =>{
    setDrawerOpen(false)
  }


  const handleSheetOpen = () =>{
    setsheetOpen(true)
  }





  return (
    <div className='container py-8 px-8 shadow-2xl shadow-orange-600 lg:w-1/2'>
      <Card className="px-8 py-8">
        <CardHeader className="px-4 py-4 flex flex-row justify-between">
          <h1 className='text-2xl font-bold px-4 py-4 flex flex-row'>Milestones<Calendar1Icon className='mt-1 ml-2'/>
          </h1>
          <div className='px-2 py-2'><Button className="bg-orange-500" onClick = {handleSheetOpen}>Show All Activities</Button></div>
        </CardHeader>
        <CardContent>
          <CalendarContainer>
            <Calendar
              onChange={setDate}
              value={date}
              prevLabel="Previous Month"
              nextLabel="Next Month"
              tileDisabled={tileDisabled}  // Disable dates ahead of today
              onClickDay={handleDateClick} 
              tileClassName={tileClassName}
            />
          </CalendarContainer>
        </CardContent>
      </Card>

        <Drawer className="" open={drawerOpen} onClose={handleCloseDrawer}>
          <DrawerContent className="flex justify-center items-center">
          <div className="w-full max-w-max px-6 py-4">
        <DrawerTitle className="flex items-center justify-center">
          <h1 className='text-2xl font-bold'>Add Your Journal Activity Here</h1>
        </DrawerTitle>

        <div className="my-4">
          <TinyMCEEditor />
        </div>

        <DrawerFooter className="flex justify-center">
          <DrawerClose>
            <Button className="mx-2">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </div>
    </DrawerContent>
        </Drawer>

        <Sheet open={sheetOpen} onOpenChange={setsheetOpen}>
        <SheetContent className="lg:w-[800px] sm:w-[540px]">
        <SheetHeader>
        <SheetTitle>
          Your Activities
          <div>
            {uniqueMonthsWithYear.map((idx) => (
              <Badge key={idx} className="bg-orange-500 m-1" style={{cursor:"pointer"}} onClick={() => handleMonthFilterData(idx)}>{idx}</Badge>
            ))}
          </div>
        </SheetTitle>
        <SheetDescription>
        <SheetDescription>
          <h1>Loading Data</h1>

      </SheetDescription>
        </SheetDescription>
        </SheetHeader>
      </SheetContent>

      </Sheet>

    </div>
  );
}

export default CustomCalendar;
/*Calendar Container SCC */
const CalendarContainer = styled.div`
  /* ~~~ container styles ~~~ */
  .react-calendar {
    border-radius: 10px;
    // background-color: #fff9c4; /* Light yellow background for the calendar */
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  }

  /* ~~~ navigation styles ~~~ */
  .react-calendar__navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: #ff7f50; /* Orange background for the navigation */
    border-radius: 8px 8px 0 0;
    color: white;<Drawer open={drawerOpen} onClose={handleCloseDrawer}>
        <DrawerContent>
          <h1>Content to Add Here</h1>
        </DrawerContent>
        <DrawerFooter>
          <Button>Submit</Button>
        </DrawerFooter>
      </Drawer>
  }

  .react-calendar__navigation__label {
    font-size: 1.5rem;
    font-weight: bold;
    text-transform: uppercase;
  }

  .react-calendar__navigation__arrow {
    font-size: 1.5rem;
    color: white;
    padding: 8px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .react-calendar__navigation__arrow:hover {
    background-color: #ff7f50; /* Darker orange when hovering */
  }

  /* ~~~ tile styles ~~~ */
  .react-calendar__tile {
    font-size: 1.25rem;
    height: 50px;
    width: 50px;
    line-height: 50px;
    transition: background-color 0.3s, transform 0.3s;
    cursor: pointer;
  }

  /* Hover effect for tiles */
  .react-calendar__tile:hover {
    background-color: #ffbb77; /* Light orange */
    transform: scale(1.1); /* Slight zoom effect */

  }

  /* Selected date style */
  .react-calendar__tile--active {
    background-color: #ff7f50; /* Active date with dark orange */
    color: white;
  }

  /* Mark the clicked date as selected (custom style for selected tile) */
  .react-calendar__tile--selected {
    background-color: #ffeb3b; /* Light yellow to mark the selected tile */
    color: #000;
  }

  /* Disabled tiles (if you want to disable some dates, you can use the tileDisabled prop) */
  .react-calendar__tile--disabled {
    background-color: #e0e0e0;
    cursor: not-allowed;
  }

  /* Today's date style */
  .react-calendar__tile--now {
    border: 2px solid #ff7f50; /* Border around today's date */
    font-weight: bold;
  }

  .highlightColor{
    background-color:#A0CED9
  }

  
  .react-calendar__month-view__weekdays__weekday{
    display:flex;
    justify-content:center;
    background-color:white;
    text-decoration:none;
    
  }
`;


// import { Card, CardContent, CardHeader } from '@/components/ui/card';
// import React, { useState } from 'react';
// import Calendar from 'react-calendar';
// import styled from 'styled-components';

// function CustomCalendar() {
//   const [date, setDate] = useState(new Date()); // State to handle current date
//   const [selectedDate, setSelectedDate] = useState(null); // State to store selected date

//   // Example of disabling weekends
//   const isWeekend = (date) => {
//     const day = date.getDay();
//     return day === 0 || day === 6; // Disable Sunday (0) and Saturday (6)
//   };

//   // Example of disabling specific holidays
//   const holidays = [
//     new Date(2025, 0, 1), // New Year's Day
//     new Date(2025, 11, 25), // Christmas Day
//   ];

//   const isHoliday = (date) => {
//     return holidays.some(
//       (holiday) =>
//         holiday.getDate() === date.getDate() &&
//         holiday.getMonth() === date.getMonth() &&
//         holiday.getFullYear() === date.getFullYear()
//     );
//   };

//   // Function to disable dates based on the weekend and holidays
//   const tileDisabled = ({ date }) => {
//     return isWeekend(date) || isHoliday(date); // Disable weekends and holidays
//   };

//   // Function to apply custom styling to tiles based on conditions
//   const tileClassName = ({ date }) => {
//     let className = '';
    
//     // Highlight weekends
//     if (isWeekend(date)) {
//       className += ' weekend';
//     }

//     // Highlight holidays
//     if (isHoliday(date)) {
//       className += ' holiday';
//     }

//     // Highlight the selected date
//     if (selectedDate && date.toDateString() === selectedDate.toDateString()) {
//       className += ' selected';
//     }

//     return className;
//   };

//   // Handler for tile click (to select a date)
//   const handleDateClick = (value) => {
//     setSelectedDate(value); // Set the selected date
//     alert(`You clicked on ${value.toDateString()}`);
//   };

//   return (
//     <div className='container py-8 px-8 shadow-2xl shadow-orange-600'>
//       <Card className="px-8 py-8">
//         <CardHeader>
//           Milestones
//         </CardHeader>
//         <CardContent>
//           <CalendarContainer>
//             <Calendar
//               onChange={setDate}
//               value={date}
//               prevLabel="←"
//               nextLabel="→"
//               tileDisabled={tileDisabled}  // Disable dates based on logic
//               onClickDay={handleDateClick}  // Handle tile click
//               tileClassName={tileClassName}  // Apply custom styles based on logic
//             />
//           </CalendarContainer>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }

// export default CustomCalendar;

// const CalendarContainer = styled.div`
//   /* ~~~ container styles ~~~ */
//   .react-calendar {
//     border-radius: 10px;
//     background-color: #fff9c4; /* Light yellow background for the calendar */
//     box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
//   }

//   /* ~~~ navigation styles ~~~ */
//   .react-calendar__navigation {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     padding: 10px 20px;
//     background-color: #ff7f50; /* Orange background for the navigation */
//     border-radius: 8px 8px 0 0;
//     color: white;
//   }

//   .react-calendar__navigation__label {
//     font-size: 1.5rem;
//     font-weight: bold;
//     text-transform: uppercase;
//   }

//   .react-calendar__navigation__arrow {
//     font-size: 1.5rem;
//     color: white;
//     padding: 8px;
//     cursor: pointer;
//     transition: background-color 0.3s;
//   }

//   .react-calendar__navigation__arrow:hover {
//     background-color: #ff5733; /* Darker orange when hovering */
//   }

//   /* ~~~ tile styles ~~~ */
//   .react-calendar__tile {
//     background-color: antiquewhite;
//     font-size: 1.25rem;
//     height: 50px;
//     width: 50px;
//     line-height: 50px;
//     transition: background-color 0.3s, transform 0.3s;
//     cursor: pointer;
//   }

//   /* Hover effect for tiles */
//   .react-calendar__tile:hover {
//     background-color: #ffbb77; /* Light orange */
//     transform: scale(1.1); /* Slight zoom effect */
//   }

//   /* Custom styles for weekends */
//   .weekend {
//     background-color: #f7e8e8; /* Light red background for weekends */
//     color: #d32f2f; /* Red color for weekend dates */
//   }

//   /* Custom styles for holidays */
//   .holiday {
//     background-color: #ffeb3b; /* Light yellow background for holidays */
//     color: #000; /* Black color for holiday dates */
//   }

//   /* Custom styles for the selected date */
//   .selected {
//     background-color: #ff5733; /* Dark orange for selected date */
//     color: white;
//   }

//   /* Disabled tiles */
//   .react-calendar__tile--disabled {
//     background-color: #e0e0e0;
//     cursor: not-allowed;
//   }

//   /* Today's date style */
//   .react-calendar__tile--now {
//     border: 2px solid #ff7f50; /* Border around today's date */
//     font-weight: bold;
//   }
// `;
