import React from 'react'

function Results() {
  return (
    <>
      <section className="md:flex md:gap-4 md:justify-items-center">
        <ul className="grow mx-9 my-12 p-4 shadow-xl shadow-blue-500 rounded-xl bg-blue-100 text-center">
          <h1 className="text-xl font-heading">STANDINGS</h1>
          <hr className="bg-blue-300 h-0.5 my-4" />
          <li>1st - BIBLICAL</li>
          <li>2nd - HAMbassadors</li>
          <li>3rd - 1 OUTZ</li>
          <li>4th - NOT IN MY LIBRARY!!</li>
          <li>5th - MAGIC FINGERS</li>
        </ul>
        <ul className="grow mx-9 my-12 p-4 shadow-xl shadow-blue-500 rounded-xl bg-blue-100 text-center">
          <h1 className="text-xl font-heading">WEEK 1</h1>
          <hr className="bg-blue-300 h-0.5 my-4" />
          <li className="ring-1 rounded-xl">BIBLICAL - 5</li>
          <li>vs</li>
          <li>MAGIC FINGERS - 1</li>
          <hr className="bg-blue-300 h-0.5 my-4" />
          <li className="ring-1 rounded-xl">HAMbassadors - 2</li>
          <li>vs</li>
          <li>1 OUTZ - 1</li>
        </ul>
        <ul className="grow mx-9 my-12 p-4 shadow-xl shadow-blue-500 rounded-xl bg-blue-100 text-center">
          <h1 className="text-xl font-heading">WEEK 2</h1>
          <hr className="bg-blue-300 h-0.5 my-4" />
          <li className="ring-1 rounded-xl">MAGIC FINGERS - 4</li>
          <li>vs</li>
          <li className="ring-1 rounded-xl">NOT IN MY LIBRARY!! - 4</li>
          <hr className="bg-blue-300 h-0.5 my-4" />
          <li>1 OUTZ - 0</li>
          <li>vs</li>
          <li className="ring-1 rounded-xl">BIBLICAL - 1</li>
        </ul>
        <ul className="grow mx-9 my-12 p-4 shadow-xl shadow-blue-500 rounded-xl bg-blue-100 text-center">
          <h1 className="text-xl font-heading">WEEK 3</h1>
          <hr className="bg-blue-300 h-0.5 my-4" />
          <li>NOT IN MY LIBRARY!! - 1</li>
          <li>vs</li>
          <li className="ring-1 rounded-xl">BIBLICAL - 3</li>
          <hr className="bg-blue-300 h-0.5 my-4" />
          <li>MAGIC FINGERS - 3</li>
          <li>vs</li>
          <li className="ring-1 rounded-xl">HAMbassadors - 5</li>
        </ul>
        <ul className="grow mx-9 my-12 p-4 shadow-xl shadow-blue-500 rounded-xl bg-blue-100 text-center">
          <h1 className="text-xl font-heading">WEEK 4</h1>
          <hr className="bg-blue-300 h-0.5 my-4" />
          <li>HAMbassadors - 0</li>
          <li>vs</li>
          <li className="ring-1 rounded-xl">NOT IN MY LIBRARY!! - 3</li>
          <hr className="bg-blue-300 h-0.5 my-4" />
          <li className="ring-1 rounded-xl">1 OUTZ - 2</li>
          <li>vs</li>
          <li>MAGIC FINGERS - 1</li>
        </ul>
        <ul className="grow mx-9 my-12 p-4 shadow-xl shadow-blue-500 rounded-xl bg-blue-100 text-center">
          <h1 className="text-xl font-heading">WEEK 5</h1>
          <hr className="bg-blue-300 h-0.5 my-4" />
          <li>NOT IN MY LIBRARY!! - 1</li>
          <li>vs</li>
          <li className="ring-1 rounded-xl">1 OUTZ - 2</li>
          <hr className="bg-blue-300 h-0.5 my-4" />
          <li className="ring-1 rounded-xl">BIBLICAL - 2</li>
          <li>vs</li>
          <li>HAMbassadors - 1</li>
        </ul>
      </section>
    </>
  )
}

export default Results
