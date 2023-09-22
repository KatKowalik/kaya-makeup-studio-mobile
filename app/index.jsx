import { View, Text, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";
import styles from "../styles/styles";

const Home = () => {
    const router = useRouter();

    return (
    <SafeAreaView>
        <View style={{backgroundColor: '#3B3742'}}>
            <View style={styles.div}>
                <Text style={{
                    paddingBlock: '1rem',
                    textAlign: 'center',
                    color: 'white',
                }}>My First React Native App! Yay!</Text>
            </View>
        </View>
    </SafeAreaView>
)
};

export default Home;