import React from 'react'

function Calendar() {
  return (
    <>
      <section className="md:flex md:justify-items-center">
        <ul className="mx-9 my-12 py-6 text-center shadow-xl shadow-purple-500 rounded-xl bg-purple-100">
          <h1 className="text-xl font-heading">WEEK 1 - FRIDAY 10 FEB</h1>
          <hr className="bg-purple-300 h-0.5 my-4" />
          <li>18:30 | BIBLICAL vs MAGIC FINGERS</li>
          <br />
          <li>19:00 | HAMbassadors vs 1 OUTZ</li>
          <hr className="bg-purple-300 h-0.5 my-4" />
          <li>NOT IN MY LIBRARY!! - BYE</li>
        </ul>
        <ul className="mx-9 my-12 px-4 py-6 text-center shadow-xl shadow-purple-500 rounded-xl bg-purple-100">
          <h1 className="text-xl font-heading">WEEK 2 - FRIDAY 17 FEB</h1>
          <hr className="bg-purple-300 h-0.5 my-4" />
          <li>18:30 | MAGIC FINGERS vs NOT IN MY LIBRARY!!</li>
          <br />
          <li>19:00 | 1 OUTZ vs BIBLICAL</li>
          <hr className="bg-purple-300 h-0.5 my-4" />
          <li>HAMbassadors - BYE</li>
        </ul>
        <ul className="mx-9 my-12 px-4 py-6 text-center shadow-xl shadow-purple-500 rounded-xl bg-purple-100">
          <h1 className="text-xl font-heading">WEEK 3 - FRIDAY 24 FEB</h1>
          <hr className="bg-purple-300 h-0.5 my-4" />
          <li>18:30 | NOT IN MY LIBRARY!! vs 1 OUTZ</li>
          <br />
          <li>19:00 | BIBLICAL vs HAMbassadors</li>
          <hr className="bg-purple-300 h-0.5 my-4" />
          <li>MAGIC FINGERS - BYE</li>
        </ul>
        <ul className="mx-9 my-12 px-4 py-6 text-center shadow-xl shadow-purple-500 rounded-xl bg-purple-100">
          <h1 className="text-xl font-heading">WEEK 4 - FRIDAY 3 MARCH</h1>
          <hr className="bg-purple-300 h-0.5 my-4" />
          <li>18:30 | HAMbassadors vs NOT IN MY LIBRARY!!</li>
          <br />
          <li>19:00 | 1 OUTZ vs MAGIC FINGERS</li>
          <hr className="bg-purple-300 h-0.5 my-4" />
          <li>BIBLICAL - BYE</li>
        </ul>
        <ul className="mx-9 my-12 px-4 py-6 text-center shadow-xl shadow-purple-500 rounded-xl bg-purple-100">
          <h1 className="text-xl font-heading">WEEK 5 - FRIDAY 10 MARCH</h1>
          <hr className="bg-purple-300 h-0.5 my-4" />
          <li>18:30 | NOT IN MY LIBRARY!! vs BIBLICAL</li>
          <br />
          <li>19:00 | MAGIC FINGERS vs HAMbassadors</li>
          <hr className="bg-purple-300 h-0.5 my-4" />
          <li>1 OUTZ - BYE</li>
        </ul>
      </section>
    </>
  )
}

export default Calendar
