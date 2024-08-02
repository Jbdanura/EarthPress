const Article = ({article}) => {
    return (
        <div className="article">
            <img src={article.urlToImage}></img>
            <div className="info">
                <h3>{article.title}</h3>
                <p>{article.description}</p>
                <a className="link" href={article.url}>Ver más</a>
            </div>
        </div>
    )
}

export default Article