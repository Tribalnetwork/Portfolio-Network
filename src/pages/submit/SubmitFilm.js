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
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import './submitFilm.css'

// film submiting restirections
// 1- Size of film is unset curently for submitting (if a film is larger than 50MB then direct them to pricing plan)
// 2- films can only be in MP4 type (film types also need player considiration)
// 3- Only JPG and PNG cover images are accepted

Amplify.configure(awsconfig);
const phoneRegExp = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g
const termsConditionsDocumentUrl = 'https://drive.google.com/file/d/1gI65dx69IBCAzFRvAgZ4Kl0EAUt9pxxm/view'

export default function SubmitFilm() {
  const formik = useFormik({
    initialValues: {
      email: '',
      phone: '',
      filmFile: '',
      filmTitle: '',
      genres: '',
      synopsis: '',
      filmCoverFile: '',
    },
    validationSchema: Yup.object({
      // email: Yup.string()
      //   .email('Email is not valid')
      //   .required('Required!'),
      // phone: Yup.string()
      //   .matches(phoneRegExp, 'Phone number is not valid')
      //   .min(8, 'Phone number is not valid')
      //   .max(20, 'Phone number is not valid')
      //   .required('Required!'),
      filmFile: Yup.mixed()
        .required('Please select a film'),
      filmCoverFile: Yup.mixed()
        .required('Please select a film cover'),
      filmTitle: Yup.string()
        .max(80, 'Must be less than 80 letters')
        .required('Required!'),
      synopsis: Yup.string()
        .min(50, 'Must be more than 50 letters')
        .max(500, 'Must be less than 500 letters')
        .required('Required!')
    }),
    onSubmit: (values) => {
      console.log(values)
    }
  })
  // console.log(formik.touched)
  return (
    <main className='submit-page-main-section'>
      {/* 
      inputs:
        upload film (file)
        film cover art

        email (don't needed)
        phone number (don't needed)

        film title
        Synopsis
        select Genre
        terms and conditions
        submit
      
        next button (don't needed)
        prev button (don't needed)

        progressbar for submitting film and cover

        reconsider this latter
        - preferences
        - do you want to show your work to the network.

      */}
      <form onSubmit={formik.handleSubmit} className="film-submit-form">
        {/* film file */}
        <div>
          <Button
            variant="contained"
            color="default"
            component="label"
            startIcon={<CloudUploadIcon />}
          >
            Browse Film
            <input
              type="file"
              hidden
              accept='video/mp4'
              name="filmFile"
              value={formik.values.filmFile}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </Button>
          <span style={{ margin: '1rem' }}>{formik.values.filmFile.replace(/^.*[\\\/]/, '')}</span>
        </div>
        {/* film cover image */}
        <div>
          <Button
            variant="contained"
            color="default"
            component="label"
            startIcon={<CloudUploadIcon />}
          >
            Browse Cover Image
            <input
              type="file"
              hidden
              accept='image/png, image/jpg, image/jpeg'
              name="filmCoverFile"
              value={formik.values.filmCoverFile}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </Button>
          <span style={{ margin: '1rem' }}>{formik.values.filmCoverFile.replace(/^.*[\\\/]/, '')}</span>
        </div>
        <div className='text-input'>
          <TextField
            id="outlined-input-email"
            label="Film Title"
            variant="outlined"
            type="text"
            name='filmTitle'
            required
            value={formik.values.filmTitle}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className='text-input'
            helperText={formik.touched.filmTitle && formik.errors.filmTitle && <span className='errorElement'>{formik.errors.filmTitle}</span>}
          />
        </div>
        <div className='text-input'>
          <TextField
            id="outlined-Synopsis"
            label="Synopsis"
            name='synopsis'
            required
            multiline
            rows={6}
            defaultValue=""
            placeholder='Write synopsis here'
            variant="outlined"
            value={formik.values.synopsis}
            className='text-input'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            helperText={formik.touched.synopsis && formik.errors.synopsis && <span className='errorElement'>{formik.errors.synopsis}</span>}
          />
        </div>
        <p>By submiting your film you agree on Tribal &nbsp;
          <a href={termsConditionsDocumentUrl}
            target='_blank' rel='noopener noreferrer'>
            terms and conditions
          </a>
        </p>

        <Button variant="contained" type='submit' className="submit-btn">
          Submit Film
        </Button>
      </form>
    </main>
  )
}