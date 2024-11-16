chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.assignments) {
    console.log(message.assignments);
    const array = Array.from(message.assignments, ([key, value]) => ({
      key,
      value,
    }));
    console.log(array);
  }
  chrome.windows.create({
    url: "https://www.assignmint.tech/dashboard",
    type: "popup",
    height: 500,
    width: 700,
  });
});
