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
export const getMusic = /* GraphQL */ `
  query GetMusic($id: ID!) {
    getMusic(id: $id) {
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
export const listMusic = /* GraphQL */ `
  query ListMusic(
    $filter: ModelMusicFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMusic(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
        MyGigs {
          nextToken
        }
        InvitedGig {
          nextToken
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
      MyGigs {
        items {
          id
          imageUrl
          Title
          Genre
          Synopsis
          Budget
          Pro_dates
          Position
          Rates
          Exe_notes
          Stakeholders
          Audience
          createdAt
          updatedAt
        }
        nextToken
      }
      InvitedGig {
        items {
          id
          gigID
          userID
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
        MyGigs {
          nextToken
        }
        InvitedGig {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getConnect = /* GraphQL */ `
  query GetConnect($id: ID!) {
    getConnect(id: $id) {
      id
      userId
      connectsId {
        userId
        status
      }
      createdAt
      updatedAt
    }
  }
`;
export const listConnects = /* GraphQL */ `
  query ListConnects(
    $filter: ModelConnectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listConnects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        connectsId {
          userId
          status
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getGig = /* GraphQL */ `
  query GetGig($id: ID!) {
    getGig(id: $id) {
      id
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
        MyGigs {
          nextToken
        }
        InvitedGig {
          nextToken
        }
        createdAt
        updatedAt
      }
      imageUrl
      Title
      Genre
      Synopsis
      Budget
      Pro_dates
      Position
      Rates
      Exe_notes
      Stakeholders
      Audience
      invite {
        items {
          id
          gigID
          userID
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
export const listGigs = /* GraphQL */ `
  query ListGigs(
    $filter: ModelGigFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGigs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
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
        imageUrl
        Title
        Genre
        Synopsis
        Budget
        Pro_dates
        Position
        Rates
        Exe_notes
        Stakeholders
        Audience
        invite {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUserInviteByGig = /* GraphQL */ `
  query GetUserInviteByGig($id: ID!) {
    getUserInviteByGig(id: $id) {
      id
      gigID
      userID
      gig {
        id
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
        imageUrl
        Title
        Genre
        Synopsis
        Budget
        Pro_dates
        Position
        Rates
        Exe_notes
        Stakeholders
        Audience
        invite {
          nextToken
        }
        createdAt
        updatedAt
      }
      user {
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
        MyGigs {
          nextToken
        }
        InvitedGig {
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
export const listUserInviteByGigs = /* GraphQL */ `
  query ListUserInviteByGigs(
    $filter: ModelUserInviteByGigFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserInviteByGigs(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        gigID
        userID
        gig {
          id
          imageUrl
          Title
          Genre
          Synopsis
          Budget
          Pro_dates
          Position
          Rates
          Exe_notes
          Stakeholders
          Audience
          createdAt
          updatedAt
        }
        user {
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
