export const getCommaSeparatedChannelId = (videos) => {
  if (videos) {
    let set = new Set();
    return videos.items.reduce((acc, cur) => {
      const channelId = cur.snippet.channelId;
      if (!set.has(channelId)) {
        set.add(channelId);
        acc += `${channelId},`;
      }
      return acc;
    }, "");
  }
};

export const getVideosWithChannelAvatar = (searchResponse, channelResponse) => {
  return searchResponse.items.map((response) => {
    const channelFound = channelResponse.items.find(
      (channel) => channel.id === response.snippet.channelId
    );
    if (channelFound) {
      response["channelAvatar"] = channelFound.snippet.thumbnails.high.url;
    }
    return response;
  });
};
