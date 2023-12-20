import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import screenNames from '../utils/screenNames';
import ValidateScreen from '../modules/ValidateScreen';
import AttendanceDetailScreen from '../modules/AttendanceDetailScreen';
import AttendanceReportScreen from '../modules/AttendanceReportScreen';
import LoginScreen from '../modules/LoginScreen';
import { useSelector } from 'react-redux';
import common from '../utils/common';

const Stack = createNativeStackNavigator();

export default function Router() {

    const { isLoggedIn, token, eKey } = useSelector((state: any) => state?.authReducer)

    useEffect(() => {
        if (token & eKey) {
            common?.setAuthorizationToken(token)
            common?.setEkey(eKey)
        }
    }, [])


    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {
                    isLoggedIn ?
                        <>
                            <Stack.Screen name={screenNames?.ATTENDANCE_DETAIL_SCREEN} component={AttendanceDetailScreen} />
                            <Stack.Screen name={screenNames?.ATTENDANCE_REPORT_SCREEN} component={AttendanceReportScreen} />
                        </> :
                        <>
                            <Stack.Screen name={screenNames?.VALIDATE_SCREEN} component={ValidateScreen} />
                            <Stack.Screen name={screenNames?.LOGIN_SCREEN} component={LoginScreen} />
                        </>
                }
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({})