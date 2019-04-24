module.exports = {
  async subscribe(req, res) {
    const { email } = req.body;
    const db = req.app.get("db");

    const emailCheck = await db.get_accountByEmail([email]);

    if (emailCheck[0] && emailCheck[0].account_newsletter_signup) {
      return res
        .status(200)
        .send({ message: "Email is already signed up", success: false });
    }

    if (emailCheck[0] && !emailCheck[0].account_newsletter_signup) {
      await db.update_account_newsletter_subscription([email]);
      return res.status(200).send({
        message:
          "You have an account, but we updated it and added you to the Newsletter list",
        success: true
      });
    }

    await db.create_subscription([email]);

    res
      .status(200)
      .send({ message: "Subscribed to Newsletter", success: true });
  }
};
