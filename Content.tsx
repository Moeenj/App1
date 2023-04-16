import React from 'react';
import { Text, TextStyle, View } from 'react-native';

const newFont: TextStyle = {
  fontFamily: 'VarelaRound-Regular',
};

type ContentObject = {
  text: string;
  textStyle?: TextStyle;
  numberOfLines?: number;
  ellipsizeMode?: 'head' | 'middle' | 'tail' | 'clip';
  userSelect?: 'auto' | 'none' | 'text' | 'contain';
  selectable?: boolean;
  selectionColor?: string;
};

type ContentProps = {
  contentArray: ContentObject[];
};

const Content: React.FC<ContentProps> = ({ contentArray }) => {
  return (
    <View>
      {contentArray.map((content, index) => (
        <Text
          key={index}
          style={[newFont, content.textStyle]}
          numberOfLines={content.numberOfLines}
          ellipsizeMode={content.ellipsizeMode}
          userSelect={content.userSelect}
          selectable={content.selectable}
          selectionColor={content.selectionColor}
        >
          {content.text}
        </Text>
      ))}
    </View>
  );
};

export default Content;
