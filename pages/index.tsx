import Head from 'next/head'
import React from 'react';
import styles from '../styles/Home.module.css'

import { wordlist } from '../data/wordlist'

const getIndexForDay = (dayOffset: number = 0) => {
  const msInADay = 24 * 60 * 60 * 1000
  const targetDay = Date.now() + (dayOffset * msInADay)
  const firstDay = new Date("2021-06-19 00:00:00").getTime()
  return Math.floor((targetDay - firstDay) / msInADay) % wordlist.length
}

const Home = (): JSX.Element => {
  return (
    <div>
      <Head>
        <title>{wordlist[getIndexForDay(0)]} | Wordle Answer</title>
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
            <div className="text-5xl wordle-success">{wordlist[getIndexForDay(0)]}</div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div>Tomorrow's answer</div>
            <div className="text-3xl wordle-warning">{wordlist[getIndexForDay(1)]}</div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default Home;
