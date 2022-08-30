import React, { Component, useState } from 'react';
import { StyleSheet, TextInput, Text, View } from 'react-native';

export default function App() {
  
    const All = (props) => {
        const [hasilJwb, setHasilJwb] = useState('-');

        return (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text>{props.soal} = </Text>
              <TextInput style={{borderWidth: 1, padding:5}} onChangeText ={ (newJwb) => {setHasilJwb(JwbUser(newJwb, props.jwb))} } />
              <CekJwb hasil={hasilJwb} />
            
        </View>)
    }
    const ListSoal = () => {
      let soal2 = [];
            let soal = ['10010010', '01110111', '11111111'],
            jawaban = [146, 119, 255];
            soal.forEach((e, i) =>{
              soal2.push(
                <All soal={soal[i]} jwb={jawaban[i]} key={i} />
              )
            })
            return soal2

    }

  return (
        <View style={{marginTop: 50, alignItems: 'center'}}>
          <ListSoal />
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

