export const formatDate = (dateString: string): string => {
  const date = new Date(dateString + "-01");
  return new Intl.DateTimeFormat('en-US', { month: 'short', year: 'numeric' }).format(date);
}

export const getDuration = (startDate: string, endDate?: string | null): string => {
  const start = new Date(startDate + "-01");
  const end = endDate ? new Date(endDate + "-01") : new Date();

  let months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth()) + 1;

  if (months < 0) return "";

  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  const parts = [];
  if (years > 0) parts.push(`${years} yr${years > 1 ? 's' : ''}`);
  if (remainingMonths > 0) parts.push(`${remainingMonths} mo`);

  return `(${parts.join(' ')})`;
}
