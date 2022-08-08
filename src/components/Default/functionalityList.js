/* eslint-disable react-native/no-inline-styles */
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import {isTablet} from 'react-native-device-info';
import theme from '../../assets/theme';
import {heightToPixel as hp, widthToPixel as wp} from '../../utils/responsive';

const FunctionalityList = ({listItem, label, componentkey}) => {
  const [reload, setReload] = useState(false);
  const [data, setData] = useState(listItem || []);

  useEffect(() => {
    AsyncStorage.getItem(`${componentkey}`)
      .then(e => {
        if (e) {
          setData(JSON.parse(e));
        }
      })
      .catch(err => console.log('@@@@@ error', err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const moveUp = index => {
    const duplicateArray = data;
    duplicateArray.splice(index - 1, 0, duplicateArray.splice(index, 1)[0]);
    setData(duplicateArray);
    saveData(duplicateArray);
    setReload(!reload);
  };

  const moveDown = index => {
    const duplicateArray = data;
    duplicateArray.splice(index, 0, duplicateArray.splice(index + 1, 1)[0]);
    setData(duplicateArray);
    saveData(duplicateArray);
    setReload(!reload);
  };

  const toggleSetting = index => {
    let duplicateArray = data;
    duplicateArray[index].status = !duplicateArray[index].status;
    setData(duplicateArray);
    saveData(duplicateArray);
    setReload(!reload);
  };

  const saveData = async updateData => {
    await AsyncStorage.setItem(`${componentkey}`, JSON.stringify(updateData));
  };

  const RenderItem = ({item, index}) => {
    return (
      <View style={styles.itemContainer}>
        <TouchableOpacity
          onPress={() => toggleSetting(index)}
          style={styles.toggleIconContainer}>
          {!!item?.status && <View style={styles.toggleObject} />}
        </TouchableOpacity>
        <Text
          onPress={() => toggleSetting(index)}
          style={styles.itemTitle}>{`${item?.title}`}</Text>
        <View style={styles.itemSubContainer}>
          {index !== 0 && (
            <TouchableOpacity onPress={() => moveUp(index)}>
              <Text style={{color: 'green', fontSize: theme.fontSize.s}}>
                Up
              </Text>
            </TouchableOpacity>
          )}
          {index !== data.length - 1 && (
            <TouchableOpacity
              style={{marginLeft: 'auto'}}
              onPress={() => moveDown(index)}>
              <Text
                style={{color: theme.primaryColor, fontSize: theme.fontSize.s}}>
                Down
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  };
  return (
    <View
      style={[
        {width: '100%', marginTop: hp(2)},
        isTablet() && {maxWidth: '40%', flexGrow: 1},
      ]}>
      <Text style={styles.componentTitle}>{label}</Text>
      <FlatList
        data={data}
        extraData={reload}
        keyExtractor={item => item.id}
        renderItem={RenderItem}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  componentTitle: {
    fontSize: theme.fontSize.l,
    color: '#000',
    marginBottom: hp(2),
  },
  itemTitle: {
    flex: 1,
    flexWrap: 'wrap',
    fontSize: theme.fontSize.s,
    marginLeft: wp(1),
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#EFEFEF',
    borderBottomWidth: 2,
    paddingVertical: hp(2),
  },
  itemSubContainer: {
    flexDirection: 'row',
    width: '40%',
  },
  toggleIconContainer: {
    borderWidth: 2,
    borderColor: theme.text.secondaryColor,
    width: hp(2),
    height: hp(2),
    justifyContent: 'center',
    alignItems: 'center',
  },
  toggleObject: {
    width: hp(1),
    height: hp(1),
    backgroundColor: theme.text.secondaryColor,
  },
});
export default FunctionalityList;
