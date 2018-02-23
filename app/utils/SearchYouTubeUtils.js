var $ = require("jquery");
var Config = require("../Environment");

var searchYouTubeUtils = {

    getVideos: function(query, callback) {
        query = query || "Creative Commons";
        var baseURL = "https://www.googleapis.com/youtube/v3/search?";
        var specs = "safeSearch=moderate&part=snippet&q=";
        var maxResults = "&maxResults=" + Config.maxResults + "&key=";
        var apiKey = Config.youtubeApiKey;
        if (Config.creativeCommon) {
          var cc = "&videoLicense=creativeCommon";
          var type = "&type=video";
          var videoURL = baseURL + specs + query + maxResults + apiKey + cc + type;
        } else {
          var videoURL = baseURL + specs + query + maxResults + apiKey;
        }

        $.ajax({
            url: videoURL,
            type: "GET",
            error: function(error) {
                console.log("Error: ", error);
            },
            success: function(data) {
                callback(data.items);
            }
        });
    }
};

module.exports = searchYouTubeUtils;
