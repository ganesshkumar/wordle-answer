import Head from 'next/head'
import React from 'react';

import { getWords } from '../data/wordlist'

const getIndexForDay = (dayOffset: number = 0) => {
  const msInADay = 24 * 60 * 60 * 1000
  const targetDay = Date.now() + (dayOffset * msInADay)
  const firstDay = new Date("2021-06-17 00:00:00").getTime()
  return Math.floor((targetDay - firstDay) / msInADay)
}

const Home = ({words}) => {

  const todayIndex = getIndexForDay(0)
  const todayAnswer = words[todayIndex]
  const tomorrowAnswer = words[todayIndex + 1]
  console.log('words', words)
  console.log(todayIndex)

  return (
    <div>
      <Head>
        <title>{todayAnswer} | Wordle Answer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen h-full flex flex-col  justify-between items-center">
        <div className="self-stretch flex flex-row justify-center border-b-2 pt-2 pb-2">
          <div className="font-bold text-xl">
            Answer for <a className="tracking-" href="https://www.powerlanguage.co.uk/wordle/" target="_blank">WORDLE</a>
          </div>
        </div>
        <div>
          <div className="flex flex-col justify-center items-center mt-20 mb-20">
            <div>Today's answer</div>
            <div className="text-5xl wordle-success">{todayAnswer}</div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div>Tomorrow's answer</div>
            <div className="text-3xl wordle-warning">{tomorrowAnswer}</div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const todayIdx = getIndexForDay(0);
  const indices = [todayIdx - 1, todayIdx, todayIdx + 1, todayIdx + 2]
  const words = {}
  getWords(indices)
    .forEach((value, idx) => words[indices[idx]] = value)

  return { props: {  words  } }
}

export default Home;
