import React from 'react';
import {StyleSheet,Text,View,Button} from 'react-native';
class  Counter extends React.Component {

state={

count:0
}

incrementValue=()=>{

this.setState({count:this.state.count+1})
}

decrementValue=()=>{

this.setState({count:this.state.count-1})
}

render(){
return(
<View style={styles.container}>

<Text style={{fontSize:40}}>{this.state.count}</Text>
<Button title="Increment" onPress={this.incrementValue} />

<Button title="Decrement"  onPress={this.decrementValue} />



</View>

)}}



export default Counter;

const styles=StyleSheet.create({

container:{
flex:1,
backgroundColor:"yellow",
alignItems:'center',
justifyContent:'center',
},
})