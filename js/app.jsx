import React from 'react';
import ReactDOM from 'react-dom';
import Form from './form.jsx';
import {places} from './cities.js';
import {Input, Mydiv} from './StyledComponents.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cities: [],
            filter: "",
            filterBackup: ""
        }
    }

    componentDidMount() {
        this.setState({cities: places});
    }

    onChange(event) {
        let value = event.currentTarget.value;
        this.setState({filter: value, filterBackup: value});
    }

    outFocus() {
        this.setState({filter: ""});
    }

    selectItem = (item) => {
        this.setState({filter: item})
    }

    focusedItem = () => {
        this.setState({filter: this.state.filterBackup})
    }

    render() {
      
        let list = [];
        this.state.cities.forEach((item, index) => {
            if (item.name.indexOf(this.state.filter) > -1 || item.code.indexOf(this.state.filter) > -1) {
                list.push(
                    <Input key={index} type="submit" value={item.name + " " + item.code} onClick={e => this.selectItem(item.name)} onFocus={e => this.focusedItem()}  readOnly></Input>)
            }
        });

        if(this.state.filterBackup === ""){
          list=[];
        }

        let form;

        if (list.length === 0) {
            form = <Form filter={""} onChange={this.onChange.bind(this)} outFocus={this.outFocus.bind(this)}/>
        } else {
            form = <Form filter={this.state.filter} onChange={this.onChange.bind(this)} outFocus={this.outFocus.bind(this)}/>
        }

        return (
            <Mydiv>
                {form}
                {list}
            </Mydiv>
        )
    }
}

ReactDOM.render(
    <App/>, document.getElementById('app'));
