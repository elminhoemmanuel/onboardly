import React from 'react'
import Input from './Input'

const PanOnboard = () => {
    return (
        <form className="form-pan">
            <div className="left-half">
                <p className="label"><label for="acct" >Account Number</label></p>
                <Input
                    type="text"
                    id="acct"
                />
            </div>

            <div className="right-half">
                <p className="label"><label for="bank" >Select Bank</label></p>
                <Input
                    type="select"
                    id="bank"
                />
            </div>
        </form>
    )
}

export default PanOnboard
