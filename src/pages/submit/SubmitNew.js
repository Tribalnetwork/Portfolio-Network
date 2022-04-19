import React from 'react'
import Amplify from 'aws-amplify';
import awsconfig from '../../aws-exports';
import UserContext from "../../UserContext";
import axios from 'axios';
import { getGenreList } from '../../middleware/APIs';
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useFormik } from 'formik'
import * as Yup from 'yup'
import TextField from '@material-ui/core/TextField';
import './submitNew.css'

Amplify.configure(awsconfig);

const termsConditionsUrl = 'https://drive.google.com/file/d/1gI65dx69IBCAzFRvAgZ4Kl0EAUt9pxxm/view'
export default function Submit() {
  const formik = useFormik({
    initialValues: {
      email: '',
      phone: '',
      termsCondition: false,
      filmFile: '',
      filmTitle: '',
      genres: '',
      synopsis: '',
      filmCoverFile: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Input valid email')
        .required('Required')
    }),
    onSubmit: (values) => {
      console.log(values)
    }
  })
  return (
    <main>
      Submit Page
      {/* 
      inputs:
        email
        phone number
        terms and conditions
        upload film (file)
        film title
        select Genre
        Synopsis
        film cover art
        submit
        next button
        prev button
        progressbar for submitting film and cover

      */}
      <form onSubmit={formik.handleSubmit}>
        <div>
          {/* <input
            type='email'
            name='email'
            placeholder='Input Email'

          /> */}
          <TextField
            id="outlined-input"
            label="Email"
            variant="outlined"
            type="email"
            name='email'
            autoComplete="current-password"
            value={formik.values.email}
            onChange={formik.handleChange}
            className='text-input'
          />
          {
            formik.errors.email && <p>{formik.errors.email}</p>
          }
        </div>
        <button type='submit'>Submit</button>
      </form>
    </main>
  )
}