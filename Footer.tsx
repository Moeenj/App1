import React from 'react';
import { Text, TextStyle, View } from 'react-native';

type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  const footerStyle: TextStyle = {
    fontStyle: 'italic',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  };

  return (
    <View>
      <Text
        numberOfLines={1}
        ellipsizeMode="clip"
        userSelect="auto"
        selectable={true}
        selectionColor="green"
        style={footerStyle}
      >
        This is a Footer, it has italic, bold and underline text inside
      </Text>
    </View>
  );
};

export default Footer;
