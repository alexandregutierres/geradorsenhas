import React, { useState } from 'react';
import { Pressable, Text } from 'react-native';

import { styles } from './BatButtonStyles';
import { BatTextInput } from '../BatTextInput/BatTextInput';
import generatePassword from '../../services/passwordService';

import * as Clipboard from 'expo-clipboard'

export function BatButton() {
    const [pass, setPass] = useState('')

    function handleGenerateButton() {
        let generateToken = generatePassword()
        setPass(generateToken)
    }

    function handleCopyButton() { 
        Clipboard.setStringAsync(pass)
    }

    return (
        <>                
            <BatTextInput password={pass}/>
            <Pressable style={styles.button}
                onPress={handleGenerateButton}>
                <Text style={styles.text}>GERAR</Text>
            </Pressable>
            <Pressable style={styles.button}
                onPress={handleCopyButton}>
                <Text style={styles.text}>COPIAR</Text>
            </Pressable>
        </>
    );
}