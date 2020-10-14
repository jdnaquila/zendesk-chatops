#!/bin/bash
test1='{''"username"'':''"johnd"'',''"name"'':''"john"'',''"lastname"'':''"doe"''}'
test2='johnd'
test3='User not found'
printf "# EXPECTED OUTPUT:
# $test1
# $test2
# $test3\n"
printf "ACTUAL OUTPUT:\n"
curl -X POST "http://localhost/set?username=johnd&name=john&lastname=doe"
echo ""
curl -X GET "http://localhost/get?username=johnd"
echo ""
curl -X GET "http://localhost/get?username=paul"
echo ""
printf "TEST RESULT:\n"
if [[ "$test1" = $(curl -s -X POST "http://localhost/set?username=johnd&name=john&lastname=doe") ]] && [[ "$test2" = $(curl -s -X GET "http://localhost/get?username=johnd") ]]; then
    if  [[ "$test3" = $(curl -s -X GET "http://localhost/get?username=paul") ]]; then
        printf "All tests passed!\n"
    fi
else
    printf "One or more tests failed!\n"
fi