import { StatusBar } from 'expo-status-bar';
import { Switch, Text, View, SafeAreaView } from 'react-native';
import { useColorScheme } from 'nativewind';
import ProductsList from './components/ProductsList';

export default function App() {

  const { ColorScheme, toggleColorScheme } = useColorScheme();


  return (
    <SafeAreaView
      className="flex-1 items-center justify-center bg-gray-200 dark:bg-black">



      <View className="flex-row w-full gap-5 justify-center">

        <Text className="dark:text-white text-2xl font-bold ">New Collection</Text>
        <Switch
          value={ColorScheme === "dark"}
          onChange={toggleColorScheme} />

      </View>
      <ProductsList />
      <StatusBar style={ColorScheme === "dark" ? "light" : "dark"} />
    </SafeAreaView>



  );
}

