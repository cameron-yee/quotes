import React, { useState } from 'react'

import Head from 'next/head'

import SplitText from 'react-pose-text'

import 'typeface-josefin-sans'
import 'typeface-amatic-sc'

import '../styles/index.scss'
import quotes from '../data/quotes.json'

const charPoses = {
    exit: { opacity: 0, y: 20 },
    enter: {
        opacity: 1,
        y: 0,
        delay: ({ charIndex }) => charIndex * 5
    }
}

const getRandomNumber = () => {
    return Math.floor(Math.random() * (quotes.length - 1))
}

const MainPage = () => {
    const [random_number, setRandomNumber] = useState(getRandomNumber())

    return (
        <div>
            <Head>
                <title>Quotes</title>

                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                    key="viewport"
                />

                <script
                    src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
                    integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
                    crossOrigin="anonymous"
                    key="bootstrap-jquery"
                />

                <script
                    src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
                    integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
                    crossOrigin="anonymous"
                    key="boostrap-popper"
                />

                <link
                    rel="stylesheet"
                    href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                    crossOrigin="anonymous"
                    key="bootstrap-stylesheet"
                />

                <script
                    src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
                    integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
                    crossOrigin="anonymous"
                />
            </Head>
            <div
                className="d-flex flex-wrap p-2"
                style={{ minHeight: '100vh' }}
            >
                <div>
                    <div>
                        <SplitText
                            initialPose="exit"
                            pose="enter"
                            charPoses={charPoses}
                        >
                            { quotes[random_number].quote }
                        </SplitText>
                    </div>
                </div>

                <div className="d-flex w-100 flex-wrap align-self-end">
                    <p id="person" className="w-100">{ quotes[random_number].person }</p>
                    { quotes[random_number].hasOwnProperty('source') &&
                        <p className="w-100">{ quotes[random_number].source }</p>
                    }
                    { quotes[random_number].hasOwnProperty('context') &&
                        <p className="w-100">{ quotes[random_number].context }</p>
                    }
                    { quotes[random_number].hasOwnProperty('tags') &&
                        quotes[random_number].tags.map((tag, index) => {
                            if (index !== quotes[random_number].tags.length - 1) {
                                return (
                                    <span
                                        key={`${random_number}-tag${index}`}
                                        className="tag"
                                    >
                                        { tag },&nbsp;
                                    </span>
                                )
                            } else {
                                return (
                                    <span
                                        key={`${random_number}-tag${index}`}
                                        className="tag"
                                    >
                                        { tag }
                                    </span>
                                )
                            }
                        })
                    }
                    <div
                        id="random"
                        className="ml-auto"
                        onClick={() => setRandomNumber(getRandomNumber())}
                    >
                        {/* Random */}
                        <i className="fas fa-random" />
                    </div>
                </div>
            </div>
            <style jsx>{`
                p {
                    // color: #FF00FF;
                    // color: #fff;
                    font-size: 2rem;
                    font-family: 'Amatic SC';
                }
                #person {
                    font-size: 2.2rem;
                }
                div {
                    // color: #00FFFF;
                    font-size: 1.1rem;
                    font-family: 'Josefin Sans';
                }

                #random {
                    // color: #FFFF00;
                    cursor: pointer;
                }
                .tag {
                    color: #cdcdcd;
                    font-size: .75rem;
                }
            `}</style>
        </div>
    )
}

export default MainPage