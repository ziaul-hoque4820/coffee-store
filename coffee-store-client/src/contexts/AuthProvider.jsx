import React from 'react'
import { AuthContext } from './AuthContext'

function AuthProvider({ children }) {

    const userInfo = {
        user: "ziaul.dev@gmail.com"
    }

    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    )
}

export default AuthProvider