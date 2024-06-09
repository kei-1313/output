const latestPostDate = (date: Date) => {
  const now = new Date();
  const createdTime = new Date(date);
  const diffOnWeek = 7 * 24 * 60 * 60 * 1000;
  const diffCreateTitme = now.getTime() - createdTime.getTime();

  const isLatest = diffCreateTitme < diffOnWeek;

  return isLatest;
};

export default latestPostDate;
