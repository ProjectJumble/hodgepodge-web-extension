const colors = {
  blue: {
    topColor: "#2b32b2",
    bottomColor: "#1488cc"
  },
  gray: {
    topColor: "#232526",
    bottomColor: "#414345"
  },
  green: {
    topColor: "#11998e",
    bottomColor: "#38ef7d"
  },
  orange: {
    topColor: "#ff8008",
    bottomColor: "#ffc837"
  },
  purple: {
    topColor: "#6a3093",
    bottomColor: "#a044ff"
  },
  red: {
    topColor: "#7b4397",
    bottomColor: "#ed213a"
  }
};

/*
 * -> Blue: unsure, unknown
 * -> Gray: error
 * -> Green: credible, trusted
 * -> Orange: bias, clickbait, political, state
 * -> Purple: parody, satire
 * -> Red: conspiracy, fake, hate, junksci, rumor, unreliable
 */
export const BACKGROUND_COLORS = {
  unsure: { color: colors.blue },
  bias: { color: colors.orange },
  clickbait: { color: colors.orange },
  conspiracy: { color: colors.red },
  credible: { color: colors.green },
  fake: { color: colors.red },
  hate: { color: colors.red },
  junksci: { color: colors.red },
  parody: { color: colors.purple },
  political: { color: colors.orange },
  rumor: { color: colors.red },
  satire: { color: colors.purple },
  state: { color: colors.orange },
  trusted: { color: colors.green },
  unknown: { color: colors.blue },
  unreliable: { color: colors.red }
};
