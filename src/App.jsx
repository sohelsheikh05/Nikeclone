import Header from './Components/Header'
import './App.css'
import {gapi} from 'gapi-script'  
import BodyContent from './Components/BodyContent'
import { useEffect } from 'react'


function App() {
 useEffect(() => {
    function start()  {
        gapi.client.init({
            clientId:"237072706962-a5p1eq2so6meqci4fv6mddrh2jt7su7r.apps.googleusercontent.com",
            scope:""
        })
    };
    gapi.load("client:auth2",start)
 })

  return (
    <>
      <Header />
      <BodyContent />

    </>
  )
}

export default App
