SELECT * FROM cart;
SELECT book_id, Title, price, pairs, genre, rating FROM cart as c JOIN book as b ON c.book_id=b.idBook WHERE user_id=2;


insert into cart (user_id, book_id) VALUES (1, 15);

SELECT * FROM cart WHERE user_id=2 and book_id=15;
IF 0<()
	UPDATE cart SET pairs = pairs + 1 WHERE user_id=1 and book_id=2;
ELSE
	insert into cart (user_id, book_id) VALUES (1, 15);


delete from cart WHERE user_id=1;


