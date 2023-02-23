import React from 'react'

import Background from "../../assets/images/leaf.resized.jpg"

import './../../screens/Login/Login.css'



const AuthHeaderSection: React.FC<Params> = ({ title }) => {
    return (
        <section className="auth_img ion-padding h-25" style={{ backgroundImage: `url(${Background})` }}>
            <h1>{title}</h1>
        </section>
    )
}

type Params = {
    title: string
}

export default AuthHeaderSection