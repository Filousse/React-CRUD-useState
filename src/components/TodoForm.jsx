import React, {useState} from 'react'

export default function Todoform(props) {
    const [input, setInput] = useState('');


    const handleSubmit = e => {
        e.preventDefault();
        console.log("input", input);
        props.onSubmit({
          id: Math.floor(Math.random() * 10000),
          text: input
        });
        setInput('');
      };

    return (
        <>
            <form className="form">
                <input 
                    type="text"
                    placeholder="écrivez du text "
                    value={input}
                    name="text"
                    className="input"
                    onChange={e => setInput(e.target.value)}
                />
                <button className="button" onClick={handleSubmit}>envoyer</button>
               
            </form>
        </>
    )
}
