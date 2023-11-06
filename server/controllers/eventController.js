const db = require('../models')
const Event = db.Events
const Ticket = db.Tickets

module.exports = {
    createEvent: async (req, res) => {
        try {
            const {
                event_title,
                description,
                termsCondition,
                category,
                city,
                venue,
                start_date,
                end_date,
                start_time,
                end_time,
                ticket_name,
                ticket_quantity,
                ticket_price
            } = req.body

            console.log(req.file, "ini file upload");
            console.log(req.img);

            const resultEvent = await Event.create({
                event_title,
                description,
                termsCondition,
                category,
                city,
                venue,
                start_date,
                end_date,
                start_time,
                end_time,
                img: req.file?.path
            })

            const resultTicket = await Ticket.create({
                ticket_name,
                ticket_quantity,
                ticket_price,
                EventId: resultEvent.id
            })

            res.status(200).send({ message: 'create event success' }, resultEvent, resultTicket)
        } catch (err) {
            console.log(err);
            res.status(400).send({ message: err })
        }
    },

    getAll: async (req, res) => {
        try {
            const result = await Event.findAndCountAll({
                include: [
                    {
                        model: Ticket,
                        required: true,
                        attributes: ['ticket_name', 'ticket_quantity', 'ticket_price']
                    }
                ]
            })
            res.status(200).send(result)
        } catch (err) {
            console.log(err);
            res.status(400).send({ message: err })
        }
    },

    getUpcomingEvent: async (req, res) => {
        try {
            const result = await Event.findAll({
                order: [
                    ['start_date', 'ASC']
                ],
                limit: 15,
                include: [
                    {
                        model: Ticket,
                        required: true,
                        attributes: ['ticket_name', 'ticket_quantity', 'ticket_price']
                    }
                ]
            })
            res.status(200).send({ result })
        } catch (err) {
            console.log(err);
            res.status(400).send({ message: err.message })
        }
    }
}