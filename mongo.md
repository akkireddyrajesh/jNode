<h2>mongo path</h2>

<ul>
 <ol>
   C:\Program Files\MongoDB\Server\4.0\bin
 </ol>
</ul>
 1. mongo path
-------------

> C:\Program Files\MongoDB\Server\4.0\bin

2. mongo DB Migration
---------------------

A. download/export Db into folder
---------------------------------
 > a. mongodump -d JadeDB -o C:\Users\srinivasnl\Downloads 
 > b. mongodump -d JadeDB -o C:\Users\santoo\Downloads <br/>
 
B. import/Restore Db into Another PC/some where
-----------------------------------------------
 > mongorestore -d database_name directory_backup_where_mongodb_tobe_restored <br/>
 > Ref Link https://stackoverflow.com/questions/11255630/how-to-export-all-collection-in-mongodb 
