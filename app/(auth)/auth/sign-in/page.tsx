import SignInFormClient from '@/features/auth/components/signin-form-client'
import Image from 'next/image'
import React from 'react'

const SignInPage = () => {
  return (
    <>
        <Image src={"/logo.svg"} alt="Login-Image" height={300}  width={300}/>
        <SignInFormClient/>
    </>
  )
}

export default SignInPage