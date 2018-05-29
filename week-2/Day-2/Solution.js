const posts = [
  {
    id: 1,
    username: "mpencot0",
    text:
      "freaking porta volutpat erat. Quisque erat Dang viverra eget congue eget semper crap nulla. Nunc purus.",
    date: "2017-07-26 15:44:08"
  },
  {
    id: 2,
    username: "bvivians1",
    text:
      "Quisque porta volutpat erat. freaking erat eros viverra eget congue eget semper shoot nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.",
    date: "2017-08-04 06:17:29"
  },
  {
    id: 3,
    username: "dbrokenbrow2",
    text:
      "Aenean fermentum. Donec ut freaking eget massa tempor convallis. Nulla neque libero flipping eget eleifend luctus ultricies eu nibh.\n\nQuisque id justo sit amet sapien Flipping vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo sollicitudin ut suscipit a feugiat et eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    date: "2017-07-12 10:47:03"
  },
  {
    id: 4,
    username: "myakuntzov3",
    text:
      "Duis bibendum freaking sed interdum venenatis turpis enim flipping mi in porttitor pede shoot eu massa. Donec dapibus. Duis at velit eu est congue Shoot.",
    date: "2017-09-03 16:53:53"
  },
  {
    id: 5,
    username: "hmelly4",
    text:
      "Lorem ipsum dolor sit amet dang adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien varius dang blandit non interdum in ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
    date: "2017-11-05 08:24:16"
  },
  {
    id: 6,
    username: "bharrhy5",
    text:
      "Proin shoot mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. crap metus arcu adipiscing molestie hendrerit at vulputate vitae nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    date: "2017-10-07 10:01:07"
  },
  {
    id: 7,
    username: "ljeffs6",
    text:
      "Aenean lectus. Flipping eget nunc. Donec quis orci eget orci vehicula butt.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio elementum eu interdum eu tincidunt in leo. Maecenas pulvinar lobortis est.",
    date: "2017-09-24 22:30:55"
  },
  {
    id: 8,
    username: "ngedge7",
    text:
      "Proin leo odio porttitor id consequat in consequat ut nulla. Sed accumsan felis. Ut at dolor quis shoot consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    date: "2017-11-15 13:38:29"
  },
  {
    id: 9,
    username: "gcrampin8",
    text:
      "In hac habitasse butt dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut Shoot id mauris freaking elementum. Nullam varius. Nulla facilisi.",
    date: "2017-06-11 00:10:04"
  },
  {
    id: 10,
    username: "slogesdale9",
    text:
      "Freaking porta volutpat erat. Quisque erat crap viverra eget congue eget semper rutrum dang. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.",
    date: "2017-10-09 12:34:55"
  }
];

const wordsToFilter = ["crap", "butt", "shoot", "dang", "flipping", "freaking"];

// Basic Solution

function filterPosts(arr) {
  for (let i = 0; i < arr.length; i++) {
    const split = arr[i].text.split(" ");
    for (let j = 0; j < split.length; j++) {
      if (wordsToFilter.includes(split[j].toLowerCase().replace(/,/g, ""))) {
        split[j] = "*".replace(/,/gi, "").repeat(split[j].length) + ",";
      }
    }
    arr[i].text = split.join(" ");
  }
  return arr;
}

// potential answer using maps
const filterPosts = arr =>
  arr.map(val => {
    return Object.assign({}, val, {
      text: val.text
        .split(" ")
        .map(
          word =>
            wordsToFilter.includes(word.toLowerCase().replace(/,/g, ""))
              ? "*".replace(/,/gi, "").repeat(word.length) + ","
              : word
        )
        .join(" ")
    });
  });

// Regex Method
const filterPosts = arr => {
  const regex = new RegExp(wordsToFilter.join("|"), "gi");
  for (let i = 0; i < arr.length; i++) {
    arr[i].text = arr[i].text.replace(regex, function(match) {
      return "*".repeat(match.length);
    });
  }
  return arr;
};

// Regex with map
const filterPosts = arr => {
	const regex = new RegExp(wordsToFilter.join('|'), 'gi');
	return arr.map(post => ({
		...post,
		text: val.text.replace(regex, match => '*'.repeat(match.length)),
	}));
};
