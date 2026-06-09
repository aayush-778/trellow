import React from 'react'
//import UI_IMG from "../../assets/images/auth-img.png"

const AuthLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen">
        <div className="w-screen min-h-screen md:w-[60vw] px-12 pt-8 pb-12">
            <h2 className="text-lg font-medium text-black">Task Manager</h2>
            {children}
        </div>

        <div className="hidden md:flex w-[40vw] min-h-screen items-center justify-center bg-blue-50 bg-[url('https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29mZmVlfGVufDB8MXwwfHx8MA%3D%3D')] bg-cover bg-no-repeat bg-position-[70%_center] p-8"/>
    </div>
  )
}

export default AuthLayout