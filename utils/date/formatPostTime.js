const formatPostTime = (createdAt) => {
  const currentTime = new Date();
  const postDayTime = new Date(createdAt);
  const diffTime = currentTime - postDayTime;

  const seconds = Math.floor(diffTime / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) {
    return `${days}日前`;
  } else if (hours > 0) {
    return `${hours}時間前`;
  } else if (minutes > 0) {
    return `${minutes}分前`;
  } else {
    return `${seconds}秒前`;
  }
};

export default formatPostTime;
