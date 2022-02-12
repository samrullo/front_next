import Link from "next/link"
import React, { useEffect, useState } from "react"
import UserGrid from "./UserGrid"

const App = (props) => {    
    
    return <div>
        <h1>App component...</h1>
        <Link href="grid_one">Grid One</Link>        
        <UserGrid users={props.users}/>
    </div>
}
export default App