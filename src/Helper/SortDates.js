export function groupByMonth(data) {
  const result = [];

  data.forEach((item) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    // const month = new Date(item.date).getMonth() + 1 // Extract month (1-12)
    const date = new Date(item.date);
    const monthNum = date.getMonth();
    const month = months[monthNum];
    const existingMonth = result.find((obj) => obj.month === month);

    if (existingMonth) {
      existingMonth.values.push(item);
    } else {
      result.push({
        num: monthNum,
        month: month,
        values: [item],
      });
    }
  });

  result.sort((a, b) => a.num - b.num);

  return result;
}
