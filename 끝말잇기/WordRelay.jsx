const React = require('react');
// const { Component } = 'React';
const { useState, useRef } = React

const WordRelay = () => {
    const [word, setWord] = useState('신현수');
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const inputRef = useRef(null);


// class WordRelay extends React.Component {
//     state = {
//         word: '신현수',
//         value: '',
//         result: '',
//     };

    const onSubmitForm = (e) => {
        e.preventDefault();
        if(word[word.length-1] ===value[0]) {
                setResult('딩동댕');
                setWord(value);
                setValue('');
                inputRef.current.focus();
        } else {
            setResult('딩동댕');
            setValue('');
            inputRef.current.focus();
        }
    }

    const onChangeInput = (e) => {
        setValue(e.target.value);
    };

    // input;

    // onRefInput = (c) => {
    //     this.input = c;
    // };
    
        return (
            <>
            <div>{word}</div>
            <form onSubmit={onSubmitForm}>
                <label id="label" htmlFor="wordInput">글자를 입력하세요</label>
                <input id="wordInput" className="wordInput" ref={inputRef} value={value} onChange={onChangeInput} />
                <button>입력!!</button>
            </form>
            <div>{result}</div>
            </>
        );
    };


module.exports = WordRelay;