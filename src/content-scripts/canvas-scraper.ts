var assignmentsAndDates = document.querySelectorAll(
  ".agenda-event__title, .agenda-date"
) as NodeListOf<HTMLElement>;

type assignmentByDate = {
  [date: string]: string[];
};

//h3.agenda-date > span[aria-hidden="true"]

if (assignmentsAndDates.length > 0) {
  const assignmentAndDatesArray = Array.from(assignmentsAndDates, (element) => {
    return element;
  });
  const assignmentsByDate = new Map<string, string[]>();

  let currentDate: string | null = null;
  assignmentsAndDates.forEach((element) => {
    if (element.classList.contains("agenda-date")) {
      const dateElement = element.querySelector(`span[aria-hidden="true"]`);
      currentDate = dateElement?.innerHTML || null;
    } else if (
      element.classList.contains("agenda-event__title") &&
      !element.classList.contains("calendar__event--completed") &&
      currentDate
    ) {
      const assignment = element.innerText;
      const existingAssignments = assignmentsByDate.get(currentDate) || [];
      assignmentsByDate.set(currentDate!, [...existingAssignments, assignment]);
    }
  });

  const assignmentsByDateObject = Object.fromEntries(assignmentsByDate);

  // Send the list of assignment names to the background script
  chrome.runtime.sendMessage({ assignments: assignmentsByDateObject });
}
