import { useEffect, useState } from "react"
import { useParams } from "react-router"
import axios from "axios"
import Article from "./Article"
import {SyncLoader} from "react-spinners"

const Articles = () => {
    const [articles,setArticles] = useState([])
    const [loading,setLoading] = useState(true)
    const category = useParams().category
    useEffect(()=>{
        if(!category){
            axios.get("http://localhost:3001/news/all")
            .then(response =>{
                setArticles(response.data)
                if(response.data.length > 0) setLoading(false)
            })
        } else {
            axios.get(`http://localhost:3001/news/${category}`)
            .then(response =>{
                setArticles(response.data)
                
                if(response.data.length > 0) setLoading(false)
            })
        }
        
        return ()=>{
            setArticles([])
            setLoading(true)
        }
    },[category])

    console.log(articles)
    return(
    <>
        {loading ? <div className="loader-container"><SyncLoader size={30} color={"#3693d6"}/></div>: 
        <div className="articles">
            {articles.map(article=>{
                if(article.urlToImage && article.description && article.title){
                    return <Article key={article.title} article={article}/>
                }
            })}
             
        </div>
        }
        {!loading && <p className="footer">Created by Bautista Danura</p>}
        </>
    )
}

export default Articles