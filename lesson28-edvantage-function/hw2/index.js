const favorites = ['id-2'];

const tree = {
  id: 'id-1',
  name: 'Products',
  nodes: [
    {
      id: 'id-2',
      name: 'Food',
      nodes: [],
    },
  ],
};

// in: obj-tree, id(string)
// out: obj + propertys(isFavorite: Boolean)
const markFavorites = (tree, favorites) => {
  // in: obj => id (string)
  // out: boolean
  const isFavorite = favorites.includes(tree.id);

  return {
    ...tree,
    isFavorite,
    // in: obj in obj
    // out: + propertys(isFavorite: Boolean)
    nodes: tree.nodes.map(childNode => markFavorites(childNode, favorites)),
  };
};

const result = markFavorites(tree, favorites);
console.log(result);

/* result;
 {
    id: 'id-1',
    name: 'Products',
    isFavorite: false,
    nodes: [
        {
            id: 'id-2',
            isFavorite: true,
            name: 'Food',
            nodes: []
        },
    ],
}; */
