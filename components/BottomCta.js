import React from 'react'
import PrimaryBtn from "./PrimaryBtn"
import { useDispatch, useSelector } from 'react-redux';
import { INCR_STEP, DECR_STEP} from '../redux/types';

const BottomCta = () => {

    const dispatch = useDispatch();

    return (
        <div className="right-bottom">
            <PrimaryBtn
                type="button"
                btnText="Continue"
                addStyle="blue-btn"
                clicked={() => dispatch({ type : INCR_STEP }) }
            />
        </div>
    )
}

export default BottomCta
