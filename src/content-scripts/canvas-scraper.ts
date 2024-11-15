var assignmentsAndDates = document.querySelectorAll(
  '.agenda-event__title, h3.agenda-date > span[aria-hidden="true"]'
) as NodeListOf<HTMLElement>;

if (assignmentsAndDates.length > 0) {
  // Convert NodeList to an array of innerText values

  const assignmentTexts = Array.from(
    assignmentsAndDates,
    (element) => element.innerText
  );

  // Send the list of assignment names to the background script
  chrome.runtime.sendMessage({ assignments: assignmentTexts });
}
