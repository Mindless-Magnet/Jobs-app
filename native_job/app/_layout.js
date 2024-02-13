import { Stack } from 'expo-router';
import { useEffect } from 'react';
import {useFonts} from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const Layout = () => {

    const [fontsLoaded] = useFonts({
        DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
        DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
        DMRegular: require('../assets/fonts/DMSans-Regular.ttf')
    });

        useEffect(() => {
    async function hideSplash() {
        if (fontsLoaded) {
        await SplashScreen.hideAsync();
        }
    }
    hideSplash();
    }, [fontsLoaded]);


    if(!fontsLoaded) {
        return null;
    }

    return (
    <Stack />
    );
}

export default Layout;