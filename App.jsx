import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import {Navigation} from './navigation/Navigation';
import {ContactsProvider } from './contexts/ContactsContext';


export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <ContactsProvider>
        <SafeAreaProvider>
        {/* <Navigation colorScheme={colorScheme} /> */}
          <Navigation />
          <StatusBar />
        </SafeAreaProvider>
      </ContactsProvider>
    );
  }
}
