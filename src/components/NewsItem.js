import React from 'react'

const NewsItem =(props) =>{

        let { title, desc, imgUrl, newsUrl, author, date, source } = props;
        return (
            <div>
                <div className="card" style={{ border: "1px solid #52796f", borderRadius: "6px", position: "relative" }}>
                    <img
                        src={imgUrl ? imgUrl : "https://img.freepik.com/premium-vector/3d-success-text-perspective-with-words_93487-102.jpg?semt=ais_hybrid"}
                        style={{ height: "150px", objectFit: "cover" }}
                        className="card-img-top"
                        alt="..."
                    />
                    <div className="card-body" style={{ height:"320px",paddingBottom: "50px" }}> {/* Space for source */}
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{desc}...</p>
                        <p className="card-text">
                            <small className="text-body-secondary">
                                By <strong>{author}</strong> on {new Date(date).toGMTString()}
                            </small>
                        </p>
                        <a
                            rel="noreferrer"
                            href={newsUrl}
                            target="_blank"
                            className="btn"
                            style={{ backgroundColor: "#766153", color: "#eff1ed", bottom:"35px", left:"10px", position:"absolute" }}>
                            Read News
                        </a>
                    </div>
                    <div
                        className="sourceText text-center"
                        style={{
                            color: "#373d20",
                            backgroundColor: "#bcbd8b",
                            borderRadius: "0 0 6px 6px",
                            borderTop: "1px solid #52796f",
                            width: "100%",
                            position: "absolute",
                            bottom: "0",
                            padding: "5px 0",
                            fontSize: "12px",
                            fontWeight: "bold",
                            lineHeight:"20px"
                        }}
                    >
                        {source}
                    </div>
                </div>

            </div>

        )
    }


export default NewsItem
