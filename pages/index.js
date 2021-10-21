import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import PageLeft from '../components/PageLeft';
import PageRightFirst from '../components/PageRightFirst';
import PageRightSecond from '../components/PageRightSecond';
import PageRightThird from '../components/PageRightThird';


export default function Home() {

    const { step } = useSelector((state) => state.form);

    const getStep = () =>{
        switch (step) {
            case 1:
                return <PageRightFirst />
        
            case 2:
                return <PageRightSecond />
        
            case 3:
                return <PageRightThird />
        
            default:
                break;
        }
    }

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
            {getStep()}
          </div>
        </div>
      </div>
    </>
  )
}
