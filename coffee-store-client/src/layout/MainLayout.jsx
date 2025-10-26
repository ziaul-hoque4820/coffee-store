import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import FooterSection from '../components/FooterSection'

function MainLayout() {
    return (
        <div>
            <Header></Header>
            <div className='max-w-7xl mx-auto'>
                <Outlet></Outlet>
            </div>
            <FooterSection />
        </div>
    )
}

export default MainLayout