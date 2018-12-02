class Incidents {
  /**
   * class constructor
   * @param {object} data
   */
  constructor() {
    this.incidents = [];
  }

  /**
   * @returns {object} returns all red-flags/interventions
   */
  findAll() {
    return new Promise((resolve, reject) => {
      const { incidents } = this;
      if (incidents.lenght >= 1) {
        resolve(incidents);
      }
      reject(Error('No data available'));
    });
  }
}

export default new Incidents();
