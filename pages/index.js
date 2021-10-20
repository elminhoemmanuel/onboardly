import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import PageLeft from '../components/PageLeft';
import PageRight from '../components/PageRight';


export default function Home() {


  return (
    <>
      <Head>
        <title>Onboardly</title>
        <meta name="keywords" content="Onboardly | Homepage" />
      </Head>

      <div className='container'>
        <div className='main'>
          <div className='left-side'>
            <PageLeft />
          </div>
          <div className='right-side'>
            <PageRight />
          </div>
        </div>
      </div>
    </>
  )
}
