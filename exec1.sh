myprog=/bin/ls
echo "This is the wrapper script, it will exec $myprog"
 
# do some vodoo here, probably change the arguments etc.
# well, stuff a wrapper is there for
 
exec "$myprog" "$@"