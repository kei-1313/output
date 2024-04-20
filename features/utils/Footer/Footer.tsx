import React from 'react'
import LoginUserInfo from '../LoginUserInfo/LoginUserInfo'

const Footer = () => {
  return (
    <footer className="bg-footer pt-14 pb-20 max-md:pt-6">
      <div className="mx-auto w-full px-6 max-w-screen-lg flex">
        <LoginUserInfo width={30} height={30} href={"/settings"} src={""} username={"dalmi"}/>
      </div>
    </footer>
  )
}

export default Footer
