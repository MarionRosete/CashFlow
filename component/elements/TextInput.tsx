import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

interface Props {
  label: string;
  placeholder: string;
  password: boolean;
  error: boolean;
  helper: string;
  onChange: (text: string) => string;
}

const TextInputComponent: React.FC<Props> = ({
  label,
  onChange,
  password,
  placeholder,
  error,
  helper,
}) => {
  return (
    <View style={styles.constainer}>
      {label ? (
        <Text style={{marginBottom: 8, fontSize: 18}}>{label}</Text>
      ) : null}
      <TextInput
        placeholder={placeholder}
        onChangeText={onChange}
        style={{...styles.input, borderColor: error ? 'red' : 'gray'}}
        secureTextEntry={password}
      />
      {helper ? (
        <Text style={{marginTop: 2, fontSize: 12}}>{helper}</Text>
      ) : null}
    </View>
  );
};

export default TextInputComponent;

const styles = StyleSheet.create({
  constainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent:'flex-start'
  },
  input: {
    borderColor: 'gray',
    width: '100%',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
});
