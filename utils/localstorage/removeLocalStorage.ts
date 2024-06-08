const removeLocalStorage = (title:string, content:string) => {
  localStorage.removeItem(title);
  localStorage.removeItem(content);
}

export default removeLocalStorage;
