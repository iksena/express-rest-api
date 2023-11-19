const HelloService = require('../services/helloService');

exports.getHello = (req, res) => {
  const helloService = new HelloService();

  res.status(200).json(helloService.getHello());
};
