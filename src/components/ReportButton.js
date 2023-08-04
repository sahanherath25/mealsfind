
import React, { useState } from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {MaterialIcons} from "@expo/vector-icons";
import colors from "../constants/colors";

const ReportButton = () => {
    const [report, setReport] = useState(false);

    const handleLike = () => {
        setReport(!report);
    };

    return (
        <TouchableOpacity onPress={handleLike}>
            <View style={styles.container}>
                <MaterialIcons name={!report ?'report' : 'report-off'} size={24} color={colors.report} />
                {/*<Icon name={liked ? 'heart' : 'heart-o'} style={styles.icon} />*/}
                <Text style={styles.label}>{!report ? 'Report':''}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        padding: 10,
        borderRadius: 5,
    },
    icon: {
        fontSize: 20,
        color:colors.report,
        marginRight: 10,
    },
    label: {
        fontSize: 16,
        color: '#333',
    },
});

export default ReportButton;
