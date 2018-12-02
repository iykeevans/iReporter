import incident from '../models/incident';

class Incidents {
  static getFlags(req, res) {
    incident.findAll()
      .then(data => res.json({ status: 200, data }))
      .catch((err) => {
        if (err.status) {
          res.status(err.status).json({ status: err.status, message: err.message });
        }
        res.status(500).json({ status: 500, message: err.message });
      });
  }
}

export default Incidents;
