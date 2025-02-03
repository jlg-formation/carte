// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const debounceAsync = <T extends (...args: any[]) => Promise<any>>(
  delay: number,
  fn: T,
): T => {
  let timeout: NodeJS.Timeout;
  const result = ((...args: Parameters<T>) => {
    return new Promise((resolve, reject) => {
      clearTimeout(timeout);
      timeout = setTimeout(async () => {
        try {
          const res = await fn(...args);
          resolve(res);
        } catch (err) {
          reject(err);
        }
      }, delay);
    });
  }) as T;

  return result;
};
