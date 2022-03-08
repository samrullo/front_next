const getUsersUrl = () => {
  if (process.env.NODE_ENV == "production") {
    return process.env.REST_URL_PROD;
  } else {
    return process.env.REST_URL_DEV;
  }
};

const getAPIUrl = (api_name) => {
  if (process.env.NODE_ENV == "production") {
    return "PROD_API_URL";
  } else {
    return "DEV_API_URL";
  }
};
export { getUsersUrl, getAPIUrl };
