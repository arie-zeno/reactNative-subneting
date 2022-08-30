import React, { Component, useState } from 'react';
import { StyleSheet, TextInput, Text, View } from 'react-native';

export default function App() {
  
    const All = (props) => {
        const [hasilJwb, setHasilJwb] = useState('-');
        // let listSoal = [],
        //     soal = ['01110111', '01110010'];
        //     jawaban = [12, 10];
        
        return (

            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text>{props.soal} = </Text>
              <TextInput style={{borderWidth: 1, padding:5}} onChangeText ={ (newJwb) => {setHasilJwb(JwbUser(newJwb, props.jwb))} } />
              <CekJwb hasil={hasilJwb} />
              
            </View>
                )
    }

  return (
        <View style={{marginTop: 50, alignItems: 'center'}}>
          <All soal={'test'} jwb={'sds'} />
        </View>
  );
}

const CekJwb = (props) => {
  return (
    <Text> {props.hasil}</Text>
  )
}

const JwbUser = (jwbUser, kunciJwa) => {
  if(jwbUser == kunciJwa){

    return 'benar';
  }else{
    return 'salah'
  }
}

