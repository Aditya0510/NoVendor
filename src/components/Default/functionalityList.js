/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import {isTablet} from 'react-native-device-info';
import {useDispatch, useSelector} from 'react-redux';
import theme from '../../assets/theme';
import {userSetting} from '../../redux/reducers/user/user.actions';
import {heightToPixel as hp, widthToPixel as wp} from '../../utils/responsive';

const FunctionalityList = ({label, componentkey}) => {
  const dispatch = useDispatch();
  const data = useSelector(state => state?.user[componentkey]);

  const moveUp = index => {
    let duplicateArray = [...data];
    duplicateArray.splice(index - 1, 0, duplicateArray.splice(index, 1)[0]);
    saveData(duplicateArray);
  };

  const moveDown = index => {
    let duplicateArray = [...data];
    duplicateArray.splice(index, 0, duplicateArray.splice(index + 1, 1)[0]);
    saveData(duplicateArray);
  };

  const toggleSetting = rIndex => {
    const duplicateArray = data.map((obj, index) => {
      if (index === rIndex) {
        return {...obj, status: !obj.status};
      }
      return obj;
    });
    saveData(duplicateArray);
  };

  const saveData = updateData => {
    dispatch(userSetting(componentkey, updateData));
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
