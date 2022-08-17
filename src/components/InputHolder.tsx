import { useState } from "react";
import { Button } from "./Button";
import { Input } from "./Input";
import { Label } from "./Label";

export function InputHolder() {
    const [fixMentalealth, setFixMentalHealth] = useState([])

    const [solution, setSolution] = useState('')
    return (
        <div className="label-input">
            <form
                onSubmit={event => {
                    event.preventDefault()


                    let answer = {
                        solution
                    }

                    setSolution('')

                    setFixMentalHealth([...fixMentalealth, answer])
                }}>
                <Label
                >
                    Fix your Mental health, Way1:
                    <Input
                        type="text"
                        name="solution1"
                        value
                        placeholder="Enter a solution "
                        onChange={event => {
                            setSolution(event.target.value)
                        }}
                        value={solution}
                    />
                    <Button
                        onDoubleClick={() => {
                            alert('Oh my good it might work');
                        }}
                    >Add </Button>
                </Label>
            </form>
            <div className="form-solution">
                <ul>
                    {fixMentalealth.map(item =>
                        <li>
                            <p>{item.solution}</p>
                        </li>
                    )}
                </ul>
            </div>
        </div >
    )
}

