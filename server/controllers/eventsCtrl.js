module.exports = {
	async getEvents(req,res){
		const db = req.app.get('db')

		let events = await db.get_events()

		res.status(200).send(events)
	},

	async addEvent(req,res){
		const { startTime, endTime, startDate, endDate, eventDescription } = req.body
		const db = req.app.get('db')

		await db.add_event([startTime, endTime, startDate, endDate, eventDescription])

		res.status(200).send({message: 'Added Event'})
	},

	async deleteEvent(req,res){
		const { id } = req.params
		const db = req.app.get('db')

		await db.delete_event([id])

		res.status(200).send({message: 'Deleted Event'})
	}
}