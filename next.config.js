const path=require("path")
require("dotenv").config()
const Dotenv=require("dotenv-webpack")

module.exports = {
  reactStrictMode: true,
  webpack(config,options){
    config.plugins=config.plugins||[];
    config.plugins=[...config.plugins,new Dotenv({
      path:path.join(__dirname,".env"),
      systemvars:true
    })];
    return config
  }
}
