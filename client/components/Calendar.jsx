import React from 'react'

function Calendar() {
  return (
    <>
      <section className="md:flex md:gap-4 md:justify-items-center">
        <ul className="m-9 px-4 py-6  text-center shadow-xl shadow-purple-500 rounded-xl bg-purple-100">
          <h1 className="text-xl font-bold">WEEK 1 - FRIDAY 10 FEB</h1>
          <br></br>
          <li>18:30 | BIBLICAL vs TEAM 4</li>
          <li>19:00 | HAMbassadors vs 1 OUTZ</li>
          <br></br>
          <li>TEAM 5 - BYE</li>
        </ul>
        <ul className="m-9 px-4 py-6 text-center shadow-xl shadow-purple-500 rounded-xl bg-purple-100">
          <h1 className="text-xl font-bold">WEEK 2 - FRIDAY 17 FEB</h1>
          <br></br>
          <li>18:30 | 1 OUTZ vs BIBLICAL</li>
          <li>19:00 | TEAM 4 vs TEAM 5</li>
          <br></br>
          <li>HAMbassadors - BYE</li>
        </ul>
        <ul className="m-9 px-4 py-6 text-center shadow-xl shadow-purple-500 rounded-xl bg-purple-100">
          <h1 className="text-xl font-bold">WEEK 3 - FRIDAY 24 FEB</h1>
          <br></br>
          <li>18:30 | TEAM 5 vs 1 OUTZ</li>
          <li>19:00 | BIBLICAL vs HAMbassadors</li>
          <br></br>
          <li>TEAM 4 - BYE</li>
        </ul>
        <ul className="m-9 px-4 py-6 text-center shadow-xl shadow-purple-500 rounded-xl bg-purple-100">
          <h1 className="text-xl font-bold">WEEK 4 - FRIDAY 3 MARCH</h1>
          <br></br>
          <li>18:30 | HAMbassadors vs TEAM 5</li>
          <li>19:00 | 1 OUTZ vs TEAM 4</li>
          <br></br>
          <li>BIBLICAL - BYE</li>
        </ul>
        <ul className="m-9 px-4 py-6 text-center shadow-xl shadow-purple-500 rounded-xl bg-purple-100">
          <h1 className="text-xl font-bold">WEEK 5 - FRIDAY 10 MARCH</h1>
          <br></br>
          <li>18:30 | TEAM 4 vs HAMbassadors</li>
          <li>19:00 | TEAM 5 vs BIBLICAL</li>
          <br></br>
          <li>1 OUTZ - BYE</li>
        </ul>
      </section>
    </>
  )
}

export default Calendar
