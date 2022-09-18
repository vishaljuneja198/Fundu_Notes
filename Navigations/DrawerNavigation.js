import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import RemindersScreen from '../Screens/RemindersScreen';
import LabelScreen from '../Screens/LabelScreen';
import DeletedScreen from '../Screens/DeletedScreen';
import SettingsScreen from '../Screens/SettingsScreen';
import ArchiveScreen from '../Screens/ArchiveScreen';
import HomeScreen from '../Screens/HomeScreen';
import MainScreen from '../Screens/MainScreen';
import DrawerContent from  '../Components/DrawerContent'
const Drawer = createDrawerNavigator();
const DrawerNavigation = () => {
  return (
    <Drawer.Navigator initialRouteName="Home" drawerContent={props => <DrawerContent props={props} />}>
      <Drawer.Screen name="Home" component={HomeScreen} options={{ header: () => null }} />
      <Drawer.Screen name="Reminders" component={RemindersScreen} options={{ header: () => null }} />
      <Drawer.Screen name="Label" component={LabelScreen} options={{ header: () => null }} />
      <Drawer.Screen name="Archive" component={ArchiveScreen} options={{ header: () => null }} />
      <Drawer.Screen name="Deleted" component={DeletedScreen} options={{ header: () => null }} />
      <Drawer.Screen name="Settings" component={SettingsScreen} options={{ header: () => null }}/>
      
    </Drawer.Navigator>
  );
}

export default DrawerNavigation;