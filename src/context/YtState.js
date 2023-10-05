import YTContext from "./YTContext";
import { useState } from "react";
import {
  getCommaSeparatedChannelId,
  getVideosWithChannelAvatar,
} from "../utils/GetChannelIds";

const YTState = (props) => {
  const [query, setQuery] = useState("mostPopular");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const API_KEY = process.env.REACT_APP_API_KEY;
  const search_HTTP = "https://www.googleapis.com/youtube/v3/search?";
  const channel_HTTP = "https://www.googleapis.com/youtube/v3/channels?";

  const fetchVideos = async () => {
    try {
      setLoading(true);

      const searchResponse = await fetch(
        search_HTTP +
          new URLSearchParams({
            part: "snippet",
            maxResults: 40,
            q: query,
            key: API_KEY,
          })
      );
      if (!searchResponse.ok) {
        throw new Error(
          `Failed to fetch searched videos with Status code: ${
            searchResponse.status
          }, Error: ${JSON.stringify(searchResponse)}`
        );
      }
      const searchResponseJson = await searchResponse.json();

      const commaSeparatedChannelId =
        getCommaSeparatedChannelId(searchResponseJson);

      const channelResponse = await fetchChannels(commaSeparatedChannelId);
      if (!channelResponse.ok) {
        throw new Error(
          `Failed to fetch Channels with Status code: ${
            channelResponse.status
          }, Error: ${JSON.stringify(channelResponse)}`
        );
      }
      const channelResponseJson = await channelResponse.json();

      const videoWithChannelAvatar = getVideosWithChannelAvatar(
        searchResponseJson,
        channelResponseJson
      );
      setData(videoWithChannelAvatar);
    } catch (err) {
      console.error("Error: ", err);
    } finally {
      setLoading(false);
    }
  };

  const fetchChannels = async (commaSeparatedChannelId) => {
    return fetch(
      channel_HTTP +
        new URLSearchParams({
          key: API_KEY,
          part: "snippet",
          id: commaSeparatedChannelId,
        })
    );
  };

  return (
    <YTContext.Provider value={{ query, setQuery, fetchVideos, data, loading }}>
      {props.children}
    </YTContext.Provider>
  );
};

export default YTState;
