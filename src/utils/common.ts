export const buildUrl = (url: string, params: Record<string, string>) => {
  let urlWithParams = url;

  Object.entries(params).forEach(([key, value], i) => {
    const sign = !i ? "?" : "&";
    urlWithParams += `${sign}${key}=${value}`;
  });

  return urlWithParams;
};

export const sumBy = (arr: number[]) => arr.reduce((prev, cur) => prev + cur, 0);
