const formatPostDate = (createdAt) => {
  const currentTime = new Date();
  const postDayTime = new Date(createdAt);

  const year = postDayTime.getFullYear()
  const month = postDayTime.getMonth() + 1
  const day = postDayTime.getDate()

  if(!year && !month && !day) {
    return ""
  }

  return `${year}/${month}/${day}`

};

export default formatPostDate;
