export const sleep = (delay: number) =>
  new Promise<void>((resolve) => {
    console.log("sleep for ", delay);
    if (isSSR()) {
      resolve();
      return;
    }
    setTimeout(resolve, delay);
  });
