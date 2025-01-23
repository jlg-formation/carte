// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const debounce = <T extends (...args: any[]) => any>(
  delay: number,
  fn: T,
) => {
  let timeout: NodeJS.Timeout;
  const result = (...args: unknown[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn(...args);
    }, delay);
  };

  result.cancel = () => {
    clearTimeout(timeout);
  };

  return result;
};
