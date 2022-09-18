import React, {useRef} from 'react';
import {TextInput} from 'react-native';

const Notes = (props)=> {
  
  return (
    <>
      <TextInput
        value={props.title}
        style={{fontSize: 24}}
        placeholder="Title"
        returnKeyType="next"
        onSubmitEditing={() => { }}
        blurOnSubmit={false}
        onChangeText={title => {
          props.setTitle(title);
        }}
      />

      <TextInput
        value={props.notep}
        style={{fontSize: 20}}
        placeholder="Note"   
        multiline={true}
        onChangeText={note => {
          props.setNote(note);
        }}
      />
    </>
  );
};

export default Notes;

