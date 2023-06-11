import {View, Text} from 'react-native';
import React from 'react';
import {styles} from '../../constants/styles';
import LinearGradient from 'react-native-linear-gradient';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import {Divider} from 'react-native-paper';

const AlauneSkeleton = () => {
  const numberOfItems = 3; // Change this to the desired number of items

  const newsItems = [];
  for (let i = 0; i < numberOfItems; i++) {
    newsItems.push(
      <View key={i}>
        <View style={[styles.newsList2, {alignItems: 'center'}]}>
          <ShimmerPlaceHolder
            LinearGradient={LinearGradient}
            style={[styles.newsListImg2, {height: '100%', marginRight: 10}]}
          />
          <View style={styles.newsListDet2}>
            <ShimmerPlaceHolder
              LinearGradient={LinearGradient}
              style={{width: '90%', height: 30}}
            />
            <View style={styles.newsListDetExtra}>
              <View style={styles.newsListDetExtraLeft}>
                <ShimmerPlaceHolder
                  LinearGradient={LinearGradient}
                  style={{width: '60%'}}
                />
              </View>
            </View>
          </View>
        </View>
        <Divider />
      </View>,
    );
  }

  return (
    <View>
      <View style={styles.featured}>
        <ShimmerPlaceHolder
          LinearGradient={LinearGradient}
          style={[styles.featuredImg]}
        />
        <View style={[styles.featuredText, {padding:10}]}>
          <ShimmerPlaceHolder
            LinearGradient={LinearGradient}
            style={{width: '100%', height: 100}}
          />
        </View>
      </View>
      <View>{newsItems}</View>
    </View>
  );
};

export default AlauneSkeleton;
