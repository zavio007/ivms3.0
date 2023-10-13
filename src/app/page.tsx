import Image from 'next/image'
import styles from "./style.module.scss"
import { TextField } from '@mui/material'

export default function Home() {
  return (
    <main>
        <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
    </main>
  )
}
