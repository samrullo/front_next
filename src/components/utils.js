const getUsersUrl=()=>{
    if(process.env.NODE_ENV=="production"){
      return process.env.REST_URL_PROD
    }else{
      return process.env.REST_URL_DEV
    }
  }

  export default getUsersUrl;