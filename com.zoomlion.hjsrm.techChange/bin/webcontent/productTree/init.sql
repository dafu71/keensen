-- Create database link 
create public database link TC.REGRESS.RDBMS.DEV.US.ORACLE.COM
  connect to umpview identified by zoomlionump
  using '(ADDRESS_LIST=(ADDRESS=(PROTOCOL=TCP)(HOST=10.87.224.3)(PORT=1521)))(CONNECT_DATA=(SERVICE_NAME =tc)))';