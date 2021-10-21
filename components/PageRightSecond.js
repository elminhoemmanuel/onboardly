import React from 'react'
import PrimaryBtn from "./PrimaryBtn"
import StepBar from './StepBar'
import { useDispatch, useSelector } from 'react-redux';
import BottomCta from './BottomCta'
import IconInput from './IconInput'

const PageRightSecond = () => {

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
                <h1 className="header second-header">Social Handles</h1>
                <p className="second-explainer">Enter your business social media handles</p>
            </div>

            <div className="form-pan second-form-pan">
                <div className="left-half">
                    <p className="label"><label for="abeg" >Choose your Abeg Tag (required)</label></p>
                    <IconInput
                        type="text"
                        id="acct"
                    />
                </div>
            </div>

            <div className="form-pan">
                <div className="left-half">
                    <p className="label"><label for="acct" >Instagram</label></p>
                    <IconInput
                        type="text"
                        id="acct"
                    />
                </div>

                <div className="right-half">
                    <p className="label"><label for="bank" >Twitter</label></p>
                    <IconInput
                        type="select"
                        id="bank"
                    />
                </div>
            </div>

            <BottomCta />

            
        </div>
    )
}

export default PageRightSecond
