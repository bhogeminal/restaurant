import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screen/Home';
import Menudetails from './screen/Menudetails';
const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name="Menudetails" component={Menudetails} options={({ route }) => ({
            title:route.params.menuitem.menuname
        })}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App