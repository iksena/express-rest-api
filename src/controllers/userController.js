exports.getPlacesByUserId = (req, res, next) => {
  const { userService } = req.app;
  const { id } = req.params;
  try {
    const response = userService.getPlacesByUserId(id);

    res.status(200).send(response);
  } catch (error) {
    next(error);
  }
};

exports.signUp = (req, res, next) => {
  const { userService } = req.app;
  const payload = req.body;

  try {
    const response = userService.signUp(payload);

    res.status(201).send(response);
  } catch (error) {
    next(error);
  }
};

exports.logIn = (req, res, next) => {
  const { userService } = req.app;
  const payload = req.body;

  try {
    const response = userService.logIn(payload);

    res.status(200).send(response);
  } catch (error) {
    next(error);
  }
};

exports.getUsers = (req, res, next) => {
  const { userService } = req.app;

  try {
    const response = userService.getUsers();

    res.status(200).send(response);
  } catch (error) {
    next(error);
  }
};
