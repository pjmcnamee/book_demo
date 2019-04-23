module.exports = {
	async addArticle(req,res){
		const { articleImg, articleTitle, articleText, articleTeaser } = req.body
		const db = req.app.get('db')

		await db.add_article([articleImg, articleTitle, articleText, articleTeaser])

		res.status(200).send({message: 'Added Article'})
	},

	async getArticles(req,res){
		const db = req.app.get('db')

		const articles = await db.get_article()

		res.status(200).send(articles)
	}
}