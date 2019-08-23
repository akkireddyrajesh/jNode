Ref URL: https://dev.mysql.com/doc/refman/5.7/en/innodb-tablespace-encryption.html

##STEPS TO INITIALIZE DATA-AT-REST TABLE-SPACE-ENCRYPTION :

	1. check Default engine set to INNODB in my.ini file.

	2. install plug-in keyring :

	    (A) my.ini file :
		add below code in my.ini file.

		[mysqld]
		early-plugin-load=keyring_file.dll
		keyring_file_data=C:/ProgramData/MySQL/MySQL Server 8.0/keyring

		NOTE: create folder "keyring" in the above path and give read and write permissions for system.

	3. RESTART the MySQL Server [if it is on/running].
 
	4. To verify that a keyring plugin is active, use the SHOW PLUGINS statement or query the INFORMATION_SCHEMA.PLUGINS table. 

		mysql> SELECT PLUGIN_NAME, PLUGIN_STATUS FROM INFORMATION_SCHEMA.PLUGINS WHERE PLUGIN_NAME LIKE 'keyring%';
			+--------------+---------------+
			| PLUGIN_NAME  | PLUGIN_STATUS |
			+--------------+---------------+
			| keyring_file | ACTIVE        |
			+--------------+---------------+
		mysql> SHOW VARIABLES LIKE 'keyring%';

	5. Enabling File-Per-Table Tablespace Encryption

		(i) mysql> CREATE TABLE t1 (c1 INT) ENCRYPTION='Y';
		(ii) mysql> ALTER TABLE t1 ENCRYPTION='Y';
		if you want un-encrypt or decrypt
		(iii) mysql> ALTER TABLE t1 ENCRYPTION='N';

	6. Master Key Rotation

		mysql> ALTER INSTANCE ROTATE INNODB MASTER KEY;

	7. Identifying Encrypted Tablespaces

		(i) When the ENCRYPTION option is specified in a CREATE TABLE or ALTER TABLE statement, it is recorded in the CREATE_OPTIONS 		column of INFORMATION_SCHEMA.TABLES.

		mysql> SELECT TABLE_SCHEMA, TABLE_NAME, CREATE_OPTIONS FROM INFORMATION_SCHEMA.TABLES WHERE CREATE_OPTIONS LIKE '%ENCRYPTION%';
			+--------------+------------+----------------+
			| TABLE_SCHEMA | TABLE_NAME | CREATE_OPTIONS |
			+--------------+------------+----------------+
			| test         | t1         | ENCRYPTION="Y" |
			+--------------+------------+----------------+

		(ii) Query INFORMATION_SCHEMA.INNODB_SYS_TABLESPACES to retrieve information about the tablespace associated with a particular 		schema and table.

		mysql> SELECT * FROM INFORMATION_SCHEMA.INNODB_TABLESPACES;
			+-------+---------+------------+
			| SPACE | NAME    | SPACE_TYPE |
			+-------+---------+------------+
			|     3 | test/t1 | Single     |
			+-------+---------+------------+

		(iii) To find normally encrypted tables, use the following query:

		mysql> SELECT * FROM INFORMATION_SCHEMA.INNODB_TABLESPACES WHERE FLAG=24609;
		mysql> SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE CREATE_OPTIONS like'%ENCRYPTION="Y"%';