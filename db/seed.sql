CREATE TABLE account (
	account_id serial NOT NULL,
	account_email varchar(180) NOT NULL UNIQUE,
	account_hash TEXT NOT NULL,
	account_admin BOOLEAN NOT NULL,
	account_first_name varchar(80) NOT NULL,
	account_last_name varchar(80) NOT NULL,
	account_user_age smallint NOT NULL,
	account_newsletter_signup BOOLEAN NOT NULL,
	CONSTRAINT account_pk PRIMARY KEY (account_id)
) WITH (
  OIDS=FALSE
);



CREATE TABLE Author (
	author_first varchar(80) NOT NULL,
	author_last varchar(80) NOT NULL,
	author_id serial NOT NULL,
	CONSTRAINT Author_pk PRIMARY KEY (author_id)
) WITH (
  OIDS=FALSE
);



CREATE TABLE Book (
	author_id bigint NOT NULL,
	book_title varchar(80) NOT NULL UNIQUE,
	book_desc TEXT NOT NULL,
	book_price DECIMAL NOT NULL,
	book_id serial NOT NULL,
	CONSTRAINT Book_pk PRIMARY KEY (book_id)
) WITH (
  OIDS=FALSE
);



CREATE TABLE purchases (
	account_id bigint NOT NULL,
	purchases_id serial NOT NULL,
	CONSTRAINT purchases_pk PRIMARY KEY (purchases_id)
) WITH (
  OIDS=FALSE
);



CREATE TABLE purchases_info (
	purchases_id bigint NOT NULL,
	book_id bigint NOT NULL,
	purchases_info serial NOT NULL,
	quantity bigint NOT NULL,
	CONSTRAINT purchases_info_pk PRIMARY KEY (purchases_info)
) WITH (
  OIDS=FALSE
);





ALTER TABLE Book ADD CONSTRAINT Book_fk0 FOREIGN KEY (author_id) REFERENCES Author(author_id);

ALTER TABLE purchases ADD CONSTRAINT purchases_fk0 FOREIGN KEY (account_id) REFERENCES account(account_id);

ALTER TABLE purchases_info ADD CONSTRAINT purchases_info_fk0 FOREIGN KEY (purchases_id) REFERENCES purchases(purchases_id);
ALTER TABLE purchases_info ADD CONSTRAINT purchases_info_fk1 FOREIGN KEY (book_id) REFERENCES Book(book_id);
