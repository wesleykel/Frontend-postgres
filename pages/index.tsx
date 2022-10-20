import type { NextPage } from 'next'
//import { useUser } from '@auth0/nextjs-auth0'
//import Head from 'next/head'
//import Image from 'next/image'
//import styles from '../styles/Home.module.css'

const Home: NextPage = (data) => {
  
    console.log(data)
  /*const {user, error ,isLoading}=useUser()
  

  console.log(user?.nickname)*/
   return(
     <>
     <h1>Chop Shop</h1>
    

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
