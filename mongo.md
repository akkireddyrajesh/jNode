<h2>mongo path</h2>

<ul>
 <ol>
   C:\Program Files\MongoDB\Server\4.0\bin
 </ol>
</ul>

<h2>mongo DB Migration</h2>
<p>download/export Db into folder</p>
<ul>
 <ol>mongodump -d JadeDB -o C:\Users\srinivasnl\Downloads </ol>
 <ol>mongodump -d JadeDB -o C:\Users\santoo\Downloads </ol>
</ul>
<p>import/Restore Db into Another PC/some where</p>
<ul>
 <ol>mongorestore -d database_name directory_backup_where_mongodb_tobe_restored. 
  <a href="https://stackoverflow.com/questions/11255630/how-to-export-all-collection-in-mongodb">reference</a>
 </ol>
</ul>
