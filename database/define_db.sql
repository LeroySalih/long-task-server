drop table if exists dept_classes;
drop table if exists classes; 
drop table if exists ms_users;
drop table if exists assignments;
drop table if exists submissions;
drop table if exists outcomes;


CREATE TABLE dept_classes (
	display_name text NOT NULL,
	teacher text NOT NULL,
	CONSTRAINT dept_classes_pk PRIMARY KEY (display_name, teacher)
);


CREATE TABLE classes(
    id              uuid primary KEY,
    created_at      TIMESTAMP default NOW(), 
    display_name    text,
    description     text
);

create table ms_users (
	id 		uuid primary key, 
	given_name	text,
	surname text
);

create table assignments (
	id 				uuid primary key,
	created_at		TIMESTAMP default now(),
	class_id			uuid,
	display_name	text,
	due_date_time     TIMESTAMP,
	instructions	text
);

create table outcomes (
	class_id  		uuid, 
	assignment_id 	uuid, 
	submission_id	uuid,
	user_id 		uuid,
	points 			int,
	primary key (class_id, assignment_id, submission_id, user_id)
);


create view vw_denormalised
as

SELECT c.id as "class_id", c.display_name as "class_display_name", 
		a.id as "assignment_id", a.display_name, a.due_date_time, a.instructions , 
		mu.given_name,  mu.surname , 'points', o.points
FROM outcomes o
left join ms_users mu on o.user_id = mu.id 
left join assignments a on o.assignment_id  = a.id
left join classes as c on a.class_id = c.id 
order by c.display_name, a.display_name, mu.given_name;




delete from dept_classes;

insert into dept_classes VALUES ('23-13BS', 'Michelle Sewell');
insert into dept_classes VALUES ('23-12BS', 'Michelle Sewell');
insert into dept_classes VALUES ('23-11BS1', 'Michelle Sewell');
insert into dept_classes VALUES ('23-11BS2', 'Michelle Sewell');
insert into dept_classes VALUES ('23-10BS1', 'Talal Yafai');
insert into dept_classes VALUES ('23-10BS2', 'Michelle Sewell');

insert into dept_classes VALUES ('23-11EC1', 'Michelle Sewell');
insert into dept_classes VALUES ('23-10EC1', 'Talal Yafai');
insert into dept_classes VALUES ('23-10EC2', 'Michelle Sewell');

insert into dept_classes VALUES ('23-11CS', 'Leroy Salih');
insert into dept_classes VALUES ('23-10CS', 'Leroy Salih');
insert into dept_classes VALUES ('23-10DT', 'Leroy Salih');

insert into dept_classes VALUES ('23-9A/Dt', 'Leroy Salih');
insert into dept_classes VALUES ('23-9B/Dt', 'Leroy Salih');
insert into dept_classes VALUES ('23-9C/Dt', 'Leroy Salih');

insert into dept_classes VALUES ('23-7A/Dt1', 'Leroy Salih');
insert into dept_classes VALUES ('23-7B/DT1', 'Leroy Salih');
insert into dept_classes VALUES ('23-7C/Dt1', 'Leroy Salih');
insert into dept_classes VALUES ('23-7D/Dt1', 'Leroy Salih');

insert into dept_classes VALUES ('23-11IT', 'Talal Yafai');
insert into dept_classes VALUES ('23-10IT', 'Talal Yafai');

insert into dept_classes VALUES ('23-9AIT1', 'Talal Yafai');
insert into dept_classes VALUES ('23-9BIT1', 'Talal Yafai');
insert into dept_classes VALUES ('23-9CIT1', 'Talal Yafai');

insert into dept_classes VALUES ('23-8AIT1', 'Talal Yafai');
insert into dept_classes VALUES ('23-8BIT1', 'Talal Yafai');
insert into dept_classes VALUES ('23-8CIT1', 'Talal Yafai');

insert into dept_classes VALUES ('23-7A/IT1', 'Leroy Salih');
insert into dept_classes VALUES ('23-7B/It1', 'Leroy Salih');
insert into dept_classes VALUES ('23-7C/It1', 'Leroy Salih');
insert into dept_classes VALUES ('23-7D/It1', 'Leroy Salih');



