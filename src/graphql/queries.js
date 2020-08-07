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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
