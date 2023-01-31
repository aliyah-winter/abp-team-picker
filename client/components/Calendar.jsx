import React from 'react'

function Calendar() {
  return (
    <>
      <section className="md:flex md:gap-4 md:justify-items-center">
        <ul className="m-9 px-4 py-6  text-center shadow-xl shadow-purple-500 rounded-xl bg-purple-100">
          <li>Week 1 - Friday 10 Feb</li>
          <br></br>
          <li>18:30 | BIBLICAL vs Team 4</li>
          <li>19:00 | HAMbassadors vs 1 OUTZ</li>
          <br></br>
          <li>Team 5 - BYE</li>
        </ul>
        <ul className="m-9 px-4 py-6 text-center shadow-xl shadow-purple-500 rounded-xl bg-purple-100">
          <li>Week 2 - Friday 17 Feb</li>
          <br></br>
          <li>18:30 | 1 OUTZ vs BIBLICAL</li>
          <li>19:00 | Team 4 vs Team 5</li>
          <br></br>
          <li>HAMbassadors - BYE</li>
        </ul>
        <ul className="m-9 px-4 py-6 text-center shadow-xl shadow-purple-500 rounded-xl bg-purple-100">
          <li>Week 3 - Friday 24 Feb</li>
          <br></br>
          <li>18:30 | Team 5 vs 1 OUTZ</li>
          <li>19:00 | BIBLICAL vs HAMbassadors</li>
          <br></br>
          <li>Team 4 - BYE</li>
        </ul>
        <ul className="m-9 px-4 py-6 text-center shadow-xl shadow-purple-500 rounded-xl bg-purple-100">
          <li>Week 4 - Friday 3 March</li>
          <br></br>
          <li>18:30 | HAMbassadors vs Team 5</li>
          <li>19:00 | 1 OUTZ vs Team 4</li>
          <br></br>
          <li>BIBLICAL - BYE</li>
        </ul>
        <ul className="m-9 px-4 py-6 text-center shadow-xl shadow-purple-500 rounded-xl bg-purple-100">
          <li>Week 5 - Friday 10 March</li>
          <br></br>
          <li>18:30 | Team 4 vs HAMbassadors</li>
          <li>19:00 | Team 5 vs BIBLICAL</li>
          <br></br>
          <li>1 OUTZ - BYE</li>
        </ul>
      </section>
    </>
  )
}

export default Calendar
