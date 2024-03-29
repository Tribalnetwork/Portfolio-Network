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
export const createConnect = /* GraphQL */ `
  mutation CreateConnect(
    $input: CreateConnectInput!
    $condition: ModelConnectConditionInput
  ) {
    createConnect(input: $input, condition: $condition) {
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
export const updateConnect = /* GraphQL */ `
  mutation UpdateConnect(
    $input: UpdateConnectInput!
    $condition: ModelConnectConditionInput
  ) {
    updateConnect(input: $input, condition: $condition) {
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
export const deleteConnect = /* GraphQL */ `
  mutation DeleteConnect(
    $input: DeleteConnectInput!
    $condition: ModelConnectConditionInput
  ) {
    deleteConnect(input: $input, condition: $condition) {
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
export const createGig = /* GraphQL */ `
  mutation CreateGig(
    $input: CreateGigInput!
    $condition: ModelGigConditionInput
  ) {
    createGig(input: $input, condition: $condition) {
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
export const updateGig = /* GraphQL */ `
  mutation UpdateGig(
    $input: UpdateGigInput!
    $condition: ModelGigConditionInput
  ) {
    updateGig(input: $input, condition: $condition) {
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
export const deleteGig = /* GraphQL */ `
  mutation DeleteGig(
    $input: DeleteGigInput!
    $condition: ModelGigConditionInput
  ) {
    deleteGig(input: $input, condition: $condition) {
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
export const createUserInviteByGig = /* GraphQL */ `
  mutation CreateUserInviteByGig(
    $input: CreateUserInviteByGigInput!
    $condition: ModelUserInviteByGigConditionInput
  ) {
    createUserInviteByGig(input: $input, condition: $condition) {
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
export const updateUserInviteByGig = /* GraphQL */ `
  mutation UpdateUserInviteByGig(
    $input: UpdateUserInviteByGigInput!
    $condition: ModelUserInviteByGigConditionInput
  ) {
    updateUserInviteByGig(input: $input, condition: $condition) {
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
export const deleteUserInviteByGig = /* GraphQL */ `
  mutation DeleteUserInviteByGig(
    $input: DeleteUserInviteByGigInput!
    $condition: ModelUserInviteByGigConditionInput
  ) {
    deleteUserInviteByGig(input: $input, condition: $condition) {
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
