import { Container, Col, Button } from "react-bootstrap"
import { useState, useEffect } from 'react'
import apiService from "../services/api.services"
import './HomePage.css'

const HomePage = () => {

 const [cat, setCat] = useState([])

     const loadData = () => {

        apiService
            .getOneCat()
            .then(({ cat }) => setCat(cat))
            console.log('entro aqui')
            console.log(cat)
            .catch(err => console.log(err))
     }
    
    const handleData = () => [
        loadData()
    ]
    
    return (
        <Container className="home">
            <h1 className="title">Random Cat</h1>
            <Button className="newCatBtn" onClick={() => handleData()}>New Cat</Button>
        </Container>
    )
}

export default HomePage