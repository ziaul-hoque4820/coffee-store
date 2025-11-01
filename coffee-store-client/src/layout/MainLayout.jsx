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
            <div>
                <Outlet></Outlet>
            </div>
            <FooterSection />
            <CopyRight />
        </div>
    )
}

export default MainLayout