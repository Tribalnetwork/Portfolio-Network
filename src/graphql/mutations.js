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
      createdAt
      updatedAt
    }
  }
`;
