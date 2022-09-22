import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import RemindersScreen from '../screens/Reminders';
import LabelScreen from '../screens/Label';
import DeletedScreen from '../screens/Trash';
import SettingsScreen from '../screens/Settings';
import ArchiveScreen from '../screens/Archive';
import HomeScreen from '../screens/HomeScreen';
import DrawerContent from  '../components/DrawerContent'
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