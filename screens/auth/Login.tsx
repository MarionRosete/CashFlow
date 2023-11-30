import {View, Text, StyleSheet} from 'react-native';
import TextInputComponent from '../../component/elements/TextInput';

const Login: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInputComponent
          label={'Username'}
          placeholder="Marion123"
          onChange={e => e}
          password={false}
          error={false}
          helper=""
        />
        <TextInputComponent
          label="Password"
          placeholder="********"
          onChange={e => e}
          password={true}
          error={false}
          helper=""
        />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    width: '50%',
    rowGap: 25,
  },
});
