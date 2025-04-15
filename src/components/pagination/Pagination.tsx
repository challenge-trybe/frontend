import {StyleSheet, View} from 'react-native';
import React from 'react';
import PaginationItem from './PaginationItem';
import PaginationArrow from './PaginationArrow';

type Props = {
  page: number;
  setPage: (page: number) => void;
  totalPages: number;
  maxVisiblePages?: number;
};

const Pagination = ({
  page,
  setPage,
  totalPages,
  maxVisiblePages = 9,
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
    setPage(target - 1);
  };

  const goNext = () => {
    const target = Math.min(totalPages, currentPage + half);
    setPage(target - 1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.arrow}>
        {currentPage > 1 && (
          <PaginationArrow direction="left" onPress={goPrev} />
        )}
      </View>
      <View style={styles.itemContainer}>
        {pages.map((item, index) => (
          <PaginationItem
            key={index}
            page={item}
            selected={item === currentPage}
            onPress={() => setPage(item - 1)}
          />
        ))}
      </View>
      <View style={styles.arrow}>
        {currentPage < totalPages && (
          <PaginationArrow direction="right" onPress={goNext} />
        )}
      </View>
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
  },
  arrow: {
    width: 20,
    height: 20,
  },
});
