import React from 'react'
import {  Auth,Storage } from 'aws-amplify'
import UserContext from '../components/UserContext'
import { API, graphqlOperation } from 'aws-amplify'
import { getUser} from '../graphql/queries'
import {updateUser} from '../graphql/mutations'
class ChangeProflePhotoButton extends React.Component{
    static contextType = UserContext;
    async addPhoto(evt) {
        const uuidv4 = require("uuid/v4");
          const newId=uuidv4();
        const name="photos/"+newId+".png";
        Storage.put(name, evt.target.files[0], {
              contentType: 'image/png',
              ACL: 'public-read',
              visibility: 'public',
              level: 'public'
          })
          .then (result=> console.log(result))
          .catch(err => console.log(err));
          const user1=await API.graphql(graphqlOperation(getUser, { id: this.context.user.attributes.sub}))
          const userUpdate = {
          id: user1.data.getUser.id,
          ImgUrl:"https://d202tggnzywgd9.cloudfront.net/public/"+name
          }
          const user1_updated=await API.graphql(graphqlOperation(updateUser, { input: userUpdate }));
          this.setState({ImgUrl:"https://d202tggnzywgd9.cloudfront.net/public/"+name}); 
      }
      render(){
          return(
              <input type="file" id="img" name="img" accept="image/*" onChange={event =>this.addPhoto(event)}/>
          )
      }
}
