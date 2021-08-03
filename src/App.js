import React from 'react'
import { ChakraProvider } from "@chakra-ui/react"
import {BrowserRouter , Route , Switch} from "react-router-dom"
import Theme from './Theme/Index'
import Header from './Components/Header/Index'
import Home from './Pages/Home'
import Sidebar from './Components/Sidebar/Index'
function App() {
    return (
        <ChakraProvider theme={Theme}>
            <BrowserRouter>
                <Header />
                <Sidebar />
                <Switch>
                    <Route exact component={Home} />
                </Switch>
            </BrowserRouter>
        </ChakraProvider>
    )
}

export default App
