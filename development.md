## Development Document

### Sample State
```js
{
  starredShows: {
    1: {

    },

    2: {

    },

    3: {

    }
  }
}
```

### Shows
- [] GET http://api.tvmaze.com/shows
- [] GET http://api.tvmaze.com/shows/:id

### Redux Show Cycles
- fetchStarredShows
- requestStarredShows
- receiveStarredShows

- addStarredShow
- removeStarredShow

### API Functions
- fetchSearchResults
- fetchShow

### Components
- Navigator
