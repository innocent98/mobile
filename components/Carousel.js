import {View, Text} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {actualites} from '../constants/dummy';

const CarouselSlide = ({sliderWidth, itemWidth, itemHeight, sliderHeight}) => {
//   const renderItem = ({item}) => {
//     return (
//       <View style={styles.shadowCon}>
//         <View style={styles.actualitesTop}>
//           <View style={styles.actualitesTxtCon}>
//             <Text style={styles.actualitesTxt}>{item.date}</Text>
//             <Text style={styles.actualitesSpan}>{item.text}</Text>
//           </View>
//           <Icon
//             name="bookmark-border"
//             size={26}
//             color={COLORS.light.background}
//           />
//         </View>
//         <View style={styles.actualitesAuthor}>
//           <FastImage
//             style={styles.profileImg}
//             source={{
//               uri: item.pp,
//               headers: {Authorization: 'someAuthToken'},
//               priority: FastImage.priority.normal,
//             }}
//             resizeMode={FastImage.resizeMode.cover}
//           />
//           <View style={styles.profileDet}>
//             <Text style={styles.actualitesTxt}>{item.author}</Text>
//             <Text style={styles.actualitesTxt}>{item.duration}</Text>
//           </View>
//         </View>
//       </View>
//     );
//   };

  return (
    <Carousel
      data={actualites}
      renderItem={renderItem}
      sliderWidth={sliderWidth}
      itemWidth={itemWidth}
      itemHeight={itemHeight}
      sliderHeight={sliderHeight}
    />
  );
};

export default CarouselSlide;
