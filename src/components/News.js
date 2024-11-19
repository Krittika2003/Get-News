import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import Spinner from './Spinner'

const News = (props) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    // document.title = props.category === 'general'
    //     ? "Get-News | your daily dose of news- on the go" // Default title for "general"
    //     : `${props.category.charAt(0).toUpperCase()}${props.category.slice(1)} | Get-News`;

    const fetchNews = async () => {
        props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true)
        props.setProgress(30);
        let data = await fetch(url);
        let parsedData = await data.json();
        props.setProgress(60);
        console.log(parsedData)
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
        props.setProgress(100);
    }
    useEffect(() => {
        fetchNews();
    }, []);

    const handlePrevClick = async () => {
        console.log("previous");
        let url = `https://newsapi.org/v2/top-headlines?&category=${props.category}&apiKey=${props.apiKey}&page=${page - 1}&pageSize=${props.pageSize}`;
        setLoading(true);
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false);
        setPage(page - 1)
    }
    const handleNextCLick = async () => {
        console.log("Next");
        if (page + 1 > Math.ceil(totalResults / props.pageSize)) {
            console.log("Reached last page");
        }
        else {
            let url = `https://newsapi.org/v2/top-headlines?category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
            setLoading(true);
            let data = await fetch(url);
            let parsedData = await data.json();
            console.log(parsedData);
            setArticles(parsedData.articles);
            setTotalResults(parsedData.totalResults);
            setLoading(false);
            setPage(page + 1)
        }
        console.log(page);
    }

    const maxPages = Math.ceil(totalResults / props.pageSize); // Calculate max pages
    const isNextDisabled = page >= maxPages;

    return (
        <div className="container my-3">
            <h2 style={{ textAlign: "center", color: "#373d20", paddingTop: "62px" }}>{props.category === "general" ? "Top Headlines" : `Top Headlines - ${props.category.charAt(0).toUpperCase() + props.category.slice(1)}`}</h2>
            {loading && <Spinner />}
            <div className="row my-4">
                {!loading && (articles || []).map((element) => {
                    return <div className="col-md-4" key={element.url}>
                        <NewsItem
                            source={!(element.source.name) ? "Unknown Source" : element.source.name}
                            title={(element.title || "No Title Available").slice(0, 55)}
                            desc={(element.description || "No Description Available").slice(0, 90)}
                            imgUrl={element.urlToImage || "https://plus.unsplash.com/premium_photo-1688561384438-bfa9273e2c00?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} // Fallback for missing image
                            author={(element.author) || "Anonymous"}
                            date={element.publishedAt}
                            newsUrl={element.url} />
                        <br />
                    </div>
                })}
            </div>
            <div className="container d-flex justify-content-between">
                <button disabled={page <= 1} type="button" style={{ backgroundColor: "#717744", color: "#fefee3" }} className="btn" onClick={handlePrevClick}>&larr; Previous</button>
                <button type="button" className="btn">{page}</button>
                <button disabled={isNextDisabled} type="button" style={{ backgroundColor: "#717744", color: "#fefee3" }} className="btn" onClick={handleNextCLick}>Next &rarr;</button>
            </div>
        </div>
    )
}

News.defaultProps = {
    pageSize: 12,
    category: 'general'
}
News.propTypes = {
    pageSize: PropTypes.number,
    category: PropTypes.string
}

export default News
