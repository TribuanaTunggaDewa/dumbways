'select title, username,comment FROM posts INNER JOIN  users ON createdBy = id_user INNER JOIN comments ON postid = id_comment;
