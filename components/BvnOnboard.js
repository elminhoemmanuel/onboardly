import React from 'react'
import Input from './Input'

const BvnOnboard = () => {
    return (
        <form className="form">
            <p className="label"><label for="bvn" >Bank Verification Number (11-digits)</label></p>
            <Input 
                type="text"
                id="bvn"
            />
        </form>
    )
}

export default BvnOnboard