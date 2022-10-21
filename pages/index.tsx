import type { NextPage } from 'next'
import { useUser } from '@auth0/nextjs-auth0'
import Heading from '../components/heading/heading'
import UserLogin from '../components/login_logout/userLogin'
import UserProfile from '../components/user_profile/userProfile'
//import Head from 'next/head'
//import Image from 'next/image'
//import styles from '../styles/Home.module.css'

const Home: NextPage = (data) => {
  
    console.log(data)

  

  //console.log(user?.nickname)*/
   return(
     <>  
     <UserProfile/>
     <Heading/>
    <UserLogin/>

  
     </>

   
   ) 
  
}

export async function getServerSideProps(){

  const res = await fetch("https://postgress.vercel.app/user/GSSP")
  const data = await res.json()
  
  return{
    props:data
  }
}
export default Home
