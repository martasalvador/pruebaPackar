import { Container, Col, Button } from "react-bootstrap"
import { useState, useEffect } from 'react'
import apiService from "../services/api.services"
import './HomePage.css'

const HomePage = () => {

    const [cat, setCat] = useState([])
    const [data, setData] = useState()
    

     const loadData = () => {

        apiService
            .getOneCat()
            .then((cat) => setCat(cat))
                console.log('Estoy en el servicio de la API')
                console.log(cat.data[0].url)
            .catch(err => console.log(err))
     }
    
    const handleData = () => [
        loadData(),
        setData(cat.data[0].url)
    ]
    useEffect(() => {
   
    },[handleData])
    
    return (
        <Container className="home">
            <h1 className="title">Random Cats</h1>
            <Button className="newCatBtn btn-warning" onClick={() => handleData()}>New Cat</Button>
            <br></br>
            {
                data ?
                    <img src={cat.data[0].url} alt="cat image" className="image" />
                    :
                    <p>Searching...</p>
             }
            
        </Container>
    )
}

export default HomePage