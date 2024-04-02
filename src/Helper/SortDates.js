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
  // console.log(result);
  const filtered = result.map((res) => {
    console.log("resssss");
    console.log(
      res.values.sort((a, b) => {
        const date1 = new Date(a.date).getDate();
        const date2 = new Date(b.date).getDate();
        console.log(date1, date2);
        return date1 - date2;
      }),
    );
    return {
      ...res,
      values: res.values.sort((a, b) => a.date + b.date),
    };
  });
  console.log(result);
  filtered.sort((a, b) => a.num - b.num);

  return filtered;
}
