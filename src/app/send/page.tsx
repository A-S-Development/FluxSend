"use client"
import { useEffect, useRef, useState } from 'react';
import { Button, TextField, Stack, Typography} from '@mui/material';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import AudioFileIcon from '@mui/icons-material/AudioFile';
import Image from 'next/image'

const SendHomePage: React.FC = () => {
  const TYPES = ['image/png','image/jpeg','application/pdf', 'audio/mpeg','audio/wav']
  const fileInput = useRef(null)
  const [file, setFile] = useState(null)
  const [previewUrl, setPreviewUrl] = useState(null)
  const [errors, setErrors] = useState(null)

  const handleUpload = (e) => {
    setFile(e.target.files[0])
    const url = URL.createObjectURL(e.target.files[0])
    setPreviewUrl(url)
  }

  const humanFriendly = (size) => {
    const fileSize = size.toString();

    if(fileSize.length < 7) {
      return `${Math.round(+fileSize/1024).toFixed(2)}kb`
    } else {
      return `${(Math.round(+fileSize/1024)/1000).toFixed(2)}MB`
    }
    
  }
  const preview = () => {
    if (file.type === "image/jpeg" || file.type === "image/png") {
      return (
        <Image src={previewUrl} width={150} height={150} alt="picture"/>
      )
    } else if (file.type === "application/pdf") {
      return (
        <PictureAsPdfIcon width={150} height={150}/>
      )
    } else if (file.type === "audio/mpeg" || file.type === "audio/wav") {
      return (
        <AudioFileIcon width={150} height={150}/>
      )
    }

  }

  useEffect(() => {
    if (file) {
      if (!TYPES.includes(file.type)) {
        setErrors("Unsupported file type. Please select a text file.")
        setTimeout(()=>{
          setErrors("")
        }, 2000)
      }
    }
  },[file])

  return (
    <Stack spacing={10} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontSize: '35px', height: '50%' }}>
      <Stack spacing={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div>Upload a file to get started</div>
          <div>Suported file types: pdf, jpeg, wav, png, mp3</div>
        </div>
        {file && (
            <>
              {preview()}
              <div>name:{file.name}</div>
              <div>size:{humanFriendly(file.size)}</div>
              {errors && (
                <Typography sx={{color: 'red'}}>{errors}</Typography>
              )}
            </>
        )}
        <input id="file" type="file" ref={fileInput} onChange={handleUpload} style={{display: 'none'}}/>
        <Button 
            variant="contained"
            color="primary" 
            sx={{ marginBottom: '20px', width: '300px', fontSize: '17px', bgcolor: 'white', color: 'black', fontWeight: 'bold' }}
            onClick={
              () => {
                if (fileInput.current) {
                  fileInput.current?.click()
                }
              }}
          >
          Stage File
        </Button>
        
      </Stack>
      <Stack spacing={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <TextField label="ENTER FILE LINK HERE" variant="filled" sx={{ bgcolor: 'white', width: '400px', marginBottom: '10px' }} />
        <Button variant="contained" sx={{ width: '300px', fontSize: '17px', bgcolor: 'white', color: 'black', fontWeight: 'bold' }}>
          Download File
        </Button>
      </Stack>
    </Stack>
  );
};
export default SendHomePage;
