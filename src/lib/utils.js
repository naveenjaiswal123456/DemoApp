import { PermissionsAndroid, Platform } from "react-native";
import { checkMultiple, PERMISSIONS, requestMultiple } from 'react-native-permissions';

const requestStoragePermission = async () => {
  if (Platform.OS == "android") {
    try {
      const permissions = await PermissionsAndroid.requestMultiple([PermissionsAndroid.PERMISSIONS.CAMERA, PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE, PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE]);
      if (permissions[PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE] === PermissionsAndroid.RESULTS.GRANTED && permissions[PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE] === PermissionsAndroid.RESULTS.GRANTED) {
        return true;
      } else {
        return false;
      }
    } catch (err) {
      console.warn("Permission error : ", err);
      return false;
    }
  } else {
    try {
      checkMultiple([PERMISSIONS.IOS.CAMERA, PERMISSIONS.IOS.LOCATION_WHEN_IN_USE, PERMISSIONS.IOS.PHOTO_LIBRARY]).then((statuses) => {
        console.log('Camera', statuses[PERMISSIONS.IOS.CAMERA]);
        console.log('Location', statuses[PERMISSIONS.IOS.LOCATION_WHEN_IN_USE]);
        console.log('Photo', statuses[PERMISSIONS.IOS.PHOTO_LIBRARY]);
      })
      requestMultiple([PERMISSIONS.IOS.CAMERA, PERMISSIONS.IOS.LOCATION_WHEN_IN_USE, PERMISSIONS.IOS.PHOTO_LIBRARY]).then((statuses) => {
        console.log('Camera', statuses[PERMISSIONS.IOS.CAMERA]);
        console.log('Location', statuses[PERMISSIONS.IOS.LOCATION_WHEN_IN_USE]);
        console.log('Photo', statuses[PERMISSIONS.IOS.PHOTO_LIBRARY]);
      })
    } catch (err) {
      console.warn("Permission error : ", err);
      return false;
    }
    return true
  }
}

export {
  requestStoragePermission,
};
