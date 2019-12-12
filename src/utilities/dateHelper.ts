export const formatDate =
  (date: Date | null): string => date ? `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}` : '';
