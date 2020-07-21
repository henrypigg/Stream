import artists from "./artists";

const releases = [
  {
    art: require("../assets/ReleasesFiller/rtj4.png"),
    artist: artists.RunTheJewels,
    title: "RTJ4",
    medium: "Album",
    day: "03",
    month: "JUN",
  },
  {
    art: require("../assets/ReleasesFiller/Artist2Deluxe.png"),
    artist: artists.ABoogie,
    title: "Artist 2.0 (Deluxe)",
    medium: "Album",
    day: "05",
    month: "JUN",
  },
  {
    art: require("../assets/ReleasesFiller/bwu2.png"),
    artist: artists.DizzyWright,
    title: "Blaze With Us 2",
    medium: "Album",
    day: "05",
    month: "JUN",
  },
  {
    art: require("../assets/ReleasesFiller/ImGone.png"),
    artist: artists.IannDior,
    title: "I'm Gone",
    medium: "Single",
    day: "12",
    month: "JUN",
  },
  {
    art: require("../assets/ReleasesFiller/TheAlbum.png"),
    artist: artists.TeyanaTaylor,
    title: "The Album",
    medium: "Album",
    day: "19",
    month: "JUN",
  },
];

export default releases;
