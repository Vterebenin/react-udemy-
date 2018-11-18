import React, { Component } from 'react';
import './item-add-form.css';

class ItemAddForm extends Component {
	render() {
		const { onAdded } = this.props;
		return (
			<div className="item-add-form">
				<button type="button"
                className="btn btn-outline-secondary"
				onClick={() => onAdded('test')}>Add item</button>
			</div>
		);
	}
}

export default ItemAddForm;