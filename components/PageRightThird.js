import React from 'react'
import PrimaryBtn from "./PrimaryBtn"
import StepBar from './StepBar'
import ChooseMethod from './ChooseMethod'
import { useDispatch, useSelector } from 'react-redux';
import BvnOnboard from './BvnOnboard';
import PanOnboard from './PanOnboard';

const PageRightThird = () => {

    const { step, method } = useSelector((state) => state.form);

    return (
        <div className="right-home">
            <div className="right-top">
                <PrimaryBtn 
                    type="button"
                    btnText="Logout"
                    addStyle="red-btn"
                />
            </div>

            <StepBar />

            <div>
                <p className="current-step">Step {step}/3</p>
                <h1 className="header">Business Category</h1>
            </div>

            
        </div>
    )
}

export default PageRightThird
