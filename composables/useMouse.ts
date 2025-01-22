const x = ref(0);
const y = ref(0);

export const useMouse = () => {
  const update = (event: MouseEvent) => {
    x.value = event.pageX;
    y.value = event.pageY;
  };

  return { x, y, update };
};
