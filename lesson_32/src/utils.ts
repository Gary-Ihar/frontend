export const createElm = (name: keyof HTMLElementTagNameMap) => {
  return document.createElement(name);
};
