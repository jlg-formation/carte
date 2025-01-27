import { customRef } from "vue";

function usePhoneRef(initValue = "") {
  return customRef((track, trigger) => {
    let value = formatPhoneNumber(initValue);

    return {
      get() {
        track();
        return value;
      },
      set(newValue: string) {
        value = formatPhoneNumber(newValue);
        trigger();
      },
    };
  });
}

function formatPhoneNumber(phoneNumber: string): string {
  // Remove all non-digit characters
  phoneNumber = phoneNumber.replace(/\D/g, "");

  // Format the phone number for French format
  if (phoneNumber.length <= 2) {
    return phoneNumber;
  } else if (phoneNumber.length <= 4) {
    return `${phoneNumber.slice(0, 2)} ${phoneNumber.slice(2)}`;
  } else if (phoneNumber.length <= 6) {
    return `${phoneNumber.slice(0, 2)} ${phoneNumber.slice(2, 4)} ${phoneNumber.slice(4)}`;
  } else if (phoneNumber.length <= 8) {
    return `${phoneNumber.slice(0, 2)} ${phoneNumber.slice(2, 4)} ${phoneNumber.slice(4, 6)} ${phoneNumber.slice(6)}`;
  } else {
    return `${phoneNumber.slice(0, 2)} ${phoneNumber.slice(2, 4)} ${phoneNumber.slice(4, 6)} ${phoneNumber.slice(6, 8)} ${phoneNumber.slice(8, 10)}`;
  }
}

export default usePhoneRef;
