const find = (id, incidents) => new Promise((resolve, reject) => {
  const incident = incidents.find(record => record.id === Number(id));
  if (!incident) {
    reject(Error(`No incident with #id of ${id} exists`));
  }
  resolve(incident);
});

export default { find };
