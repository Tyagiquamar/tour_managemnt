import Booking from "../models/Booking.js";

//create new booking
// export const createBooking = async (req, res) => {
//   const newBooking = new Booking(req.body);
//   try {
//     const savedBooking = await newBooking.save();

//     res.status(200).json({
//       success: true,
//       message: "Your tour is booked",
//       data: savedBooking,
//     });
//   } catch (error) {
//     res.status(500).json({ sucess: true, message: "internal server error" });
//   }
// };
export const createBooking = async (req, res) => {
  const newBooking = new Booking(req.body);

  try {
    const savedBooking = await newBooking.save();

    res.status(200).json({
      success: true,
      message: "Your tour is booked",
      data: savedBooking,
    });
  } catch (error) {
    console.error(error); // Log the error for debugging purposes
    res
      .status(500)
      .json({
        success: false,
        message: "Internal server error",
        error: error.message,
      });
  }
};

//get single booking

export const getBooking = async (req, res) => {
  const id = req.params.id;
  try {
    const book = await Booking.findById(id);

    res.status(500).json({ sucess: true, message: "sucessful", data: book });
  } catch (error) {
    res.status(404).json({ sucess: true, message: "not found" });
  }
};

//get all booking
export const getAllBooking = async (req, res) => {
  try {
    const books = await Booking.find();

    res.status(500).json({ sucess: true, message: "sucessful", data: books });
  } catch (error) {
    res.status(500).json({ sucess: true, message: "internal server error" });
  }
};
