import artists from "./artists";

const userData = {
  username: "henrypigg",
  followers: 55,
  following: 95,
  followingArtists: [],
  subscribedArtists: [],
  favoriteArtists: [
    {
      name: artists.PlayboiCarti,
    },
    {
      name: artists.ABoogie,
    },
    {
      name: artists.PoloG,
    },
    {
      name: artists.LilTjay,
    },
    {
      name: artists.KanyeWest,
    },
    {
      name: artists.JuiceWRLD,
    },
    {
      name: artists.CardiB,
    },
  ],
  favoriteAlbums: [
    {
      title: "Kids See Ghosts",
      image: require("../assets/ProfileFiller/KidsSeeGhosts.png"),
      artists: [
        {
          name: artists.KidCudi,
        },
        {
          name: artists.KanyeWest,
        },
      ],
    },
    {
      title: "Acid Rap",
      image: require("../assets/ProfileFiller/AcidRap.png"),
      artists: [
        {
          name: artists.ChanceTheRapper,
        },
      ],
    },
  ],
  favoriteSongs: [
    {
      title: "Nothin' at All",
      image: require("../assets/ProfileFiller/AmerikkasMostBlunted.png"),
      artists: [
        {
          name: artists.Trizz,
        },
        {
          name: artists.Chuuwee,
        },
      ],
    },
    {
      title: "Pain 1993",
      image: require("../assets/ProfileFiller/Pain1993.png"),
      artists: [
        {
          name: artists.PlayboiCarti,
        },
      ],
    },
  ],
};

export default userData;
