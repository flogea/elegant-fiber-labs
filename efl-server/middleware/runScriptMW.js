const child_process = require('child_process');

module.exports = (req, res, next) => {
  const lab_name = req.body.lab_name;
  const script = child_process.exec(
    `./middleware/runScript_make_rep.sh ${lab_name}`,
    (error, stdout, stderr) => {
      if (error) {
        console.log(`error - ${error.message}`);
        return;
      }
      if (stderr) {
        console.log(`stderr - ${stderr}`);
        return;
      }
      console.log(`stdout - ${stdout}`);
      res.status(201).json({ message: 'success f11' });
    },
  );
};
