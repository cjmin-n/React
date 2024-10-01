const NewsItem = ({news}) => {
    return(
        <li>
            <div className="imgBox">
                <img src={news.urlToImage} alt="thumbnail image" />
            </div>
            <h3 className="title">{news.title}</h3>
            <p className="description">{news.description}</p>
            <a href={news.url} target="_blank">더 읽기</a>
        </li>
    )
}

export default NewsItem;