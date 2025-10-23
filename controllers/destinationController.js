import Destination from "../models/destinationModel.js";

export const listDestinations = async (req, res) => {
  var destinationList = await Destination.find({});
  return res.json(destinationList);
};

export const createDestinations = async (req, res) => {
  try {
    /*var userCreated = await User.create({
            name: req.body.name,
            email: req.body.email,
            age: req.body.age
        });*/

    var destinationsCreated = await Destination.create(req.body);

    return res.status(201).json(destinationsCreated);
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export const updateDestinations = async (req, res) => {
  try {
    var destinationsUpdate = await Destination.findByIdAndUpdate(
      req.params.id,
      /*{
                name: req.body.name,
                age: req.body.edad,
                email: req.body.email
            }*/
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    return res.json(destinationsUpdate);
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export const getOneDestinations = async (req, res) => {
    var destinationsFound = await Destination.findById(req.params.id);
    return res.status(200).json(destinationsFound);
};
