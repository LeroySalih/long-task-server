drop table if exists Logs;

create table Logs (
	id				INT GENERATED ALWAYS AS IDENTITY primary key,
	created_at		timestamp		default now(),
	app				text,
	status			text,
	msg				text
);
