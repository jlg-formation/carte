export const sleep = (delay: number) =>
  new Promise<void>((resolve) => {
    if (isSSR()) {
      resolve();
      return;
    }
    setTimeout(resolve, delay);
  });
