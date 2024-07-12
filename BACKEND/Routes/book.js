const router = require("express").Router();
const Booktable = require("../Models/Booktable");

// Route to add a new booking
router.post("/add", (req, res) => {
    const { name, number, mail, personsCount, date, time } = req.body;

    const newBooktable = new Booktable({
        name,
        number,
        mail,
        personsCount,
        date,
        time
    });

    newBooktable.save()
        .then(() => res.json("Booking added"))
        .catch((err) => res.status(500).send({ status: "Error adding Booking", error: err.message }));
});

// Route to retrieve all bookings
router.get("/", (req, res) => {
    Booktable.find()
        .then((booktable) => res.json(booktable))
        .catch((err) => res.status(500).send({ status: "Error retrieving bookings", error: err.message }));
});

// Route to update a booking by ID
router.put("/update/:id", (req, res) => {
    const { id } = req.params;
    const { name, number, mail, personsCount, date, time } = req.body;

    Booktable.findByIdAndUpdate(id, { name, number, mail, personsCount, date, time })
        .then(() => res.status(200).send({ status: "Booking updated" }))
        .catch((err) => res.status(500).send({ status: "Error updating booking", error: err.message }));
});

// Route to delete a booking by ID
router.delete("/delete/:id", (req, res) => {
    const { id } = req.params;

    Booktable.findByIdAndDelete(id)
        .then(() => res.status(200).send({ status: "Booking deleted" }))
        .catch((err) => res.status(500).send({ status: "Error deleting booking", error: err.message }));
});

// Route to get a booking by ID
router.get("/get/:id", (req, res) => {
    const { id } = req.params;

    Booktable.findById(id)
        .then((booktable) => res.status(200).send({ status: "Booking fetched", booktable }))
        .catch((err) => res.status(500).send({ status: "Error fetching booking", error: err.message }));
});

module.exports = router;
