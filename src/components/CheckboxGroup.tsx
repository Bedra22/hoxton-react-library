import { useState } from "react";
import { Button } from "./Button";
import { Input } from "./Input";

export function CheckboxGroup() {
    const [check, setCheck] = useState([
        {
            id: 1,
            content: 'Go out with friends'
        },
        {
            id: 2,
            content: 'Visit new places'
        },
        {
            id: 3,
            content: 'Change your clothes'
        },
        {
            id: 4,
            content: 'Spend quality time'
        }
    ])
    const [options, setOptions] = useState([])

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
                    {
                        check.map(item => (
                            <li>
                                <p>{item.content}</p>
                                <Input
                                    type="checkbox"
                                    name="option"
                                    onChange={event => {
                                        setOptions(event.target.value)
                                    }}
                                    value={item.content}
                                />
                            </li>
                        ))
                    }

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

// <Label>
//                     Go out with friends
//                     <Input
//                         type="checkbox"
//                         name="option"
//                         onChange={event => {
//                             setOptions(event.target.value)
//                         }}
//                         value='Go out with friends'
//                     />
//                 </Label>
//                 <Label>
//                     Visit new places
//                     <Input
//                         type="checkbox"
//                         name="option"
//                         onChange={event => {
//                             setOptions(event.target.value)
//                         }}
//                         value='Visit new places'
//                     />
//                 </Label>
//                 <Label>
//                     Change your clothes
//                     <Input
//                         type="checkbox"
//                         name="option"
//                         onChange={event => {
//                             setOptions(event.target.value)
//                         }}
//                         value='Change your clothes'
//                     />
//                 </Label>
//                 <Label>
//                     Go out with friends
//                     <Input
//                         type="checkbox"
//                         name="option"
//                         onChange={event => {
//                             setOptions(event.target.value)
//                         }}
//                         value='Go out with friends'
//                     />
//                 </Label>