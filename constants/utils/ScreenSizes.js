import {useWindowDimensions} from 'react-native';

const ScreenSizes = () => {
  const {height, width} = useWindowDimensions();
  return {height, width};
};

export default ScreenSizes;
