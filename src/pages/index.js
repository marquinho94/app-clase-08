import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import CrazyVideo from './components/_video'
import Button from './components/_button'
import ButtonMod from './components/_buttonMod'
import Input from './components/_input '

const inter = Inter({ subsets: ['latin'] })

// ARRAY 

let myArray = [ "time", "password","date", "text", "button", "week"]


export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>

        <CrazyVideo URL={"https://samplelib.com/lib/preview/mp4/sample-5s.mp4"}></CrazyVideo>

        <Button></Button>

        <ButtonMod texto={"Este es un string pasado desde index.js"}></ButtonMod>

        <Input type={"name"}></Input>


        <h3>No estoy muy seguro de como hacer lo del array de inputs acá</h3>



        
 




      </main>
    </>
  )
}
