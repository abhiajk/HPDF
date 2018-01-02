import {Content,Header,Container,Left,Button,Icon,Thumbnail,List,ListItem,Right,Body,Card,Footer,FooterTab} from 'native-base'; //Include Nativebase required components
import React, {component} from 'react';
import {Text, View} from 'react-native'; //Most of the react native components can be found in NativeBase
import  SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';
import  EntypoIcon from 'react-native-vector-icons/Entypo';
import  MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
export default class yourPathToSideBar extends React.Component {
	render(){
	return(
<Container style={{backgroundColor:'white'}}>
	<View style={{marginTop:30,marginLeft:20}}>
	<View style={{flexDirection:'row'}}>
	<Thumbnail  large source={{ uri: 'https://i.pinimg.com/736x/d7/6c/a5/d76ca503bfe94dae9e6fc1ffb15abf87.jpg'}} /> 	
	</View>
	<Text style={{fontWeight:'bold',fontSize:20}}>Abhijith J Kumar</Text>
	<Text note style={{color:'grey'}}>@abhijithajk</Text>
	<Text></Text>
	<View style={{flexDirection:'row',marginBottom:10}}>
	<Text  note style={{fontWeight:'bold'}}>700</Text>
	<Text  note style={{color:'grey'}}> Following</Text>
	<Text  note style={{fontWeight:'bold'}}>  650</Text>
	<Text  note style={{color:'grey'}}> Followers</Text>
	</View>
	</View>
	<View style={{borderBottomColor:'lightgrey',borderBottomWidth:1}} />
	<List>
	  <ListItem iconLeft noBorder>
             <Icon name='ios-person' style={{ color: '#0A69FE' }} />
             <Text style={{fontSize:20,color:'hsl(360,0%,30%)'}}>  Profile</Text>
            </ListItem>
	 <ListItem iconLeft  noBorder>
             <Icon name='ios-list-box-outline' style={{ color: '#0A69FE' }} />
             <Text style={{fontSize:20,color:'hsl(360,0%,30%)'}}>  Lists</Text>
            </ListItem>
	 <ListItem iconLeft  noBorder>
             <Icon name='ios-thunderstorm-outline' style={{ color: '#0A69FE' }} />
             <Text style={{fontSize:20,color:'hsl(360,0%,30%)'}}>  Moments</Text>
            </ListItem>
	 <ListItem iconLeft  noBorder>
             <Icon name='ios-time-outline' style={{ color: '#0A69FE' }} />
             <Text style={{fontSize:20,color:'hsl(360,0%,30%)'}}>  Highlights</Text>
            </ListItem>
	
	<View style={{borderBottomColor:'lightgrey',borderBottomWidth:1}} />
	
	<ListItem noBorder>
		<Text style={{fontSize:20,color:'hsl(360,0%,30%)'}}> Settings and Privacy </Text>
	</ListItem>
	<ListItem noBorder>
		<Text style={{fontSize:20,color:'hsl(360,0%,30%)'}}> Help Centre </Text>
	</ListItem>
	</List>
	<View style={{borderBottomColor:'lightgrey',borderBottomWidth:1,marginTop:40}} />
	
		<Footer style={{height:100,marginTop:10}}>
                    <FooterTab style={{marginBottom:50,backgroundColor:'white'}}>
		<Button><Icon name='ios-moon-outline'  style={{color:'aqua'}} /></Button>
		<Button />
		<Button><Icon name='ios-menu' style={{color:'aqua'}}/></Button>
			</FooterTab>
                </Footer>	         
	
</Container>
	
		)
		};
	}