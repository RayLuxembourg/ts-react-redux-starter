import { epics$ } from "../../store";

export const InjectEpic = (epic) => {
  epics$.next(epic);
  return (wrappedComponent) => wrappedComponent;

};
