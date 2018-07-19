'use strict';
//cd AwesomeProject
//npm start
import React, { Component } from 'react';
import {
    StyleSheet,
    ScrollView,
    Text,
    TextInput,
    View,
    Button,
    ActivityIndicator,
    Image,
} from 'react-native';

export default class SearchPage extends Component<{}> {
    static navigationOptions = {
        title: 'Manchester made easy', 
        
    };
    render() {
        return ( 
    <ScrollView>
            <View style={styles.container}>
        <Text style={styles.description}>
                    What do you want to know?
        </Text>
                <Image source={require('./Resources/pic.png')} style={styles.image} />
        <Text style={styles.description}>
                    Discover Manchester! HIT search!.
        </Text>
                <Image source={require('./Resources/pic1.png')} style={styles.image} />
             <View style={styles.flowRight}>
                    <TextInput
                        underlineColorAndroid={'transparent'}
                        style={styles.searchInput}
                        placeholder=' Search and broaden your horizon :)' />
                    <Button
                        onPress={() => { }}
                            color='#ec4747'
                        title='Go'
                    />
             </View>
                <Image source={require('./Resources/pic3.png')} style={styles.image} />
                </View>
                <Button
                    onPress={() => {
                    }}
                    color='#049ad6'
                    title='DISABLED'
                />
                <Button
                    onPress={() => {
                    }}
                    color='#049ad6'
                    title='DISABLED'
                />
     </ScrollView>         
        );
    }
}
const styles = StyleSheet.create({
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565'
  },
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center'
    },
    flowRight: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'stretch',
    },
    searchInput: {
        height: 36,
        padding: 4,
        marginRight: 5,
        flexGrow: 1,
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#48BBEC',
        borderRadius: 8,
        color: '#48BBEC',
    },
});

 //TOOLBAR
                   /* <ToolbarAndroid style={styles.container} title='Toolbar' navIcon={require('./Resources/app_logo.png')}
                        actions={[{ Text: 'Settings', icon: require('./Resources/icon_settings.png'), show: 'always' }]}
                        onActionSelected={this.onActionSelected} />
                        },
toolbar: {
    backgroundColor: '#2196F3',
        height: 10,
            alignSelf: 'stretch',
                textAlign: 'center',
    },
onActionSelected(position) {
}*/