import { View, Text } from 'react-native';

import React from 'react';

 

const App = () => {

  return (

    <>

      <View style={{padding:20}}>

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{ color: 'gray' }}>Friday, 15 Dec</Text>
          <Text style={{ color: 'gray' }}>Search</Text>
        </View>

        <View>
          <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Learn</Text>
          <Text>Choose part of the body</Text>
        </View>

        <View style={{padding:20, backgroundColor:'#EB7662', borderRadius:10, marginTop:30}}>
          <Text style={{color:'white', fontWeight:'bold', fontSize:15}}>Head & Face</Text>
          <Text style={{color:'#D3D3D3',fontSize:10 }}>11 diseases</Text>
        </View>
        <View style={{padding:20, backgroundColor:'#8DC4BB', borderRadius:10, marginTop:10}}>
          <Text style={{color:'white', fontWeight:'bold', fontSize:15}}>Back & Neck</Text>
          <Text style={{color:'#D3D3D3',fontSize:10 }}>9 diseases</Text>
        </View>
        <View style={{padding:20, backgroundColor:'#F2982F', borderRadius:10, marginTop:10}}>
          <Text style={{color:'white', fontWeight:'bold', fontSize:15}}>Elbow & Shoulders</Text>
          <Text style={{color:'#D3D3D3',fontSize:10 }}>12 diseases</Text>
        </View>
        <View style={{padding:20, backgroundColor:'#327389', borderRadius:10, marginTop:10}}>
          <Text style={{color:'white', fontWeight:'bold', fontSize:15}}>Hand & Arm</Text>
          <Text style={{color:'#D3D3D3',fontSize:10 }}>2 diseases</Text>
        </View>

        

      </View>

    </>

  );

};

 

export default App;