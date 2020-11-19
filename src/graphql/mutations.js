/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createFilm = /* GraphQL */ `
  mutation CreateFilm(
    $input: CreateFilmInput!
    $condition: ModelFilmConditionInput
  ) {
    createFilm(input: $input, condition: $condition) {
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
export const updateFilm = /* GraphQL */ `
  mutation UpdateFilm(
    $input: UpdateFilmInput!
    $condition: ModelFilmConditionInput
  ) {
    updateFilm(input: $input, condition: $condition) {
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
export const deleteFilm = /* GraphQL */ `
  mutation DeleteFilm(
    $input: DeleteFilmInput!
    $condition: ModelFilmConditionInput
  ) {
    deleteFilm(input: $input, condition: $condition) {
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
export const createLiveStream = /* GraphQL */ `
  mutation CreateLiveStream(
    $input: CreateLiveStreamInput!
    $condition: ModelLiveStreamConditionInput
  ) {
    createLiveStream(input: $input, condition: $condition) {
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
export const updateLiveStream = /* GraphQL */ `
  mutation UpdateLiveStream(
    $input: UpdateLiveStreamInput!
    $condition: ModelLiveStreamConditionInput
  ) {
    updateLiveStream(input: $input, condition: $condition) {
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
export const deleteLiveStream = /* GraphQL */ `
  mutation DeleteLiveStream(
    $input: DeleteLiveStreamInput!
    $condition: ModelLiveStreamConditionInput
  ) {
    deleteLiveStream(input: $input, condition: $condition) {
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
export const createPlayList = /* GraphQL */ `
  mutation CreatePlayList(
    $input: CreatePlayListInput!
    $condition: ModelPlayListConditionInput
  ) {
    createPlayList(input: $input, condition: $condition) {
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
export const updatePlayList = /* GraphQL */ `
  mutation UpdatePlayList(
    $input: UpdatePlayListInput!
    $condition: ModelPlayListConditionInput
  ) {
    updatePlayList(input: $input, condition: $condition) {
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
export const deletePlayList = /* GraphQL */ `
  mutation DeletePlayList(
    $input: DeletePlayListInput!
    $condition: ModelPlayListConditionInput
  ) {
    deletePlayList(input: $input, condition: $condition) {
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
export const createFilmInList = /* GraphQL */ `
  mutation CreateFilmInList(
    $input: CreateFilmInListInput!
    $condition: ModelFilmInListConditionInput
  ) {
    createFilmInList(input: $input, condition: $condition) {
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
export const updateFilmInList = /* GraphQL */ `
  mutation UpdateFilmInList(
    $input: UpdateFilmInListInput!
    $condition: ModelFilmInListConditionInput
  ) {
    updateFilmInList(input: $input, condition: $condition) {
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
export const deleteFilmInList = /* GraphQL */ `
  mutation DeleteFilmInList(
    $input: DeleteFilmInListInput!
    $condition: ModelFilmInListConditionInput
  ) {
    deleteFilmInList(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
