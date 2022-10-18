const jsonParse = (table, cb) => {
  for (const [key, value] of Object.entries(table)) {
    if (value === '') {
      str += NaN;
    }
    str += value + '\n';
  }
  console.log(str);
};

module.exports = (req, res, next) => {
  let str;
  const { table1, table2, table3, table4 } = req.body;
  jsonParse(table1, (result) => {
    str += result;
  });
  next();
};
