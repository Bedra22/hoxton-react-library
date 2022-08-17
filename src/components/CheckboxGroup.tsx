import { useState } from "react";
import { Button } from "./Button";
import { Input } from "./Input";
import { Label } from "./Label";

export function CheckboxGroup() {
    const [check, setCheck] = useState([])
    const [options, setOptions] = useState([])

    function youChoose() {
        alert('You choosed this option')
    }

    return (
        <div className="checkboxes">

            <form
                onSubmit={event => {
                    event.preventDefault()


                    let answer = {
                        options
                    }
                    setOptions('')

                    setCheck([...check, answer])
                }}>
                <ul>
                    <li>
                        <Label>
                            Go out with friends
                        </Label>

                        <Input
                            type="checkbox"
                            name="option"
                            onChange={event => {
                                setOptions(event.target.value)
                            }}
                            value='Go out with friends'
                            onSelect={youChoose}
                        />
                    </li>
                    <li>
                        <Label>
                            Visit new places
                        </Label>
                        <Input
                            type="checkbox"
                            name="option"
                            onChange={event => {
                                setOptions(event.target.value)
                            }}
                            value='Visit new places'
                        />
                    </li>
                    <li>
                        <Label>
                            Change your clothes
                        </Label>
                        <Input
                            type="checkbox"
                            name="option"
                            onChange={event => {
                                setOptions(event.target.value)
                            }}
                            value='Change your clothes'
                        />
                    </li>
                    <li>
                        <Label>
                            Go out with friends
                        </Label>
                        <Input
                            type="checkbox"
                            name="option"
                            onChange={event => {
                                setOptions(event.target.value)
                            }}
                            value='Go out with friends'
                        />
                    </li>
                </ul>
                <Button>
                    Click
                </Button>
            </form>
            <div className="form-solution-check">
                <ul>
                    {
                        check.map(item => (
                            <li>
                                <p>{item.options}</p>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

