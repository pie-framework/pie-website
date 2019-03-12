var changelog = require('changelog');

module.exports = {
  getChangeLogs: function (name, version, filterKeyword) {
    version = version || 'all';

    if (version === 'next') {
      version = 'upcoming';
    }

    function showChanges(response) {
      var nr = 0;
      const filterFn = function(el) {
        if (filterKeyword === 'latest') {
          if (el.changes) {
            nr += 1;
          }

          return el.changes && nr === 1;
        }

        return !filterKeyword || v.version.indexOf(filterKeyword) >= 0;
      };
      const filteredResponse = {
        ...response,
        versions: response.versions.filter(v => filterFn(v))
      };

      return changelog.markdown(filteredResponse);
    }

    return changelog.generate(name, version)
      .then(showChanges);
  }
};