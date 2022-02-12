import { loadGetInitialProps } from 'next/dist/shared/lib/utils'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import App from '../src/components/App'

import styles from '../styles/Home.module.css'
import axios from 'axios'

const getUsersUrl=()=>{
  if(process.env.NODE_ENV=="production"){
    return process.env.REST_URL_PROD
  }else{
    return process.env.REST_URL_DEV
  }
}

export async function getServerSideProps() {
  const url=getUsersUrl()
  const response = await axios.get(url);  
  const response_data=await response.data;  
  const users=response_data.users;  
  return {
    props: {
      users
    },
  };
}

export default function Home(props) {
  const [users,setUsers]=useState(props.users) 
  

  return (
    <App users={users}/>
    
  )
}
