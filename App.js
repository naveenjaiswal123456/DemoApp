import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './src/routes/AuthStack';


const App = () => {
  return (
    <NavigationContainer>
      <AuthStack/>
    </NavigationContainer>
  )
}

export default App;
