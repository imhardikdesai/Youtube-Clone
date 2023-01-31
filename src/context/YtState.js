import YTContext from "./YTContext";
import { useState } from "react";
import demoData from './../db/demodata'


const YTState = (props) => {

    const [query, setQuery] = useState('');
    const [data, setData] = useState(demoData);

    const fetchVideos = () => {
        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=40&q=${query}&key=AIzaSyDC9zdYlOagHelNeqDfECMojTtQ86KfdHo`)
            .then(response => response.json())
            .then(data => {
                setData(data.items)
            })
            .catch(err => console.error(err));

    }
    return (
        <YTContext.Provider value={{ query, setQuery, fetchVideos, data }}>
            {props.children}
        </YTContext.Provider >
    )
}

export default YTState
