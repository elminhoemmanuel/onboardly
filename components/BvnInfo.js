import React from 'react'
import { AiOutlineDown } from "react-icons/ai"

const BvnInfo = () => {
    return (
        <div className="bvninfo">
            <div className="info-left">
                <img className="lock" src="/images/lock.svg" alt="lock icon" />
                <p>Why we need your BVN</p>
            </div>

            <div className="info-right">
                <p className="show">Show</p>
                <AiOutlineDown className="show-icon" />
                
            </div>
        </div>
    )
}

export default BvnInfo
