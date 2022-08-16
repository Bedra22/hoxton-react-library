import { useState } from "react";
import { Button } from "./Button";

export function Main() {
    const [mood, setMood] = useState(false)
    const [mentalHealth, setMentalHealth] = useState(true)
    return (
        <>
            {mood ? <h1>I am sad 😢</h1> : <h1>YAY!!! I am happy 😁</h1>}
            <Button
                size="big"
                onClick={() => {
                    setMood(false)
                }}

            >
                Mood YAY
            </Button>
            <Button
                size="big"
                onClick={() => {
                    setMood(true)
                }}
                onDoubleClick={() => {
                    alert("Find something to be happy 😸😸")
                }}
            >
                Mood Blah
            </Button>

            <br />
            <br />
            {mentalHealth ? <h1>Mental Health is not important</h1> : <h1>Mental Health is the most impotrant thing and we should take good care of it</h1>}


            <Button
                size="small"
                variant="important"
                onClick={() => {
                    setMentalHealth(false)
                }}
            >
                Dah
            </Button>
            <Button
                size="small"
                onClick={() => {
                    setMentalHealth(true)
                }}
                onDoubleClick={() => {
                    alert('❗❗❗ YOUR OPINION IS WRONG ❗❗❗')
                }}
            >
                Wrong
            </Button>

        </>
    )
}