import React from "react";
import { View, Text } from "react-native";
import { Rating, AirbnbRating } from 'react-native-ratings';

const Rating_Page = () => {
    return (
        <View>
            <View >
                <Rating
                    fractions={1.5}
                    type='custom'
                    ratingCount={5}
                    imageSize={25}
                    showRating
                    style={{ backgroundColor: "white" }}
                    tintColor="red"
                    ratingTextColor="red"
                    ratingColor="black"
                    ratingBackgroundColor="white"
                    startingValue={4.3}
                />
            </View>
        </View>


    )
}

export default Rating_Page