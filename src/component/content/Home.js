import React from 'react'
import SchoolCard from '../widget/SchoolCard'
import '../../css/Home.css'
export default function Home() {
    return (
        <div className="container-fluid home-content">
            <h3>
                School All
            </h3>
            <div>
                <SchoolCard />
            </div>
        </div>
    )
}
