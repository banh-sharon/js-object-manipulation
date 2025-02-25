const sculptureList = require("./data.js"); // import data.js

//const element = sculptureList[1]; // <---- comment out this line in your solution!

// this following snippet is just to show how to iterate an object's keys
// comment this out in your solution!
/*for (const key in element){
    console.log(`${key}: ${element[key].length}`)
}*/

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
