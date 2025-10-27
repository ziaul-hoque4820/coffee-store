import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import FooterSection from '../components/FooterSection'
import CopyRight from '../components/CopyRight'
import ScrollToTop from '../components/ScrollToTop'

function MainLayout() {
    return (
        <div>
            <ScrollToTop />
            <Header></Header>
            <div className='max-w-7xl mx-auto'>
                <Outlet></Outlet>
            </div>
            <FooterSection />
            <CopyRight />
        </div>
    )
}

export default MainLayout