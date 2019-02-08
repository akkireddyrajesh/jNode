1. mongo path:
-----------
> C:\Program Files\MongoDB\Server\4.0\bin

2. mongo DB Migration:
----------------------
A. download/export Db into folder
 > mongodump -d JadeDB -o C:\Users\srinivasnl\Downloads
B. import/Restore Db into Another PC/some where
 > mongorestore -d database_name directory_backup_where_mongodb_tobe_restored
