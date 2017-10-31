import React from 'react';
import ReactDOM from 'react-dom';
import { InputSecond } from './StyledComponents.jsx';

class Form extends React.Component {

    render() {

        return (
            <form>
              <InputSecond type="text" placeholder="enter destination" value={this.props.filter} onChange={this.props.onChange} onBlur={this.props.outFocus}/>
            </form>
        );

    }
}

export default Form
