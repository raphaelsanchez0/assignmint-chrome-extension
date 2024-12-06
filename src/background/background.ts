import { Constants } from "@/lib/constants";
import { convertAssignmentsByDateToQueryString } from "@/lib/utils";

chrome.runtime.onMessage.addListener((message) => {
  if (message.assignments) {
    const assignmentsByDate: { [date: string]: string[] } = Object.fromEntries(
      Object.entries(message.assignments).map(([date, assignments]) => [
        date,
        assignments as string[],
      ])
    );

    const importURL = new URL("import", Constants.urls.assignmintBaseURL);
    const assignmentsQueryString =
      convertAssignmentsByDateToQueryString(assignmentsByDate);
    importURL.searchParams.append("assignments", assignmentsQueryString);

    chrome.windows.create({
      url: importURL.toString(),
      type: "normal",
      height: 1000,
      width: 1100,
    });
  }
});
