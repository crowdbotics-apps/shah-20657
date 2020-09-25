import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Tutorial4109145Navigator from '../features/Tutorial4109145/navigator';
import CalendarView6109143Navigator from '../features/CalendarView6109143/navigator';
import BlankScreen1109123Navigator from '../features/BlankScreen1109123/navigator';
import Settings109108Navigator from '../features/Settings109108/navigator';
import Settings109089Navigator from '../features/Settings109089/navigator';
import BlankScreen0109083Navigator from '../features/BlankScreen0109083/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Tutorial4109145: { screen: Tutorial4109145Navigator },
CalendarView6109143: { screen: CalendarView6109143Navigator },
BlankScreen1109123: { screen: BlankScreen1109123Navigator },
Settings109108: { screen: Settings109108Navigator },
Settings109089: { screen: Settings109089Navigator },
BlankScreen0109083: { screen: BlankScreen0109083Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
