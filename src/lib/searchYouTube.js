var searchYouTube = (options, callback) => {
  $.get('https://www.googleapis.com/youtube/v3/search?', {
    part: 'snippet',
    key: options.key,
    q: options.query,
    maxResults: options.max || 5,
    type: 'video',
    videoEmbaddable: 'true'
    
  })
  .done(({items}) => {
    if (callback) {
      callback(items);
    }
  }).fail((err) => console.error(err));
};

window.searchYouTube = searchYouTube;
