import { useState } from "react";
import { Button } from "./Button";

export function Main() {
    const [mood, setMood] = useState(false)
    const [mentalHealth, setMentalHealth] = useState(true)
    return (
        <>
            {mood ? <h1>I am sad π’</h1> : <h1>YAY!!! I am happy π</h1>}
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
                    alert("Find something to be happy πΈπΈ")
                }}
            >
                Mood Blah
            </Button>

            <br />
            <br />
            {mentalHealth ? <h1>Mental Health is not important π</h1> : <h1>Mental Health is the most impotrant thing and we should take good care of it</h1>}


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
                    alert('βββYOU SHOULD CHANGE YOUR OPINION  βββ')
                }}
            >
                Wrong
            </Button>

        </>
    )
}