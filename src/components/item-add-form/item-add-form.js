import React from 'react'
import './item-add-form.css'

export default class ItemAddForm extends React.Component {
    state = {
        label: ''
    }
    
    onLabelChange = (e) => {
            this.setState({
            label: e.target.value
        })
    }
    onSubmit = (e) => {
        e.preventDefault()
        if (this.state.label) {
            this.props.onItemAdded(this.state.label)
            this.setState({
                label: ''
            })
        }
        
    }    

    render() {
        const { onItemAdded } = this.props
        return (
            <form className="item-add-form"
                  onSubmit={this.onSubmit}>
                <input type="text"
                       onChange={this.onLabelChange}
                       placeholder="What needs to be done"
                       value={this.state.label}/>
                <button 
                    className="btn">
                    Add item
                </button>

            </form>
        )
    }
}