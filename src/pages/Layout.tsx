import React from 'react'
import { Outlet } from 'react-router-dom'
import FootContainer from "../components/footer/FootContainer";

export const Layout = () => {
    return (
        <div className="layout">
            <header>
            </header>
            <section>
                <main>
                    <Outlet />
                </main>
            </section>
            <footer>
                <FootContainer />
            </footer>
        </div>
    )
}
