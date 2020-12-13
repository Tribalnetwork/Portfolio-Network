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
export const onCreateConnect = /* GraphQL */ `
  subscription OnCreateConnect {
    onCreateConnect {
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
export const onUpdateConnect = /* GraphQL */ `
  subscription OnUpdateConnect {
    onUpdateConnect {
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
export const onDeleteConnect = /* GraphQL */ `
  subscription OnDeleteConnect {
    onDeleteConnect {
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
export const onCreateGig = /* GraphQL */ `
  subscription OnCreateGig {
    onCreateGig {
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
export const onUpdateGig = /* GraphQL */ `
  subscription OnUpdateGig {
    onUpdateGig {
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
export const onDeleteGig = /* GraphQL */ `
  subscription OnDeleteGig {
    onDeleteGig {
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
export const onCreateUserInviteByGig = /* GraphQL */ `
  subscription OnCreateUserInviteByGig {
    onCreateUserInviteByGig {
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
export const onUpdateUserInviteByGig = /* GraphQL */ `
  subscription OnUpdateUserInviteByGig {
    onUpdateUserInviteByGig {
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
export const onDeleteUserInviteByGig = /* GraphQL */ `
  subscription OnDeleteUserInviteByGig {
    onDeleteUserInviteByGig {
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
