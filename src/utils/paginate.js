import _ from "lodash";

export const paginate = (movies, currentPage, perPage) => {
  const startIndex = (currentPage - 1) * perPage;
    return _(movies).slice(startIndex).take(perPage).value();
};
