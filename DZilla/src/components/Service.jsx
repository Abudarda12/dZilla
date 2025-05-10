import './service.css'
import { useState } from 'react'

export default function Service() {
    
    return(
        <>
        <div className="services" id='services'>
            <div className="service-btn">
                <button>Our Services</button>
            </div>
            <div className="service-card">
                <div className="card" 
                id='first' >
                    <h1>Digital Marketing</h1>
                    <p>Target Oriented campign <br /> Performance Markeking <br />Social Media Management <br />SEO & SEM 
                    <br />Google/Meta ads</p>

                </div>
                <div className="card"id='second'>
                    <h1>Production</h1>
                    <p>Videography & Photography <br /> Documentry & Brand Film <br />Explainer Video <br />Podcast Production 
                    <br />VFX & CGI</p>
                </div>
                <div className="card"id='third'>
                    <h1>Design</h1>
                    <p>Brand Identity <br />Logo Design <br /> Product Packaging Design <br />Podcast Production <br />VFX & CGI
                    </p>
                </div>
                <div className="card" id='fourth'>
                    <h1>Technology</h1>
                    <p>Website Development <br />Mobile App Development <br />SAAS Product Development 
                    <br />Web Application Development</p>
                </div>
            </div>
        </div>
        </>
    )
}