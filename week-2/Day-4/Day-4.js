const posts = [
  {
    id: 1,
    username: "mpencot0",
    text:
      "Amazon.com, Inc., doing business as Amazon, is an American electronic commerce and cloud computing company based in Seattle, Washington that was founded by Jeff Bezos on July 5, 1994",
    date: "2017-07-26"
  },
  {
    id: 2,
    username: "bvivians1",
    text: "Amazon.com. 28M likes. Official Facebook page of www.amazon.com.",
    date: "2017-08-04"
  },
  {
    id: 3,
    username: "ljeffs6",
    text:
      "Twitter is an online news and social networking service where users post and interact with messages, known as tweets.",
    date: "2017-07-12"
  },
  {
    id: 4,
    username: "myakuntzov3",
    text:
      "Social media are computer-mediated technologies that facilitate the creation and sharing of information, ideas, career interests and other forms of expression via virtual communities and networks.",
    date: "2017-07-26"
  },
  {
    id: 5,
    username: "hmelly4",
    text:
      "Twitter is a social media platform that engages users in short text bursts - guy from amazon",
    date: "2017-11-05"
  },
  {
    id: 6,
    username: "bharrhy5",
    text:
      "Facebook was built to bring people closer together and build relationships. One of the ways we do this is by connecting people to meaningful posts from their friends and family in News Feed.",
    date: "2017-10-07"
  },
  {
    id: 7,
    username: "ljeffs6",
    text:
      "Facebook is an American online social media and social networking service company based in Menlo Park, California",
    date: "2017-09-24"
  },
  {
    id: 8,
    username: "ljeffs6",
    text:
      "Search Twitter to find the latest news, world events, and social media happenings even faster. Find popular people, hashtags and photos for any topic you can imagine.",
    date: "2017-11-15"
  },
  {
    id: 9,
    username: "gcrampin8",
    text:
      "Social media are computer-mediated technologies that facilitate the creation and sharing of information, ideas, career interests and other forms of expression via virtual communities and networks",
    date: "2017-09-24"
  },
  {
    id: 10,
    username: "myakuntzov3",
    text:
      "Social media includes facebook, twitter, instagram, snapchat, and some would even say amazon.",
    date: "2017-10-09"
  }
];

/*
  A common need when working with data analytics is the ability to group data by specific points
    within the data set. Given a property to group by, sort through the data and group it by that property.
    This should generate an object with keys being the matched property and values being a collection of posts
    that matched the grouping. The possible properties to group on that you'll need to write functionality for will
    be 'username' and 'date' if you have time at the end, a third item to check for will be an array of keywords that
    will match the text of the post. If a post contains more than one of the keywords, it should appear in each
    collection for each keyword that appears in the text.

    (e.g. 'username' => {
      mpencot0: [{
        id: 1,
        username: "mpencot0",
        text:
          "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
        date: "2017-07-26 15:44:08"
      }],
      myakuntzov3: [{
        id: 10,
        username: "myakuntzov3",
        text:
          "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.",
        date: "2017-10-09 12:34:55"
      }, {
        id: 4,
        username: "myakuntzov3",
        text:
          "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
        date: "2017-09-03 16:53:53"
      }],
      ...
    })

    If keywords is being searched....
    (e.g. ['amazon', 'twitter', 'social', 'media'] => {
      amazon: [...array of posts that contains the word amazon in the text],
      twitter: [...array of posts that contains the word twitter in the text],
      social: [...array of posts that contains the word social in the text]
      media: [...array of posts that contains the word media in the text]
    })
*/

const keywords = ["twitter", "amazon", "social", "media", "facebook", "people"];
