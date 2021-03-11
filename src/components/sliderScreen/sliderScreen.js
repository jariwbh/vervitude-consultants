import React from 'react'
import { Dimensions } from 'react-native'
import { SliderBox } from 'react-native-image-slider-box';

const { height, width } = Dimensions.get('window');

export default function sliderScreen() {
    const images = [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm_mx0EvyRIh06PAlNfe4vFqKH5135P99GZw&usqp=CAU',
        'https://spin-caps.com/wp-content/uploads/2018/09/car-service-key-features-A-1920x1080_tcm-3154-1323224.jpg',
        'https://pictures.dealer.com/u/universalcitynissanatadgcompany/1832/9ba83c80d165a23e0dd87d858752e4b7x.jpg?impolicy=downsize&w=568',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGVnUl7MFFwUwVp7YEqN-RlHcd3HAwalJvAQ&usqp=CAU'
    ]
    return (
        <SliderBox
            images={images}
            sliderBoxHeight={200}
            inactiveDotColor="#90A4AE"
            paginationBoxVerticalPadding={0}
            autoplay
            circleLoop
            ImageComponentStyle={{ borderRadius: 6, width: width - 100 }}
        />
    )
}