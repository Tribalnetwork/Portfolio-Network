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
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
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
      filmFile: '',
      filmCoverFile: '',
      filmTitle: '',
      genres: [],
      synopsis: '',
    },
    validationSchema: Yup.object({
     /*  email: Yup.string()
         .email('Email is not valid'),
       phone: Yup.string()
         .matches(phoneRegExp, 'Phone number is not valid')
         .min(8, 'Phone number is not valid')
         .max(20, 'Phone number is not valid'),*/
      filmFile: Yup.mixed()
        .required('Please select a film'),
      filmCoverFile: Yup.mixed()
        .required('Please select a film cover'),
      filmTitle: Yup.string()
        .max(50, 'Must be 50 characters or less')
        .required('Required!'),
      synopsis: Yup.string()
        .min(50, 'Must be 50 characters or more')
        .max(500, 'Must be 500 characters or less')
        .required('Required!')
    }),
    onSubmit: (values) => {
      console.log(values)
    }
  })
  const [genreName, setGenreName] = React.useState([]);
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setGenreName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const names = [
    'Horror',
    'Suspense',
    'Drama',
    'Comedy',
    'Thriller',
    'Fantasy',
    'Mystery',
    'Sci-Fi',
    'Adventure',
    'Crime',
    'Action',
    'Documentary',
    'Romance',
    'Animated',
    'Thriller',
    'Experimental'
  ];
  // console.log(formik.touched)
  return (
    <main className='submit-page-main-section'>
      {/* 
      inputs:
        upload film (file)
        film cover art

        email (don't need)
        phone number (don't need)

        film title
        Synopsis
        select Genre
        terms and conditions
        submit
      
        next button (don't need)
        prev button (don't need)

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
          {/* email }
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
       {/* phone number }
       <div className='text-input'>
          <TextField
            id="outlined-input-email"
            label="Phone"
            variant="outlined"
            type="phone"
            name='phone'
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className='text-input'
            helperText={formik.touched.phone && formik.errors.phone && <span className='errorElement'>{formik.errors.phone}</span>}
          />
        </div>
        {/*Film Title*/}
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
        <div>
        <FormControl sx={{ m: 0, width: 300 }} style={{borderColor:'white'}}>
        <InputLabel id="demo-multiple-chip-label">Genre</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={genreName}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }} >
              {selected.map((value) => (
                <Chip key={value} label={value} style={{backgroundColor:'white'}}/>
              ))}
            </Box>
          )}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
        </div>
        <p>By submitting your film you agree on Tribal &nbsp;
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