const db = require('../models')
const Event = db.Events
const Ticket = db.Tickets
const User = db.Users

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
                ticket_price,
                promotion_code,
                promotion_discount
            } = req.body

            // const eventData = req.body
            // eventData.UserId = req.users.id

            // console.log(req.body);
            // console.log(req.file, "ini file upload");

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
                img: req.file?.path,
                UserId: req.users.id,
            })
            console.log(resultEvent);

            const resultTicket = await Ticket.create({
                ticket_name,
                ticket_quantity,
                ticket_price,
                promotion_code,
                promotion_discount,
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
                        // required: true,
                        attributes: ['ticket_name', 'ticket_quantity', 'ticket_price', 'promotion_code', 'promotion_discount']
                    },
                    {
                        model: User,
                        attributes: ['email', 'firstname', 'lastname']
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
                limit: 30,
                include: [
                    {
                        model: Ticket,
                        // required: true,
                        attributes: ['ticket_name', 'ticket_quantity', 'ticket_price', 'promotion_code', 'promotion_discount']
                    },
                    {
                        model: User,
                        // required: true,
                        attributes: ['email', 'firstname', 'lastname']
                    }
                ]
            })
            res.status(200).send({ result })
        } catch (err) {
            console.log(err);
            res.status(400).send({ message: err.message })
        }
    },

    getByCategory: async (req, res) => {
        try {
            const { category } = req.query
            const result = await Event.findAll({
                where: {
                    category
                },
                include: [
                    {
                        model: Ticket,
                        // required: true,
                        attributes: ['ticket_name', 'ticket_quantity', 'ticket_price', 'promotion_code', 'promotion_discount']
                    },
                    {
                        model: User,
                        // required: true,
                        attributes: ['email', 'firstname', 'lastname']
                    }
                ]
            })
            console.log(result);
            res.status(200).send({ result })
        } catch (err) {
            console.log(err);
            res.status(400).send({ message: err.message })
        }
    },

    getByCity: async (req, res) => {
        try {
            const { city } = req.query
            const result = await Event.findAll({
                where: {
                    city
                },
                include: [
                    {
                        model: Ticket,
                        // required: true,
                        attributes: ['ticket_name', 'ticket_quantity', 'ticket_price', 'promotion_code', 'promotion_discount']
                    },
                    {
                        model: User,
                        // required: true,
                        attributes: ['email', 'firstname', 'lastname']
                    }
                ]
            })
            console.log(result);
            res.status(200).send({ result })
        } catch (err) {
            console.log(err);
            res.status(400).send({ message: err.message })
        }
    },

    getById: async (req, res) => {
        try {
            const result = await Event.findOne({
                where: {
                    id: req.params.id
                },
                include: [
                    {
                        model: Ticket,
                        // required: true,
                        attributes: ['ticket_name', 'ticket_quantity', 'ticket_price', 'promotion_code', 'promotion_discount']
                    },
                    {
                        model: User,
                        // required: true,
                        attributes: ['email', 'firstname', 'lastname']
                    }
                ]
            })
            console.log(result);
            res.status(200).send({ result })
        } catch (err) {
            console.log(err);
            res.status(400).send({ message: err.message })
        }
    },
}