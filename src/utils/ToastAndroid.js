import { ToastAndroid } from 'react-native'


export default showToast = (message) => {

    ToastAndroid.showWithGravity(
        message,
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );
}


