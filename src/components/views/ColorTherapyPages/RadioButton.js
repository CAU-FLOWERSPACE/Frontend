import React, {useState} from 'react'

export default function RadioButton({text}) { //text말고 value도 넘겨주어야 백에게 보내기 가능하니까 꼭 추가해주기

    const [Check, setCheck] = useState();

    const HandleChange = (event) => 
    {
        console.log(`선택한 값 : ${event.target.value}`)
        setCheck(event.target.value);
        console.log(`선택 후 : ${event.target.value}`)

    }


    return (
        <div>
            <input
            id={text}
            value={text}
            name="platform"
            type="radio"
            checked={Check === `${text}`}
            onChange={HandleChange}
            />
            {text} 
            {/* children은 병 이름 */}
        </div>
    )
}
