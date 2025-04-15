import {StyleSheet, View} from 'react-native';
import React from 'react';
import PaginationItem from './PaginationItem';
import PaginationArrow from './PaginationArrow';

type Props = {
  page: number;
  totalPages: number;
  onPress: (page: number) => void;
  maxVisiblePages?: number;
};

const Pagination = ({
  page,
  totalPages,
  onPress,
  maxVisiblePages = 7,
}: Props) => {
  const currentPage = page + 1;
  const half = Math.floor(maxVisiblePages / 2);

  let startPage = Math.max(1, currentPage - half);
  let endPage = startPage + maxVisiblePages - 1;

  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(1, endPage - maxVisiblePages + 1);
  }

  const pages = [];

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  const goPrev = () => {
    const target = Math.max(1, currentPage - half);
    onPress(target - 1);
  };

  const goNext = () => {
    const target = Math.min(totalPages, currentPage + half);
    onPress(target - 1);
  };

  return (
    <View style={styles.container}>
      {currentPage > 1 && <PaginationArrow direction="left" onPress={goPrev} />}
      <View style={styles.itemContainer}>
        {pages.map((item, index) => (
          <PaginationItem
            key={index}
            page={item}
            selected={item === currentPage}
            onPress={() => onPress(item - 1)}
          />
        ))}
      </View>
      {currentPage < totalPages && (
        <PaginationArrow direction="right" onPress={goNext} />
      )}
    </View>
  );
};

export default Pagination;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    marginVertical: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 2,
  },
});
