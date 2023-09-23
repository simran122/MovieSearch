import React from 'react'

import { useEffect, } from 'react'
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux'
import { Box, Typography, styled } from '@mui/material'
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
// import { movieDetail } from '../MovieSlice'
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(3),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));


function Movie(prop) {


  const { open, setOpen, setTitl } = prop


  const handleClose = () => {
    setOpen(false)
    setTitl("")


  }



  const movie = useSelector(state => state.movie)


  const { Title, Year, Poster, Genre, imdbRating, Plot } = movie.movieDetail
  return (
    <>

      {
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
          sx={{ overflow: "hidden", }}
        >
          <DialogTitle sx={{ m: 0, p: 2, backgroundColor: "#111155", color: "white" }} id="customized-dialog-title">
            {Title}
          </DialogTitle>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
          <DialogContent sx={{ display: "flex", flexDirection: "column", alignItems: "center", overflowX: "auto" }}>
            <img style={{ objectFit: "cover", height: "362px", width: "230px" }} src={Poster} alt={Title} />
            <Box sx={{ mt: "10px" }}>
              <Typography variant="h6" sx={{ fontWeight: 600, color: "#111155", }}>Year : {Year}</Typography>
              <Typography variant="h6" sx={{ fontWeight: 600, color: "#111155", }}>Genre : {Genre}</Typography>
              <Typography variant="h6" sx={{ fontWeight: 600, color: "#111155", }}>Rating : {imdbRating} imdb</Typography>
              <Typography variant="h6" sx={{ fontWeight: 600, color: "#111155", }}>Plot : {Plot}</Typography>
            </Box>
          </DialogContent>



        </BootstrapDialog>}
    </>
  )


}

export default Movie