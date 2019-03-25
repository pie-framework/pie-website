var changelog = require('changelog');

module.exports = {
  getChangeLogs: function (name, version, filterKeyword) {
    version = version || 'all';

    if (version === 'next') {
      version = 'upcoming';
    }

    function showChanges(response) {
      let nr = 0;
      let found = 0;

      const filterFn = function(el) {
        if (filterKeyword === 'latest') {
          if (el.changes) {
            nr += 1;
          }

          return el.changes && nr === 1;
        }

        const isOk = el.changes && el.version.indexOf(filterKeyword) >= 0;

        if (filterKeyword === 'next' && isOk) {
          found += 1;
        }

        return !filterKeyword || (found <= 1 && isOk);
      };
      const filteredVersions = response.versions.filter(v => filterFn(v));
      const filteredResponse = {
        ...response,
        versions: filteredVersions
      };

      return changelog.markdown(filteredResponse);
    }

    return changelog.generate(name, version)
      .then(showChanges);
  }
};