import React, {PropTypes} from 'react';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import CloseButton from 'material-ui/svg-icons/content/clear';
import IconButton from 'material-ui/IconButton';
import Menu from 'material-ui/svg-icons/navigation/menu';

export default class DialogTriggerer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
		}; // initial state
	}
	handleOpen() {
		this.setState({open: true})
	}
	handleClose() {
		this.setState({open: false})
	}

	render() {
		const {actions, title, children} = this.props;
		const defaultAction = (
			<IconButton
			secondary={true}
			onTouchTap={()=>this.handleClose()}
			tooltip="Close"
			keyboardFocused={true}
			>
				<CloseButton/>
			</IconButton>
			)
		return (
			<div>
			<IconButton 
            	tooltip="Open drawer"
            	onTouchTap={()=>this.handleOpen()}
            >
            	<Menu></Menu>
            </IconButton>
				<Dialog
				title={title || "Anonymous dialog"}
				actions={actions || defaultAction}
				modal={false}
          		open={this.state.open}
          		onRequestClose={this.handleClose}
				>
				{children}	
				</Dialog>
			</div>
			);
	}
}
DialogTriggerer.propTypes= {
	children: PropTypes.element.isRequired,
	title: PropTypes.string,
	actions: PropTypes.arrayOf(PropTypes.element)
}