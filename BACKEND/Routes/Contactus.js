const router = require("express").Router();
const Contactus = require("../Models/Contactus");

// Route to add a new contact
router.route("/add").post((req, res) => {
    const { fullname, mail, number, text } = req.body;

    const newContactus = new Contactus({
        fullname,
        mail,
        number,
        text,
    });

    newContactus.save()
        .then(() => {
            res.json("Contact added");
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send({ status: "Error adding contact", error: err.message });
        });
});

// Route to retrieve all contacts
router.route("/").get((req, res) => {
    Contactus.find()
        .then((contactus) => {
            res.json(contactus);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send({ status: "Error retrieving contacts", error: err.message });
        });
});

// Route to update a contact by ID
router.route("/update/:id").put(async (req, res) => {
    const userId = req.params.id;
    const { fullname, mail, number, text } = req.body;

    const updateContactus = {
        fullname,
        mail,
        number,
        text,
    };

    try {
        await Contactus.findByIdAndUpdate(userId, updateContactus);
        res.status(200).send({ status: "Contact updated" });
    } catch (err) {
        console.log(err);
        res.status(500).send({ status: "Error updating contact", error: err.message });
    }
});

// Route to delete a contact by ID
router.route("/delete/:id").delete(async (req, res) => {
    const userId = req.params.id;

    try {
        await Contactus.findByIdAndDelete(userId);
        res.status(200).send({ status: "Contact deleted" });
    } catch (err) {
        console.log(err);
        res.status(500).send({ status: "Error deleting contact", error: err.message });
    }
});

// Route to get a contact by ID
router.route("/get/:id").get(async (req, res) => {
    const userId = req.params.id;

    try {
        const contact = await Contactus.findById(userId);
        res.status(200).send({ status: "Contact fetched", contact });
    } catch (err) {
        console.log(err);
        res.status(500).send({ status: "Error fetching contact", error: err.message });
    }
});

module.exports = router;
