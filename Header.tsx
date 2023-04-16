import React from 'react';
import { Text, TextStyle, View } from 'react-native';

type HeaderProps = {
  children: string;
  isTop: boolean;
  textStyle?: TextStyle;
};

const Header: React.FC<HeaderProps> = ({ children, isTop, textStyle }) => {
  const headerStyle: TextStyle = {
    fontWeight: isTop ? 'bold' : 'normal',
    fontSize: isTop ? 20 : 18,
    marginBottom: 10,
    ...textStyle,
  };

  return (
    <View>
      <Text style={headerStyle}>{children}</Text>
    </View>
  );
};

export default Header;
