import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';


export default function Home() {

  const dispatch = useDispatch();
  const { articles, error } = useSelector((state) => state.news);

  return (
    <>
      <Head>
        <title>Onboardly</title>
        <meta name="keywords" content="Onboardly | Homepage" />
      </Head>

      <div className='2xl:max-w-screen-2xl 2xl:mx-auto'>
        <div className='py-10'>
          Hello buyfood
        </div>
      </div>
    </>
  )
}
