```
const getSculptureListLengths = (list) => {
  return list.map((sculpture) => {
    return {
      name: sculpture.name.length,
      artist: sculpture.artist.length,
      description: sculpture.description.length,
      url: sculpture.url.length,
      alt: sculpture.alt.length,
    };
  });
};

const sculptureListLengths = getSculptureListLengths(sculptureList);
console.log(sculptureListLengths);
