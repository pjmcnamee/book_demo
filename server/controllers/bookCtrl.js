module.exports = {
	async add(req,res){
		const { book_title,	book_desc,book_price, book_author_name, book_cover_img} = req.body
		const db = req.app.get('db')

		await db.add_book([book_title, book_desc,book_price, book_author_name, book_cover_img])

		res.status(200).send({message: 'Added book'})
	},

	async getBooks(req,res){
		const db = req.app.get('db')

		const books = await db.get_books()

		res.status(200).send(books)
	},

	deleteBook(req,res){
		
	}
}