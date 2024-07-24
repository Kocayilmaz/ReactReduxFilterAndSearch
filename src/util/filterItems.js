import { fetchCardItems } from "./fetchCardItems";

export const filterItems = (term, cb) => {
  fetchCardItems()
    .then((res) => {
      const filteredItems = res.data.filter(
        (item) =>
          item.title.toLowerCase().includes(term.toLowerCase()) ||
          item.tags.some((tag) =>
            tag.toLowerCase().includes(term.toLowerCase())
          )
      );
      cb(filteredItems);
    })
    .catch((err) => {
      console.error(err.message);
      cb([]);
    });
};
