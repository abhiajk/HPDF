import {Container,Header, Card, CardItem,Title, Button,Drawer,InputGroup,Input,Text,Badge, Icon,Content,Left, Right,Footer,Fab,Spinner,FooterTab,Thumbnail,H3,H2,Body,Top,Bottom,Tabs,Tab,TabHeading,hasTabs} from 'native-base'; //Include Nativebase required components

import React, {component} from 'react';


import  SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';
import  EntypoIcon from 'react-native-vector-icons/Entypo';
import  FeatherIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import SideBar from './yourPathToSideBar';

import { ViewPagerAndroid, Alert,StatusBar, StyleSheet ,View,Image,ScrollView,DrawerLayoutAndroid} from 'react-native'; //Most of the react native components can be found in NativeBase

export default class App extends React.Component {

  //checking state for if font is loaded or not.

  state = {

    fontLoaded: false,

  };

   async componentDidMount() {

    await Expo.Font.loadAsync({
       

      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),

    });

    //Setting the state to true when font is loaded.

    this.setState({ fontLoaded: true });

  }
       	closeDrawer = ()=> {
      this._drawer._root.close()
    }
    openDrawer = ()=> {
      this._drawer._root.open()
    }

  render() {
  
    return (
	<Drawer
        ref={(ref) => { this._drawer = ref; }}
        content={<SideBar navigator={this._navigator} />}
        onClose={() => this.closeDrawer()} >
        
	<Container>
		

          {

             this.state.fontLoaded ? (
			
			Alert.alert('Swipe Right for search box,Touch dp for profile page'),
		<ViewPagerAndroid style={{flex:1}} initialPage={1}>
<View style={{flex:1,justifyContent:'space-between'}}>

   <Header searchBar rounded style={{backgroundColor:'white',marginTop:20}}>
                   <InputGroup style={{flex:1}}>
		    <Button transparent>< Icon name='md-arrow-back'style={{paddingTop:5,color:'blue'}}/></Button>
                    <Input placeholder='Search Twitter' />
                    </InputGroup>
                </Header>
	
		<Footer>
                    <FooterTab style={{backgroundColor:'white'}}>
		<Button><View><Text style={{color:'blue', fontSize:12}}>All</Text></View></Button>
		<Button><View><Text style={{color:'grey', fontSize:12}}>Mentions</Text></View></Button>
		<Button></Button>
		<Button><Icon name='settings' style={{color:'blue'}}/></Button>
			</FooterTab>
                </Footer>

</View>

<View style={{flex:1}}>
	
	
		<Header hasTabs style={{ marginTop:StatusBar.currentHeight,backgroundColor:'white',justifyContent:'flex-start'}} >
                <Button transparent onPress={()=>this.openDrawer()}>
           	<Thumbnail source={{ uri: 'https://i.pinimg.com/736x/d7/6c/a5/d76ca503bfe94dae9e6fc1ffb15abf87.jpg'}} /> 
		</Button>
                 <Title style={{marginTop:15,paddingLeft:10}}><H3>Home</H3></Title>
		 </Header>

		
                  <Tabs tabBarUnderlineStyle={{backgroundColor:'skyblue'}}>
			<Tab heading={<TabHeading style={{backgroundColor:'white'}}><Icon name='home' style={{color:'skyblue'}}/></TabHeading>}>
		

			<ScrollView>
			<Card style={{height:400}}>
			<CardItem style={{flex:1}}>
				<View style={{height:390}}>
					<Thumbnail large source={{uri:'https://pbs.twimg.com/profile_images/810505707233677312/f9j-xxys.jpg'}} />
				</View>
				<View  style={{flex:1,paddingLeft:5}}>
					<View style={{flexDirection:'row'}}>
						<Text style={{fontWeight:'bold'}}>Discovery Channel</Text>
						<Text note>@disco.. 30m</Text>
					</View>
					<View  style={{flex:1}}>
						<Text>Ride along in virtual reality as an airplane outfitted with skis lands on the dangerous icy terrain of Antarctica >> http://bit.ly/2q5q03f</Text>
						<Image style={{ flex:1,resizeMode: 'cover'}} source={{uri:'https://i.ytimg.com/vi/Yy60Ttd6ujQ/maxresdefault.jpg'}}/>
						<View style={{flexDirection:'row',justifyContent:'space-between'}}>
							<Button transparent><FontAwesomeIcon name='comment-o'  style={{color:'grey'}}/><Text style={{color:'grey'}}>60</Text></Button>
							<Button transparent><FontAwesomeIcon name='retweet' style={{color:'grey'}}/><Text style={{color:'grey'}}>120</Text></Button>
							<Button transparent><SimpleLineIcon name='heart' style={{color:'grey'}} /><Text style={{color:'grey'}}>96</Text></Button>
							<Button transparent><MaterialIcon name='mail-outline' style={{color:'grey'}}/></Button>
						</View>
					</View>
				</View>
			</CardItem>
                   </Card>
			<Card style={{height:400}}>
			<CardItem style={{flex:1}}>
				<View style={{height:390}}>
					<Thumbnail large source={{uri:'https://pbs.twimg.com/profile_images/810505707233677312/f9j-xxys.jpg'}} />
				</View>
				<View  style={{flex:1,paddingLeft:5}}>
					<View style={{flexDirection:'row'}}>
						<Text style={{fontWeight:'bold'}}>Discovery Channel</Text>
						<Text note>@disco.. 30m</Text>
					</View>
					<View  style={{flex:1}}>
						<Text>Ride along in virtual reality as an airplane outfitted with skis lands on the dangerous icy terrain of Antarctica >> http://bit.ly/2q5q03f</Text>
						<Image style={{ flex:1,resizeMode: 'cover'}} source={{uri:'https://i.ytimg.com/vi/Yy60Ttd6ujQ/maxresdefault.jpg'}}/>
						<View style={{flexDirection:'row',justifyContent:'space-between'}}>
							<Button transparent><FontAwesomeIcon name='comment-o'  style={{color:'grey'}}/><Text style={{color:'grey'}}>60</Text></Button>
							<Button transparent><FontAwesomeIcon name='retweet' style={{color:'grey'}}/><Text style={{color:'grey'}}>120</Text></Button>
							<Button transparent><SimpleLineIcon name='heart' style={{color:'grey'}} /><Text style={{color:'grey'}}>96</Text></Button>
							<Button transparent><MaterialIcon name='mail-outline' style={{color:'grey'}}/></Button>
						</View>
					</View>
				</View>
			</CardItem>
                   </Card>
			<Card style={{height:400}}>
			<CardItem style={{flex:1}}>
				<View style={{height:390}}>
					<Thumbnail large source={{uri:'https://pbs.twimg.com/profile_images/810505707233677312/f9j-xxys.jpg'}} />
				</View>
				<View  style={{flex:1,paddingLeft:5}}>
					<View style={{flexDirection:'row'}}>
						<Text style={{fontWeight:'bold'}}>Discovery Channel</Text>
						<Text note>@disco.. 30m</Text>
					</View>
					<View  style={{flex:1}}>
						<Text>Ride along in virtual reality as an airplane outfitted with skis lands on the dangerous icy terrain of Antarctica >> http://bit.ly/2q5q03f</Text>
						<Image style={{ flex:1,resizeMode: 'cover'}} source={{uri:'https://i.ytimg.com/vi/Yy60Ttd6ujQ/maxresdefault.jpg'}}/>
						<View style={{flexDirection:'row',justifyContent:'space-between'}}>
							<Button transparent><FontAwesomeIcon name='comment-o'  style={{color:'grey'}}/><Text style={{color:'grey'}}>60</Text></Button>
							<Button transparent><FontAwesomeIcon name='retweet' style={{color:'grey'}}/><Text style={{color:'grey'}}>120</Text></Button>
							<Button transparent><SimpleLineIcon name='heart' style={{color:'grey'}} /><Text style={{color:'grey'}}>96</Text></Button>
							<Button transparent><MaterialIcon name='mail-outline' style={{color:'grey'}}/></Button>
						</View>
					</View>
				</View>
			</CardItem>
                   </Card>
		</ScrollView>	
			</Tab>
		
			<Tab heading={<TabHeading style={{backgroundColor:'white'}}><Icon name='search' style={{color:'lightgrey'}}/></TabHeading>}>
			</Tab>	
			<Tab heading={<TabHeading style={{backgroundColor:'white'}}><SimpleLineIcon name='bell' style={{color:'lightgrey',fontSize:20}}/></TabHeading>}></Tab>
			<Tab heading={<TabHeading style={{backgroundColor:'white'}}><MaterialIcon name='mail-outline' style={{color:'lightgrey',fontSize:20}}/></TabHeading>}></Tab>				
		</Tabs> 
	     	   <Fab
                        active={this.state.active}
                        direction="left"
                        containerStyle={{ marginLeft: 10,marginBottom:50}}
                        style={{ backgroundColor: '#5067FF' }}
                        position="bottomRight"
                        onPress={() => this.setState({ active: !this.state.active })}
                    >
                        <FeatherIcon name='feather' />
                        
                    </Fab>
		
		<Footer>
                    <FooterTab style={{backgroundColor:'white'}}>
		<Button><View><Text style={{color:'blue',fontSize:12}}>All</Text></View></Button>
		<Button><View><Text style={{color:'grey',fontSize:12}}>Mentions</Text></View></Button>
		<Button></Button>
		<Button><Icon name='settings' style={{color:'blue'}}/></Button>
			</FooterTab>
                </Footer>
		         
 </View> 

</ViewPagerAndroid>
   
  
) : null

        }

        </Container>
	</Drawer>

    );

  }

}

