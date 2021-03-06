let startup = () => {
  _setEnvironmentVariables();
  _setBrowserPolicies();
  _generateAccounts();
  _setAdmins();
};

var _setEnvironmentVariables = () => Modules.server.setEnvironmentVariables();

var _setBrowserPolicies = () => {};

var _generateAccounts = () => Modules.server.generateAccounts();

var _setAdmins = () => Modules.server.setAdmins();

Modules.server.startup = startup;
