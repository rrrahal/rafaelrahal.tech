import { datadogRum } from "@datadog/browser-rum";
import { useState } from "react";

export const useLocalStorage = (initialValue: string, storageKey: string): [string, (v: string) => void] => {
  let valueInLocalStorage;

  try {
    valueInLocalStorage = window.localStorage.getItem(storageKey);
  } catch (e) {
    datadogRum.addError("Error when getting item from local storage");
  } finally {
    if (valueInLocalStorage === null || valueInLocalStorage === undefined) {
      valueInLocalStorage = initialValue;
    }

    const [value, setValue] = useState<string>(valueInLocalStorage);

    const setLocalValue = (v: string) => {
      try {
        window.localStorage.setItem(storageKey, v);
      } catch (e) {
        datadogRum.addError("Error when setting item in local storage");
      }
      setValue(v);
    };

    return [value, setLocalValue];
  }
};
