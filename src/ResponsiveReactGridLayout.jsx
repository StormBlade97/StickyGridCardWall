import ReactGridLayout, {Responsive, WidthProvider} from 'react-grid-layout';
import React from 'react';
import {orange500, blue500, green500, indigo500, cyan500, lime500, white} from 'material-ui/styles/colors';
import loremipsum from './loremipsum';
import Paper from 'material-ui/Paper';
import Card from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
class PaperZ extends React.Component {
	constructor(props) {
		super(props);
		this.state = {zDepth: 3, color: props.bgColor};
	}
	handleMouseDown(e) {
		this.setState({zDepth : 5, color: white})
	}
	handleMouseUp(e) {
		this.setState({zDepth : 3, color: this.props.bgColor})
	}
	render() {
    let newP = Object.assign({}, this.props);
    delete newP.bgColor;
    newP.style = Object.assign({}, newP.style, {
                backgroundColor: this.state.color})
		return  <Card  
                onMouseOver={()=>this.handleMouseDown()}
                onMouseOut={()=>this.handleMouseUp()} 
                zDepth={this.state.zDepth}
                {...newP}
                >
                  <h4>This is a card</h4>
              </Card>
	}
}
export default class ResponsiveReactGridLayout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {items:[
          {i: '0', x: 0, y: 2, w: 1, h: 1, static: false, zDepth: 3, color: orange500},
          {i: '1', x: 1, y: 2, w: 1, h: 1, minW: 2, maxW: 4, zDepth: 3, color: blue500},
          {i: '2', x: 2, y: 2, w: 1, h: 1, zDepth: 3, color: green500},
          {i: '3', x: 3, y: 2, w: 1, h: 1, zDepth: 3, color: indigo500},
          {i: '4', x: 4, y: 2, w: 1, h: 1, zDepth: 3, color: cyan500},
          {i: '5', x: 5, y: 2, w: 1, h: 1, zDepth: 3, color: lime500},
          {i: '6', x: 0, y: 2, w: 1, h: 1, static: false, zDepth: 3, color: orange500},
          {i: '7', x: 1, y: 2, w: 1, h: 1, minW: 2, maxW: 4, zDepth: 3, color: blue500},
          {i: '8', x: 2, y: 2, w: 1, h: 1, zDepth: 3, color: green500},
          {i: '9', x: 3, y: 2, w: 1, h: 1, zDepth: 3, color: indigo500},
          {i: '10', x: 4, y: 2, w: 1, h: 1, zDepth: 3, color: cyan500},
          {i: '11', x: 5, y: 2, w: 1, h: 1, zDepth: 3, color: lime500},
          {i: '12', x: 0, y: 2, w: 1, h: 1, static: false, zDepth: 3, color: orange500},
          {i: '13', x: 1, y: 2, w: 1, h: 1, minW: 2, maxW: 4, zDepth: 3, color: blue500},
          {i: '14', x: 2, y: 2, w: 1, h: 1, zDepth: 3, color: green500},
          {i: '15', x: 3, y: 2, w: 1, h: 1, zDepth: 3, color: indigo500},
          {i: '16', x: 4, y: 2, w: 1, h: 1, zDepth: 3, color: cyan500},
          {i: '17', x: 5, y: 2, w: 1, h: 1, zDepth: 3, color: lime500}
      ]}
  }

  shouldComponentUpdate() {return false}
	render() {
    const ResponsiveLayout = WidthProvider(ReactGridLayout);
    return <ResponsiveLayout
    				layout={this.state.items}
    				cols={12}
    				onLayoutChange={()=>console.log("Layout sucks!")}
    				useCSSTransforms={true}
            verticalCompact={false}
    			>
    				  {this.state.items.map((item)=>{
                return <PaperZ className="center-align" bgColor={item.color} key={item.i.toString()}/>
              })}
    			</ResponsiveLayout>
	}
}