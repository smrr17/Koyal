import {
  View,
  Text,
  useWindowDimensions,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useCallback, useRef, useState} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../Components/Header';
import {useFocusEffect} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {DashboardMiddleware} from '../Store/Middlewares/DashboardMiddleware';
import Carousel from 'react-native-snap-carousel';
import MyCarousel from '../Components/Slider';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import {
  FlatList,
  GestureHandlerRootView,
  ScrollView,
} from 'react-native-gesture-handler';
import HitSongs from '../Components/HitSongs';
import SectionCards from '../Components/SectionCards';

const Home = () => {
  const data = useSelector(state => state.DashboardReducer.homeData);
  const [loader, setLoader] = useState(true);
  const [activePage, setActivePage] = useState(1);
  const [limit, setLimit] = useState(5);
  console.log('data-->', JSON.stringify(data, null, 2));

  const handleScroll = event => {
    const {layoutMeasurement, contentOffset, contentSize} = event.nativeEvent;
    const isScrolledToEnd =
      layoutMeasurement.height + contentOffset.y >= contentSize.height - 30;

    if (isScrolledToEnd) {
      setActivePage(activePage + 1);
      setLoader(true);
    }
  };
  const dispatch = useDispatch();
  useFocusEffect(
    useCallback(() => {
      dispatch(DashboardMiddleware.getHomeData(activePage, limit)).then(res => {
        if (res) {
          setLoader(false);
        }
      });
    }, [activePage]),
  );
  const {width} = useWindowDimensions();

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#000000',
        }}>
        <Header />
        <View
          style={{
            flex: 1,
            marginTop: 10,
            paddingHorizontal: 10,
          }}>
          <ScrollView
            onScroll={handleScroll}
            scrollEventThrottle={16} 
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{flexGrow: 1, paddingBottom: 50}}>
            <MyCarousel data={data?.slider || []} />
            <View style={{height: 440, marginTop: 40}}>
              {data?.trending?.length > 0 && (
                <View
                  style={{
                    paddingHorizontal: 20,
                  }}>
                  <Text style={{color: 'white', fontSize: 16}}>Top Songs</Text>
                  <View
                    style={{
                      marginTop: 10,
                      flexDirection: 'row',
                      alignItems: 'center',
                      height: 150,
                      width: '100%',
                    }}>
                    <View style={{width: '50%'}}>
                      <Image
                        source={{
                          uri: data?.trending[0]?.image,
                        }}
                        style={{
                          width: '100%',
                          height: '100%',
                          borderRadius: 10,
                        }}
                      />
                    </View>
                    <View
                      style={{
                        flex: 1,
                        padding: 15,
                        gap: 10,
                      }}>
                      <Text>Top 10 Hits</Text>
                      <Text>Trending Music</Text>
                      <TouchableOpacity>
                        <AntDesign name="play" size={30} color="#C04a84" />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              )}
              <HitSongs data={data?.trending || []} />
            </View>
            <View
              style={{
                marginTop: 20,
                height: 320,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <Text style={{fontSize: 18, color: 'white', fontWeight: '500'}}>
                  Koyal Shorts
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    color: '#ffffff95',
                    fontWeight: '500',
                  }}>
                  See More
                </Text>
              </View>
              <FlatList
                style={{marginTop: 20}}
                horizontal
                data={data?.shorts || []}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => {
                  return (
                    <View
                      style={{
                        height: 200,
                        width: 130,
                        marginRight: 15,
                        marginBottom: 10,
                      }}>
                      <Image
                        source={{uri: item.thumbnail}}
                        style={{width: '100%', height: '100%'}}
                      />
                      <Text
                        style={{
                          marginTop: 10,
                          color: 'white',
                        }}>
                        {item.name}
                      </Text>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          gap: 5,
                        }}>
                        <Entypo name="eye" size={10} color="white" />
                        <Text style={{fontSize: 12}}>{item.no_of_views}</Text>
                      </View>
                    </View>
                  );
                }}
              />
            </View>
            <FlatList
              data={data?.sections || []}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item}) => {
                return <SectionCards data={item} />;
              }}
            />
            {loader && (
              <ActivityIndicator
                size="large"
                color="#ffffff"
                // style={{marginTop: 20}}
              />
            )}
          </ScrollView>
        </View>
      </View>
    </GestureHandlerRootView>
  );
};

export default Home;
