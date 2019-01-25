export const createBrowserNotification = error => {
  window.browser.notifications.create({
    type: "basic",
    iconUrl: window.browser.extension.getURL("images/icon-48.png"),
    title: error.name, // window.browser.i18n.getMessage("systemError"),
    message: error.message
  });
};

export const throwNewNetworkResponseUnsuccessfulError = error => {
  throw new Error(
    `${window.browser.i18n.getMessage(
      "systemNetworkResponseUnsuccessful"
    )} (${error})`
  );
};

export const shadeColor = (color, percent) => {
  const c = parseInt(color.slice(1), 16),
    u = percent < 0 ? 0 : 255,
    v = percent < 0 ? percent * -1 : percent,
    R = c >> 16,
    G = (c >> 8) & 0x00ff,
    B = c & 0x0000ff;
  return (
    "#" +
    (
      0x1000000 +
      (Math.round((u - R) * v) + R) * 0x10000 +
      (Math.round((u - G) * v) + G) * 0x100 +
      (Math.round((u - B) * v) + B)
    )
      .toString(16)
      .slice(1)
  );
};
