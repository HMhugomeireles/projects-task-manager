const UtilDates = {
  formateDate(dateToFormate) {
    const options = { month: "long", day: "numeric", year: "numeric" };
    const date = new Date(dateToFormate);
    const americanDate = new Intl.DateTimeFormat("en-US", options).format(date);

    return americanDate;
  },
};

export default UtilDates;
