/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getFilm = /* GraphQL */ `
  query GetFilm($id: ID!) {
    getFilm(id: $id) {
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
export const listFilms = /* GraphQL */ `
  query ListFilms(
    $filter: ModelFilmFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFilms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getLiveStream = /* GraphQL */ `
  query GetLiveStream($id: ID!) {
    getLiveStream(id: $id) {
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
export const listLiveStreams = /* GraphQL */ `
  query ListLiveStreams(
    $filter: ModelLiveStreamFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLiveStreams(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getPlayList = /* GraphQL */ `
  query GetPlayList($id: ID!) {
    getPlayList(id: $id) {
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
        ImgUrl
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
export const listPlayLists = /* GraphQL */ `
  query ListPlayLists(
    $filter: ModelPlayListFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlayLists(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          ImgUrl
          createdAt
          updatedAt
        }
        films {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getFilmInList = /* GraphQL */ `
  query GetFilmInList($id: ID!) {
    getFilmInList(id: $id) {
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
          ImgUrl
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
export const listFilmInLists = /* GraphQL */ `
  query ListFilmInLists(
    $filter: ModelFilmInListFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFilmInLists(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          createdAt
          updatedAt
        }
        filmId
        listId
        list {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
          ImgUrl
          createdAt
          updatedAt
        }
        films {
          nextToken
        }
        createdAt
        updatedAt
      }
      ImgUrl
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        ImgUrl
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const filmInListByListByFilm = /* GraphQL */ `
  query FilmInListByListByFilm(
    $listId: ID
    $filmId: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelFilmInListFilterInput
    $limit: Int
    $nextToken: String
  ) {
    FilmInListByListByFilm(
      listId: $listId
      filmId: $filmId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          createdAt
          updatedAt
        }
        filmId
        listId
        list {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
