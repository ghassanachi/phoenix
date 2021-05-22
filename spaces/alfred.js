/* WORKSPACE */

setKeyHandler("return", HYPER, () => {
  const timestamp = Date.now();

  updateSpacesLists();

  osascript(`tell application "Alfred 4" to search "spaces "`);

  if (!SPACES_ALFRED_PRESELECT) return;

  const space_hash = Space.active().hash(),
    index = spacesList.items.findIndex((item) => item.space_hash === space_hash);

  if (index < 0) return;

  osascript(`
      delay ${SPACES_ALFRED_PRESELECT_DELAY}
      tell application "System Events"
        repeat ${index} times
          key code 125
        end repeat
      end tell
    `);
});
