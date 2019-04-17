const bcrypt = require("bcryptjs");

module.exports = {
 async register(req,res){
	 const {email, password, firstName, lastName, age, admin, newsLetter} = req.body
	 const db = req.app.get('db')
	 const accountArr = await db.find_account_by_email([email])

	 if(accountArr[0]){
		 return res.status(200).send({message: "Account with that email already exists"})
	 }

	 const salt = bcrypt.genSaltSync(10)
	 const hash = bcrypt.hashSync(password, salt)

	 const newAccArr = await db.create_account([email, hash, admin, firstName, lastName, age, newsLetter])

	 const {account_email, account_id, account_admin, account_first_name, account_last_name, account_user_age, account_newsletter_signup} = newAccArr[0]

	req.session.user = {admin: account_admin, email: account_email, id: account_id, firstName: account_first_name, lastName: account_last_name, age: account_user_age, newsLetterSignup: account_newsletter_signup}

	 res.status(200).send({
		 message: 'Logged In',
		 userData: req.session.user,
		 loggedIn: true
	 })

 },

 async login(req,res){
	const {email, password } = req.body
	const db = req.app.get('db')
	const accountArr = await db.find_account_by_email([email])

	if(!accountArr[0]){
		return res.status(200).send({message: 'Account not found'})
	}

	const result = bcrypt.compareSync(password, accountArr[0].account_hash)
	if(!result){
		return res.status(401).send({message: 'Incorrect password'})
	}


	const {account_email, account_id, account_admin, account_first_name, account_last_name, account_user_age, account_newsletter_signup} = accountArr[0]

	req.session.user = {admin: account_admin, email: account_email, id: account_id, firstName: account_first_name, lastName: account_last_name, age: account_user_age, newsLetterSignup: account_newsletter_signup}
	
	res.status(200).send({
		message: 'Logged in succesfully',
		userData: req.session.user,
		loggedIn: true
	})
 },

 userData(req,res){
	 if(req.session.user) res.status(200).send(req.session.user)
	 else res.status(400).send({message:'Please log in'})
 }
}