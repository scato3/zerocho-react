const React = require('react');
const { useState, useRef } = React

const GuGuDan = () => {
    const [first, setFirst] = React.useState(Math.ceil(Math.random() * 9))
    const [second, setSecond] = React.useState(Math.ceil(Math.random() * 9))
    const [value, setValue] = React.useState('');
    const [result, setResult] = React.useState('');
    const inputRef = React.useRef(null);

    const onChangeInput = (e) => {
        setValue(e.target.value);
    }

    const onSubmitForm = (e) => {
        e.preventDefault();
        if (parseInt(this.state.value) === this.state.first * this.state.second) {
            setResult('정답' + value)
            setFirst(Math.ceil(Math.random() * 9));
            setSecond(Math.ceil(Math.random() * 9));
            setValue('');
            inputRef.current.focus();
        }
        else {
            setResult('땡');
            setValue('');
            inputRef.current.focus();
        }
    };
    

    return (
            <>
                <div>{this.state.first} 곱하기 {this.state.second}는?</div>
                <form onSubmit={this.onSubmit}>
                    <input ref={this.onRefInput} type="number" value={this.state.value} onChange={this.onChange} />
                    <button>입력!</button>
                </form>
                <div>{this.state.result}</div>
            </>
        )
}

module.exports = GuGuDan;