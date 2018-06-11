import * as React from 'react';
import { Platform, View, Text, StyleSheet, ActivityIndicator, TextInput, TouchableOpacity, ScrollView, RefreshControl, ImageBackground } from 'react-native';

import Navigation from 'react-navigation';
// Mobx
import { observer } from 'mobx-react';
import Header from '../components/Header';
import Button, { ButtonType } from '../components/Button';
import TextInputForm from '../components/TextInputForm';
import { Font, ColorFont, SizeFont } from '../components/FontAleo';
import FontAleo from '../components/FontAleo';
import { observable } from 'mobx';
import AccountStore from '../stores/AccountStore';

@observer
export default class Login extends React.Component<Navigation> {

  @observable login = true;

  styles = StyleSheet.create({
    container: {
      marginRight: 25,
      marginLeft: 25,
      paddingBottom: 10,
      flex: 2,
      alignItems: 'center',
      justifyContent: 'flex-end'
    },
  
    body_logo: {
      color: 'rgb(255, 255, 255)',
      fontSize: 32,
      fontFamily: 'Chalkduster',
      fontWeight: 'bold',
      marginBottom: 20
    },
  
    errorView: {
      flex: 1,
      justifyContent: 'center'
    },
  
    errorText: {
      textAlign: 'center'
    },
  
    actionView: {
      flex: 3,
      paddingRight: 30,
      paddingLeft: 30,
      paddingTop: 30,
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      borderTopRightRadius: 12,
      borderTopLeftRadius: 12
    },

    triangleShape: {
      width: 0,
      height: 0,
      borderLeftWidth: 10,
      borderRightWidth: 10,
      borderBottomWidth: 10,
      borderRadius: 1,
      borderStyle: 'solid',
      backgroundColor: 'transparent',
      borderLeftColor: 'transparent',
      borderRightColor: 'transparent',
      borderBottomColor: 'rgba(255, 255, 255, 0.2)'
    },
  });

  render(): JSX.Element {
    return (
        <ImageBackground
              style={{flex: 1}}
              source={{uri: 'https://i.pinimg.com/736x/6d/7c/48/6d7c480b12e4eebfde2f8908851e8f16--purple-wallpaper-phone-iphone-ombre-wallpaper.jpg'}}
        >
          <View style={this.styles.container}>

            <Text style={this.styles.body_logo}>epostrezi</Text>
            <FontAleo marginBottom={48} color={ColorFont.White} alignCenter>Registriraj in doživi popolnoma novo obliko naročanja.</FontAleo>
            
            <View style={{width: '100%', flexDirection: 'row'}}>
                
                <TouchableOpacity onPress={() => this.login = false} style={{flex: 1}}>
                  <FontAleo font={Font.Bold} color={ColorFont.White} size={SizeFont.Medium} alignCenter>REGISTRACIJA</FontAleo>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => this.login = true} style={{flex: 1}}>
                  <FontAleo font={Font.Bold} color={ColorFont.White} size={SizeFont.Medium} alignCenter>PRIJAVA</FontAleo>
                </TouchableOpacity>

            </View>
          </View>
          <View style={{flexDirection: 'row', paddingLeft: 30, paddingRight: 30}}>
              <View style={{flex: 1, alignItems: 'center'}}>
                  {!this.login &&
                    <View style={this.styles.triangleShape} />
                  }
              </View>
              <View style={{flex: 1, alignItems: 'center'}}>
                  {this.login &&
                    <View style={this.styles.triangleShape} />
                  }
              </View>
          </View>

            {this.login &&
              <View style={this.styles.actionView}>
                <TextInputForm onChangeText={text => this.onLoginUsername(text)}>Uporabniško ime</TextInputForm>
                <TextInputForm password={true} onChangeText={text => this.onLoginPassword(text)}>Geslo</TextInputForm>
                <Button type={ButtonType.OpacityButton} onPress={() => this.onLoginPressed()}>Prijavi se</Button>
                <View style={{width: '95%', flexDirection: 'row', height: 50, marginTop: 20, borderTopWidth: 1, borderColor: 'rgba(255, 255, 255, 0.3)', justifyContent: 'center', alignItems: 'center', alignSelf: 'center'}}>
                    <FontAleo color={ColorFont.White} size={SizeFont.Small} alignCenter>Pozabljeno geslo?</FontAleo>
                    <TouchableOpacity>
                        <FontAleo font={Font.Bold} color={ColorFont.White} size={SizeFont.Small} alignCenter> Poišči pomoč.</FontAleo>
                    </TouchableOpacity>
                </View>
              </View>
            }

            {!this.login && 
                <View style={this.styles.actionView}>
                    <TextInputForm>Uporabniško ime</TextInputForm>
                    <TextInputForm password={true}>Geslo</TextInputForm>
                    <TextInputForm password={true}>Geslo</TextInputForm>
              
                    <Button type={ButtonType.OpacityButton} onPress={() => alert('hej')}>Registriraj se</Button>
                </View>
            }
        </ImageBackground>
    );
  }

  private onLoginUsername(text: string): void {
    AccountStore.email = text;
  }

  private onLoginPassword(text: string): void {
    AccountStore.password = text;
  }

  private getActionStyle(dependency: boolean): {} {
    return {
      flex: 1,
      borderBottomWidth: !dependency ? 1.5 : 0,
      borderColor: !dependency ? 'rgb(199, 200, 204)' : 'transparent',
    };
  }

  private async onLoginPressed(): Promise<void> {
      await AccountStore.login();
  }
}