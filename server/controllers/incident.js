import incident from '../models/incident';

class Incidents {
  static getFlags(req, res) {
    incident.findAll()
      .then(data => res.json({ status: 200, data }))
      .catch(err => res.status(500).json({ status: 500, message: err.message }));
  }

  static updateComment(req, res) {
    const { id } = req.params;
    const { comment } = req.body;
    incident.editComment(id, comment)
      .then(data => res.json({ status: 202, data: [data] }))
      .catch(err => res.status(500).json({ status: 500, message: err.message }));
  }
}

export default Incidents;
