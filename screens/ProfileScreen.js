import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { auth, db } from "../firebase"
import { collection, getDocs, doc, setDoc } from 'firebase/firestore/lite';
import MapScreen from './MapScreen';

const Profile = () => {
    const navigation = useNavigation()

    const GetData = async () => {
        const citiesCol = collection(db, 'cities');
        const citySnapshot = await getDocs(citiesCol);
        const cityList = citySnapshot.docs.map(doc => doc.data());
        console.log(cityList);
    };

    const SetData = async () => {
        const city = "Paris";
        await setDoc(doc(db, "cities", auth.currentUser.uid), {
            city_name: city,
        });
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => {
                    navigation.goBack();
                  }}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Go back</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={GetData}
                style={styles.button}
            >
                <Text style={styles.buttonText}>GET DATA FROM FIREBASE</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={SetData}
                style={styles.button}
            >
                <Text style={styles.buttonText}>SEND DATA TO FIREBASE</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => {
                    navigation.navigate("Map");
                  }}
                style={styles.button}
            >
                <Text style={styles.buttonText}>VIEW MAP</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        backgroundColor: '#0782F9',
        width: '60%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 40,
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
});
