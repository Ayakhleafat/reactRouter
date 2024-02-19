import React from 'react';
import './App.css';
import Car from './Car';
import pm from './BMW.jpeg';
import tes from './tesla.jpg';
import ben from './bently.jpeg';
import mer from './mercedes.jpeg';

function Products() {
    return (
        <div className="container">
            <h1 className="title">Featured Products</h1>
            <div className="grid">
                <div className="card">
                    <Car 
                        brand="BMW" 
                        model="2019" 
                        color="Blue"
                        image={pm}
                        price="35,000 JOD."
                    />
                </div>
                <div className="card">
                    <Car 
                        brand="Mercedes" 
                        model="2021" 
                        color="Black"
                        image={mer}
                        price="38,000 JOD."
                    />
                </div>
                <div className="card">
                    <Car 
                        brand="Tesla" 
                        model="2022" 
                        color="Grey"
                        image={tes}
                        price="20,000 JOD."
                    />
                </div>
                <div className="card">
                    <Car 
                        brand="Bently" 
                        model="2020" 
                        color="Silver"
                        image={ben}
                        price="155,000 JOD."
                    />
                </div>
            </div>
        </div>
    );
}

export default Products;








