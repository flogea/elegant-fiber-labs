const { Router } = require('express');
const fs = require('fs');

const F11model = require('../models/F11model');
const Summary = require('../models/Summary');
const checkKey = require('../middleware/chechKeyMW');

const router = new Router();

router.post('/f11', checkKey, async (req, res) => {
  try {
    if (checkKey) {
      const { table1, table2, table3, table4 } = req.body;
      const { fio, performers, group, email, lab_name, id_lab, photo, quantity } = req.body;

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
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'error f11' });
  }
});

module.exports = router;
