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
}

export default new Incidents();
