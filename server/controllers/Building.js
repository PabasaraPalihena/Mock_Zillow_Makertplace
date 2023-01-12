const Building = require("../model/Building");

//@desc Add realestate
//@route POST /api/v1/realestate
//@access Public
exports.addRealEstate = async (req, res) => {
  try {
    const building = await Building.create(req.body);
    res.status(201).json({
      success: true,
      data: building,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      msg: "Server error",
    });
  }
};
//@desc   Get all estatedetails
//@route  GET /api/v1/realestates
//@access Public
exports.getallRealEstate = async (req, res) => {
  try {
    const building = await Building.find();
    return res.status(200).json({
      success: true,
      count: building.length,
      data: building,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Server error",
    });
  }
};

//@desc   Get single estatedetails
//@route  GET /api/v1/realestates/:id
//@access Public
exports.getRealEstate = async (req, res) => {
  try {
    const building = await Building.findById(req.params.id);
    if (!building) {
      return res.status(404).json({
        success: false,
        error: "This Estate is not found",
      });
    }
    return res.status(200).json({
      success: true,
      data: building,
    });
  } catch (error) {
    if (error.kind === "ObjectId") {
      return res.status(404).json({
        success: false,
        error: "This Estate is not found",
      });
    }
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

//@desc Update realstate
//@route PUT /api/v1/
