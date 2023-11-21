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
