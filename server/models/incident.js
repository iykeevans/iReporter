import helper from '../helpers/helper';

class Incidents {
  /**
   * class constructor
   * @param {object} data
   */
  constructor() {
    this.incidents = [];
  }

  /**
   * @returns {promise} resolves all red-flags/interventions
   */
  findAll() {
    return new Promise((resolve, reject) => {
      const { incidents } = this;
      if (incidents.length >= 1) {
        resolve(incidents);
      }
      reject(Error('No data available'));
    });
  }

  /**
   * @returns {promise} resolves one red-flag/intervention
   */
  findOne(id) {
    return new Promise((resolve, reject) => {
      const { incidents } = this;
      helper.find(id, incidents)
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
  }

  /**
   * @returns {promise} resolves edit of red-flag/intervention
   */
  editComment(id, comment) {
    return new Promise((resolve, reject) => {
      const { incidents } = this;
      helper.find(id, incidents)
        .then((data) => {
          data.comment = comment;
          resolve(data);
        })
        .catch(err => reject(err));
    });
  }

  /**
   * @returns {promise} resolves edit of red-flag/intervention
   */
  editLocation(id, location) {
    return new Promise((resolve, reject) => {
      const { incidents } = this;
      helper.find(id, incidents)
        .then((data) => {
          data.location = location;
          resolve(data);
        })
        .catch(err => reject(err));
    });
  }

  /**
   * @returns {promise} newly created incident of red-flag/intervention
   */
  createIncident(incident) {
    return new Promise((resolve) => {
      const { incidents } = this;
      const {
        type,
        location,
        status,
        comment,
      } = incident;

      const newIncident = {
        id: incidents.length + 1,
        createdOn: new Date(),
        createdBy: 2,
        type,
        location,
        status,
        comment,
      };
      incidents.push(newIncident);
      resolve(newIncident);
    });
  }

  /**
   * @returns {promise} newly created incident of red-flag/intervention
   */
  removeOne(id) {
    return new Promise((resolve, reject) => {
      const { incidents } = this;
      const deleted = incidents.findIndex(incident => incident.id === Number(id));
      if (deleted === -1) {
        reject(Error(`No incident with #id of ${id} exists`));
      }
      incidents.splice(deleted, 1);
      resolve('red-flag record has been deleted');
    });
  }
}

export default new Incidents();
