import { useState } from "react"
import { Button } from "./Button"
import { Input } from "./Input"
import { Label } from "./Label"

export function RadioGroup() {
    const [oneChoice, setOneChoice] = useState([
        {
            id: "choice-1",
            choice: "1"
        },
        {
            id: "choice-2",
            choice: "3"
        },
        {
            id: "choice-3",
            choice: "3"
        },
        {
            id: "choice-4",
            choice: "4"
        },
    ])
    const [options, setOptions] = useState([])

    return (
        <div className="checkboxes">
            <h2>How helpful did you find this</h2>
            <form

                onSubmit={event => {
                    event.preventDefault()


                    let answer = {
                        options
                    }
                    setOptions('')


                    setOneChoice([...oneChoice, answer])
                }}

            >
                <ul>
                    <li>
                        <Input
                            type="radio"
                            name='option'
                            id="choice-1"
                            value="1"
                            onChange={event => {
                                setOptions(event.target.value)
                            }}
                        >
                        </Input>
                        <Label htmlFor="choice-1">
                            1
                        </Label>
                    </li>
                    <li>
                        <Input
                            type="radio"
                            name='option'
                            id="choice-2"
                            value="2"
                            onChange={event => {
                                setOptions(event.target.value)
                            }}
                        >
                        </Input>
                        <Label htmlFor="choice-2">
                            2
                        </Label>
                    </li>
                    <li>
                        <Input
                            type="radio"
                            name='option'
                            id="choice-3"
                            value="3"
                            onChange={event => {
                                setOptions(event.target.value)
                            }}
                        >
                        </Input>
                        <Label htmlFor="choice-3">
                            3
                        </Label>
                    </li>
                    <li>
                        <Input
                            type="radio"
                            name='option'
                            id="choice-4"
                            value="4"
                            onChange={event => {
                                setOptions(event.target.value)
                            }}
                        >
                        </Input>
                        <Label htmlFor="choice-4">
                            4
                        </Label>
                    </li>
                </ul>
                <Button
                    size="small"
                    variant="important"
                >
                    Enter
                </Button>

            </form >
            <div className="form-solution-check">
                <ul>
                    {
                        oneChoice.map(item => (
                            <li>
                                <p>{item.options}</p>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div >
    )
}