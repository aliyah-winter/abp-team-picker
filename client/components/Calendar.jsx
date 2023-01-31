import React from 'react'

function Calendar() {
  return (
    <>
      <ul className="m-9 pl-10 py-5 shadow-xl shadow-purple-500 rounded-xl bg-purple-100">
        <li>Week 1 - Friday 10 Feb</li>
        <br></br>
        <li>18:30 | Team 1 vs Team 4</li>
        <li>19:00 | Team 2 vs Team 3</li>
        <br></br>
        <li>Team 5 - BYE</li>
      </ul>
      <ul className="m-9 pl-10 py-5 shadow-xl shadow-purple-500 rounded-xl bg-purple-100">
        <li>Week 2 - Friday 17 Feb</li>
        <br></br>
        <li>18:30 | Team 3 vs Team 1</li>
        <li>19:00 | Team 4 vs Team 5</li>
        <br></br>
        <li>Team 2 - BYE</li>
      </ul>
      <ul className="m-9 pl-10 py-5 shadow-xl shadow-purple-500 rounded-xl bg-purple-100">
        <li>Week 3 - Friday 24 Feb</li>
        <br></br>
        <li>18:30 | Team 5 vs Team 3</li>
        <li>19:00 | Team 1 vs Team 2</li>
        <br></br>
        <li>Team 4 - BYE</li>
      </ul>
      <ul className="m-9 pl-10 py-5 shadow-xl shadow-purple-500 rounded-xl bg-purple-100">
        <li>Week 4 - Friday 3 March</li>
        <br></br>
        <li>18:30 | Team 2 vs Team 5</li>
        <li>19:00 | Team 3 vs Team 4</li>
        <br></br>
        <li>Team 1 - BYE</li>
      </ul>
      <ul className="m-9 pl-10 py-5 shadow-xl shadow-purple-500 rounded-xl bg-purple-100">
        <li>Week 5 - Friday 10 March</li>
        <br></br>
        <li>18:30 | Team 4 vs Team 2</li>
        <li>19:00 | Team 5 vs Team 1</li>
        <br></br>
        <li>Team 3 - BYE</li>
      </ul>
    </>
  )
}

export default Calendar
