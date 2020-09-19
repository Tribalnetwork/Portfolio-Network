/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateFilm = /* GraphQL */ `
  subscription OnCreateFilm {
    onCreateFilm {
      id
      title
      genre
      hlsUrl
      thumbNailsUrls
      duration
      available
      sub
      lists {
        items {
          id
          filmId
          listId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateFilm = /* GraphQL */ `
  subscription OnUpdateFilm {
    onUpdateFilm {
      id
      title
      genre
      hlsUrl
      thumbNailsUrls
      duration
      available
      sub
      lists {
        items {
          id
          filmId
          listId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteFilm = /* GraphQL */ `
  subscription OnDeleteFilm {
    onDeleteFilm {
      id
      title
      genre
      hlsUrl
      thumbNailsUrls
      duration
      available
      sub
      lists {
        items {
          id
          filmId
          listId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateLiveStream = /* GraphQL */ `
  subscription OnCreateLiveStream {
    onCreateLiveStream {
      id
      playbackID
      streamKey
      latestAssetID
      IDforThumbnail
      status
      streamerName
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateLiveStream = /* GraphQL */ `
  subscription OnUpdateLiveStream {
    onUpdateLiveStream {
      id
      playbackID
      streamKey
      latestAssetID
      IDforThumbnail
      status
      streamerName
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteLiveStream = /* GraphQL */ `
  subscription OnDeleteLiveStream {
    onDeleteLiveStream {
      id
      playbackID
      streamKey
      latestAssetID
      IDforThumbnail
      status
      streamerName
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePlayList = /* GraphQL */ `
  subscription OnCreatePlayList {
    onCreatePlayList {
      id
      name
      User {
        id
        name
        location
        fullAccess
        admin
        liveStreamID
        liveChannelCreated
        remainingVODTime
        remainingLiveTime
        myList {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      films {
        items {
          id
          filmId
          listId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePlayList = /* GraphQL */ `
  subscription OnUpdatePlayList {
    onUpdatePlayList {
      id
      name
      User {
        id
        name
        location
        fullAccess
        admin
        liveStreamID
        liveChannelCreated
        remainingVODTime
        remainingLiveTime
        myList {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      films {
        items {
          id
          filmId
          listId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePlayList = /* GraphQL */ `
  subscription OnDeletePlayList {
    onDeletePlayList {
      id
      name
      User {
        id
        name
        location
        fullAccess
        admin
        liveStreamID
        liveChannelCreated
        remainingVODTime
        remainingLiveTime
        myList {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      films {
        items {
          id
          filmId
          listId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateFilmInList = /* GraphQL */ `
  subscription OnCreateFilmInList {
    onCreateFilmInList {
      id
      film {
        id
        title
        genre
        hlsUrl
        thumbNailsUrls
        duration
        available
        sub
        lists {
          nextToken
        }
        createdAt
        updatedAt
      }
      filmId
      listId
      list {
        id
        name
        User {
          id
          name
          location
          fullAccess
          admin
          liveStreamID
          liveChannelCreated
          remainingVODTime
          remainingLiveTime
          createdAt
          updatedAt
        }
        films {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateFilmInList = /* GraphQL */ `
  subscription OnUpdateFilmInList {
    onUpdateFilmInList {
      id
      film {
        id
        title
        genre
        hlsUrl
        thumbNailsUrls
        duration
        available
        sub
        lists {
          nextToken
        }
        createdAt
        updatedAt
      }
      filmId
      listId
      list {
        id
        name
        User {
          id
          name
          location
          fullAccess
          admin
          liveStreamID
          liveChannelCreated
          remainingVODTime
          remainingLiveTime
          createdAt
          updatedAt
        }
        films {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteFilmInList = /* GraphQL */ `
  subscription OnDeleteFilmInList {
    onDeleteFilmInList {
      id
      film {
        id
        title
        genre
        hlsUrl
        thumbNailsUrls
        duration
        available
        sub
        lists {
          nextToken
        }
        createdAt
        updatedAt
      }
      filmId
      listId
      list {
        id
        name
        User {
          id
          name
          location
          fullAccess
          admin
          liveStreamID
          liveChannelCreated
          remainingVODTime
          remainingLiveTime
          createdAt
          updatedAt
        }
        films {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      name
      location
      fullAccess
      admin
      liveStreamID
      liveChannelCreated
      remainingVODTime
      remainingLiveTime
      myList {
        id
        name
        User {
          id
          name
          location
          fullAccess
          admin
          liveStreamID
          liveChannelCreated
          remainingVODTime
          remainingLiveTime
          createdAt
          updatedAt
        }
        films {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      name
      location
      fullAccess
      admin
      liveStreamID
      liveChannelCreated
      remainingVODTime
      remainingLiveTime
      myList {
        id
        name
        User {
          id
          name
          location
          fullAccess
          admin
          liveStreamID
          liveChannelCreated
          remainingVODTime
          remainingLiveTime
          createdAt
          updatedAt
        }
        films {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      name
      location
      fullAccess
      admin
      liveStreamID
      liveChannelCreated
      remainingVODTime
      remainingLiveTime
      myList {
        id
        name
        User {
          id
          name
          location
          fullAccess
          admin
          liveStreamID
          liveChannelCreated
          remainingVODTime
          remainingLiveTime
          createdAt
          updatedAt
        }
        films {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateFilm = /* GraphQL */ `
  subscription OnCreateFilm {
    onCreateFilm {
      id
      title
      genre
      hlsUrl
      thumbNailsUrls
      duration
      available
      sub
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateFilm = /* GraphQL */ `
  subscription OnUpdateFilm {
    onUpdateFilm {
      id
      title
      genre
      hlsUrl
      thumbNailsUrls
      duration
      available
      sub
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteFilm = /* GraphQL */ `
  subscription OnDeleteFilm {
    onDeleteFilm {
      id
      title
      genre
      hlsUrl
      thumbNailsUrls
      duration
      available
      sub
      createdAt
      updatedAt
    }
  }
`;
export const onCreateLiveStream = /* GraphQL */ `
  subscription OnCreateLiveStream {
    onCreateLiveStream {
      id
      playbackID
      streamKey
      latestAssetID
      IDforThumbnail
      status
      streamerName
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateLiveStream = /* GraphQL */ `
  subscription OnUpdateLiveStream {
    onUpdateLiveStream {
      id
      playbackID
      streamKey
      latestAssetID
      IDforThumbnail
      status
      streamerName
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteLiveStream = /* GraphQL */ `
  subscription OnDeleteLiveStream {
    onDeleteLiveStream {
      id
      playbackID
      streamKey
      latestAssetID
      IDforThumbnail
      status
      streamerName
      createdAt
      updatedAt
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      name
      location
      fullAccess
      admin
      liveStreamID
      liveChannelCreated
      remainingVODTime
      remainingLiveTime
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      name
      location
      fullAccess
      admin
      liveStreamID
      liveChannelCreated
      remainingVODTime
      remainingLiveTime
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      name
      location
      fullAccess
      admin
      liveStreamID
      liveChannelCreated
      remainingVODTime
      remainingLiveTime
      createdAt
      updatedAt
    }
  }
`;
