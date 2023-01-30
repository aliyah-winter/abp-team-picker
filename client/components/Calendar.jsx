import React from 'react'

function Calendar() {
  return (
    <>
      <ul className=" flex-col justify-center items-center mx-4 p-4 shadow-2xl shadow-purple-500 rounded-xl bg-purple-100">
        <li>Week 1</li>
        <br></br>
        <li>18:30 | Team 1 vs Team 4</li>
        <li>19:00 | Team 2 vs Team 3</li>
        <li>Team 5 - BYE</li>
      </ul>
      <ul className="mx-4 p-4 shadow-2xl shadow-purple-500 rounded-xl bg-purple-100">
        <li>Week 2</li>
        <li>18:30 | Team 3 vs Team 1</li>
        <li>19:00 | Team 4 vs Team 5</li>
        <li>Team 2 - BYE</li>
      </ul>
      <ul className="mx-4 p-4 shadow-2xl shadow-purple-500 rounded-xl bg-purple-100">
        <li>Week 3</li>
        <li>18:30 | Team 5 vs Team 3</li>
        <li>19:00 | Team 1 vs Team 2</li>
        <li>Team 4 - BYE</li>
      </ul>
      <ul className="mx-4 p-4 shadow-2xl shadow-purple-500 rounded-xl bg-purple-100">
        <li>Week 4</li>
        <li>18:30 | Team 2 vs Team 5</li>
        <li>19:00 | Team 3 vs Team 4</li>
        <li>Team 1 - BYE</li>
      </ul>
      <ul className="mx-4 p-4 shadow-2xl shadow-purple-500 rounded-xl bg-purple-100">
        <li>Week 5</li>
        <li>18:30 | Team 4 vs Team 2</li>
        <li>19:00 | Team 5 vs Team 1</li>
        <li>Team 3 - BYE</li>
      </ul>
    </>
  )
}

export default Calendar
