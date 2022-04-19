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
        .required('Email is required'),
      phone: Yup.string()
        .max(16, 'Must be less than 16 digits')
        .required('Phone number is required')

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
        <div className='text-input'>
          <TextField
            id="outlined-input-email"
            label="Email"
            variant="outlined"
            type="email"
            name='email'
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className='text-input'
            helperText={formik.touched.email && formik.errors.email && <span className='errorElement'>{formik.errors.email}</span>}
          />
        </div>
        <div className='text-input'>
          <TextField
            id="outlined-input-phone"
            label="phone"
            variant="outlined"
            type="phone"
            name='phone'
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            helperText={formik.touched.phone && formik.errors.phone && <span className='errorElement'>{formik.errors.phone}</span>}
          />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </main>
  )
}