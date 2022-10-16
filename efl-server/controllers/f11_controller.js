const fs = require('fs');
const F11model = require('../models/F11model');
const Summary = require('../models/Summary');

class f11_controller {
  async addData(req, res) {
    try {
      const {
        table1,
        table2,
        table3,
        table4,
        fio,
        performers,
        group,
        email,
        lab_name,
        id_lab,
        quantity,
        photo,
      } = req.body;
      //console.log(req.body);
      //const { photo } = req.file;

      const f11 = new F11model({
        data: table1,
      });
      await f11.save();

      const f11_2 = new F11model({
        data: table2,
      });
      await f11_2.save();

      const f11_3 = new F11model({
        data: table3,
      });
      await f11_3.save();

      const f11_4 = new F11model({
        data: table4,
      });
      await f11_4.save();

      const summary = new Summary({
        fio,
        performers,
        group,
        email,
        lab_name,
        id_lab,
        photo,
        quantity,
      });
      await summary.save();

      res.status(201).json({ message: 'success f11' });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'error f11' });
    }
  }
}

module.exports = new f11_controller();
