import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import colors from '../utils/colors'
import { vh, vw } from '../utils/dimensions'
import { useDispatch } from 'react-redux'
import { validateUser } from '../action'
import screenNames from '../utils/screenNames'

interface Props {
    navigation: any;
    route: any
}

export default function ValidateScreen(props: Props) {

    const dispatch: any = useDispatch()

    const [mKey, setMKey] = useState<string>('')

    const onChangeText = (text: string) => setMKey(text)

    const onPressSubmit = () => dispatch(validateUser({ mKey }, (data: any) => props?.navigation?.navigate(screenNames?.LOGIN_SCREEN)))

    return (
        <SafeAreaView style={styles?.container}>
            <TextInput onChangeText={onChangeText} placeholder='Enter Key' style={styles?.input} />
            <TouchableOpacity style={styles?.btn} onPress={onPressSubmit}>
                <Text style={styles?.btnText}>Submit</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors?.WHITE,
        paddingHorizontal: vw(20),
        paddingTop: vh(40)
    },
    input: {
        borderWidth: vw(1),
        borderRadius: vw(10),
        paddingHorizontal: vw(10)
    },
    btn: {
        backgroundColor: colors?.BLACK,
        borderRadius: vw(10),
        marginTop: vh(20),
        width: '100%',
        paddingVertical: vh(10),
        alignItems: 'center'
    },
    btnText: {
        color: colors?.WHITE,
        textTransform: 'uppercase',
        fontWeight: 'bold',
    }
})