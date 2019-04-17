module.exports = {
	async update(req,res){
		const { id } = req.params
		const { email, firstName, lastName, age, newsLetter  } = req.body
		const db = req.app.get('db')

		const updatedAccArr = await db.update_account([id,email, firstName, lastName, age, newsLetter])

		const {account_email, account_id, account_admin, account_first_name, account_last_name, account_user_age, account_newsletter_signup} = updatedAccArr[0]

		req.session.user = {admin: account_admin, email: account_email, id: account_id, firstName: account_first_name, lastName: account_last_name, age: account_user_age, newsLetterSignup: account_newsletter_signup}

	 res.status(200).send({
		 message: 'Logged In',
		 userData: req.session.user,
		 loggedIn: true
	 })
	},
}