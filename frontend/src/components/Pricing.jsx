import {Check, Link } from 'lucide-react'
import React from 'react';
const Pricing = () => {
    const pricing =[{
        imgurl: "/pricing.jpg",
        title:"QUARTERLY",
        price:3000,
        duration:3
    },
    {
        imgurl: "/pricing.jpg",
        title:"HALF-YEARLY",
        price:5000,
        duration:6
    },
    {
        imgurl: "/pricing.jpg",
        title:"YEARLY",
        price:10000,
        duration:12
    }
]
    return (
       <section className="pricing">
        <h1>ELITE EDGE FITNESS PLANS</h1>
        <div className="wrapper">
            {
                pricing.map(element=>{
                    return(
                <div className="card" key={element.title}>
                    <img src={element.imgurl} alt={element.title} />
                    <div className="title">
                    <h1>{element.title}</h1>
                    <h1>PACKAGE</h1>
                    
                    <h3>Price: {element.price}</h3>
                    <p>Duration: {element.duration} months</p> 
                    </div>
                    <div className="description">
                      
                        <p>
                            <Check/> Equipment
                        </p>
                        <p>
                            <Check/> All Day Free Training
                        </p>
                        <p>
                            <Check/> Personal Traineer
                        </p>
                        <p>
                            <Check/> Zumba classes
                        </p>
                        <Link to={"/"}>Join Now</Link>
                    </div>
                </div>
                );
            })
        }

        </div>
       </section>
    );
};
export default Pricing; 