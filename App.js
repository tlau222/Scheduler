import 'react-native-gesture-handler';
import { Button } from 'react-native';
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ScheduleScreen from './screens/ScheduleScreen';
import CourseDetailScreen from './screens/CourseDetailScreen';
import CourseEditScreen from './screens/CourseEditScreen';
import RegisterScreen from './screens/RegisterScreen';
import UserContext from './utils/UserContext';
import { firebase } from './utils/firebase';

const Stack = createStackNavigator();

const App = () => {
  const [user, setUser] = useState(null);
  const [auth, setAuth] = useState();

  const SignInButton = ({ navigation, user }) => (
    user && user.uid
    ? <Button title="Logout" color="#448aff"
        onPress={() => firebase.auth().signOut()}
      />
    : <Button title="SignIn" color="#448aff"
        onPress={() => navigation.navigate('RegisterScreen')}
      />
  );

  useEffect(() => {
    if (auth && auth.uid) {
      const db = firebase.database().ref('users').child(auth.uid);
      const handleData = snap => {
        setUser({uid: auth.uid, ...snap.val()});
      }
      db.on('value', handleData, error => alert(error));
      return () => { db.off('value', handleData); };
    } else {
      setUser(null);
    }
  }, [auth]);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((auth) => {
      setAuth(auth);
    });
  }, []);

  return (
    <UserContext.Provider value={user}>
      <NavigationContainer>
        <Stack.Navigator> 
          <Stack.Screen name="ScheduleScreen"
            component={ScheduleScreen}
            options={({navigation}) => ({ 
              title: "Schedule",
              headerRight: () => (
                  <SignInButton navigation={navigation} user={user} />
                ),
              })
            }
          />
          <Stack.Screen name="CourseDetailScreen"
            component={CourseDetailScreen}
            options={{ title: 'Course detail'}} 
          />
          <Stack.Screen name="CourseEditScreen"
            component={CourseEditScreen}
            options={{ title: 'Course Editor'}} 
          />
          <Stack.Screen name="RegisterScreen" 
            component={RegisterScreen} 
            options={({ navigation }) => ({
              title: "Sign In",
              headerRight: () => (
                <SignInButton navigation={navigation} />
              ),
            })
            }
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UserContext.Provider>
  );
};

export default App;