import React from "react";
import { View} from "react-native";
import { StatusBar } from 'expo-status-bar';
import { BatLogo } from "../../components/BatLogo/BatLogo";
import styles from "./HomeStyles"
import { BatButton } from "../../components/BatButton/BatButton";

export default function Home() {
    return(
        <View style={styles.appContainer}>
            <View style={styles.logoContainer}>
                <BatLogo/>
            </View>

            <View style={styles.inputContainer}>
                <BatButton/>
            </View>
            <StatusBar style="inverted" />
        </View>
    )
}

