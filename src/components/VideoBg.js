import React, { useState } from 'react'
import '../components/videoBg.css';
import bg from '../components/assests/videos/Bg.mp4'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { Image } from "semantic-ui-react";
import { Grid, Card, CardContent, Typography, Container, CardMedia } from '@material-ui/core';
import { CssBaseline, Box } from '@material-ui/core';
import { cards, imgs } from '../data/data'

import myAudioFile from '../components/assests/musics/Beep03.mp3';
const theme = createTheme();
export default function VideoBg() {
    const [selectedCard, setSelectedCard] = useState(1);

    const [wordData, setWordData] = useState(imgs[0])
    const audio = new Audio(myAudioFile);

    const handleClick = (index) => {
        console.log("index", index)
        const wordData = imgs[index];
        console.log("wordData", wordData)
        setWordData(wordData)
        console.log("index", setWordData(wordData))
        audio.play();
    }
    return (
        <>
            {/* <Box className='mt-4'> */}
            <main>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={6}>
                        {/* {selectedCard === 1 ? <div className='row'>
                            <div className='col-md-12 col-12'>
                                <Card
                                    className='cardvideo1 mt'
                                >
                                    <CardMedia
                                        component="video"
                                        src={wordData.videoUrl}
                                        autoPlay
                                        className='w-100 h-100'
                                    />
                                </Card>
                            </div>

                        </div> : <div className='row'>
                            <div className='col-md-12 col-12'>
                                <Card
                                    className='cardvideo1 mt'
                                >
                                    <CardMedia
                                        component="video"
                                        src={wordData.videoUrl}
                                        autoPlay
                                        className='w-100 h-100'
                                    />
                                </Card>
                            </div>
                            <div className='col-md-12 col-12'>
                                <Card
                                    className=' MuiCardroot mt '
                                    id='MuiCardroot'
                                >
                                    <CardMedia
                                        component="video"
                                        src={wordData.video}
                                        autoPlay
                                        className='w-100 h-100'
                                    />
                                </Card>
                            </div>
                        </div>} */}
                        <div className='row'>
                            <div className='col-md-12 col-12'>
                                <Card
                                    className='cardvideo1 mt'
                                >
                                    <CardMedia
                                        component="video"
                                        src={wordData.videoUrl}
                                        autoPlay
                                        className='w-100 h-100'
                                    />
                                </Card>
                            </div>
                            <div className='col-md-12 col-12'>
                                <Card
                                    className=' MuiCardroot mt '
                                    id='MuiCardroot'
                                >
                                    <CardMedia
                                        component="video"
                                        src={wordData.video}
                                        autoPlay
                                        className='w-100 h-100'
                                    />
                                </Card>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <Card id='MuiCardroot2'>
                            <CardMedia
                                component="img"
                                alt="Example Image"
                                image={wordData.value}
                                title="Example Image"
                                className='w-100 h-100'
                            />
                        </Card>
                    </Grid>
                </Grid>
            </main>
            <main>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={6}>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <Card>
                            <Carousel
                                additionalTransfrom={0}
                                arrows={false}
                                autoPlay={false}
                                autoPlaySpeed={3000}
                                centerMode={false}
                                className=""
                                containerClass="container-with-dots"
                                dotListClass=""
                                draggable
                                focusOnSelect={false}
                                itemClass=""
                                keyBoardControl
                                minimumTouchDrag={80}
                                renderButtonGroupOutside={false}
                                renderDotsOutside={false}
                                responsive={{
                                    desktop: {
                                        breakpoint: { max: 3000, min: 1024 },
                                        items: 5,
                                        partialVisibilityGutter: 60,
                                    },

                                    tablet: {
                                        breakpoint: { max: 1024, min: 464 },
                                        items: 5,
                                        partialVisibilityGutter: 50,
                                    },
                                    mobile: {
                                        breakpoint: { max: 464, min: 0 },
                                        items: 2,
                                        partialVisibilityGutter: 30,
                                    },
                                }}
                                selectedIndex={0}
                                showDots={false}
                                sliderClass=""
                                slidesToSlide={10}
                                swipeable
                            >
                                {cards.map((card, index) => (
                                    <div key={card.id} >
                                        <Image
                                            draggable={false}
                                            src={card.image}
                                            onClick={() => handleClick(index)}
                                        />
                                    </div>
                                ))}
                            </Carousel>
                        </Card>
                    </Grid>
                </Grid>
            </main>
            {/* </Box> */}

        </>
    )
}
