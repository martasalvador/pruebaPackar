import { useState, useEffect } from 'react'
import apiService from "../services/api.services"
import './HomePage.css'

const HomePage = () => {

    const [cat, setCat] = useState()
    
    const loadData = () => {
    apiService
            .getOneCat()
            .then((res) => {
                setCat(res.data[0].url)
            }) 
            .catch(err => console.log(err))
     }

    useEffect(() => {
        loadData()
    }, [])
    
    return (
        <div className="home">
            <h1 className="title">Random Cats</h1>
            <button className="newCatBtn" onClick={() => loadData()}><img src="https://cdn-icons-png.flaticon.com/512/616/616430.png" title="gato iconos" /></button>
            <p>Click me!</p>
            
            <br></br>
          {
                cat ? 
                        <img src={cat} alt="random cat" className="image" />
                    :
                    <>
                        <p>Searching...</p>
                    </>
             } 
            
        </div>
    )
}

export default HomePage