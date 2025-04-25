import {
  Dimensions,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {ChallengeSummary} from '../../types/challenge';
import ChallengeCard from './ChallengeCard';
import Icon from '../Icon';
import colors from '../../styles/colors';
import AddChallengeCard from './AddChallengeCard';

type Props = {
  challenges: ChallengeSummary[];
  onPress?: (challengeId: number) => void;
  onPressGoTo?: (challengeId: number) => void;
  onAddPress?: () => void;
};

const ChallengeCardSlider = ({
  challenges,
  onPress,
  onPressGoTo,
  onAddPress,
}: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const handleScroll = (event: any) => {
    const index = Math.round(
      event.nativeEvent.contentOffset.x /
        event.nativeEvent.layoutMeasurement.width,
    );
    setActiveIndex(index);
  };

  const handleIndicatorPress = (index: number) => {
    flatListRef.current?.scrollToIndex({index, animated: true});
  };

  const extendedChallenges = onAddPress
    ? [...challenges, {id: -1}]
    : challenges;

  return (
    <View>
      <FlatList
        ref={flatListRef}
        data={extendedChallenges}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
        onMomentumScrollEnd={handleScroll}
        renderItem={({item}) => (
          <View style={styles.cardWrapper}>
            {item.id === -1 ? (
              <AddChallengeCard onPress={onAddPress} />
            ) : (
              <ChallengeCard
                challenge={item}
                onPress={onPress ? () => onPress(item.id) : undefined}
                onPressGoTo={
                  onPressGoTo ? () => onPressGoTo(item.id) : undefined
                }
              />
            )}
          </View>
        )}
      />
      <View style={styles.indicatorContainer}>
        {extendedChallenges.map((_, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleIndicatorPress(index)}>
            <Icon
              name="ellipse"
              size={12}
              color={index === activeIndex ? colors.red500 : colors.gray300}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default ChallengeCardSlider;

const {width: SCREEN_WIDTH} = Dimensions.get('window');

const styles = StyleSheet.create({
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
    gap: 6,
  },
  cardWrapper: {
    width: SCREEN_WIDTH,
    paddingHorizontal: 16,
  },
});
