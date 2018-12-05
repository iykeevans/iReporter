import incident from '../models/incident';

class Incidents {
  static getFlags(req, res) {
    incident.findAll()
      .then(data => res.json({
        status: 200,
        data,
      }))
      .catch(err => res.status(500).json({ status: 500, message: err.message }));
  }

  static getFlag(req, res) {
    const { id } = req.params;
    incident.findOne(id)
      .then(data => res.json({
        status: 200,
        data: [data],
      }))
      .catch(err => res.status(500).json({ status: 500, message: err.message }));
  }

  static addIncident(req, res) {
    incident.createIncident(req.body)
      .then(data => res.status(201).json({
        status: 201,
        data: [{ id: data.id, message: 'Created red-flag record' }],
      }));
  }

  static updateComment(req, res) {
    const { id } = req.params;
    const { comment } = req.body;
    incident.editComment(id, comment)
      .then(data => res.status(202).json({
        status: 202,
        data: [{ id: data.id, message: 'Updated red-flag record\'s comment' }],
      }))
      .catch(err => res.status(500).json({ status: 500, message: err.message }));
  }

  static updateLocation(req, res) {
    const { id } = req.params;
    const { location } = req.body;
    incident.editLocation(id, location)
      .then(data => res.status(202).json({
        status: 202,
        data: [{ id: data.id, message: 'Updated red-flag record\'s location' }],
      }))
      .catch(err => res.status(500).json({ status: 500, message: err.message }));
  }

  static removeIncident(req, res) {
    const { id } = req.params;
    incident.removeOne(id)
      .then(data => res.status(202).json({
        status: 202,
        data: [{ id, message: data }],
      }))
      .catch(err => res.status(500).json({ status: 500, message: err.message }));
  }
}

export default Incidents;
