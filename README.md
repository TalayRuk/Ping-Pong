
# PING PONG

#### Web application that return users' numbers, ping, pong, and ping-pong the exceptions' numbers.

_**By Vichitra Pool (Note) on August 18th, 2016_

## Description

##### _Create a web application that when the user in a number and returns a range of numbers from 1 to the input number with the exceptions of:
1. Numbers divisible by 3 are replaced with "ping"
2. Numbers divisible by 5 are replaced with "pong"
3. Numbers divisible by 15 are replaced with "ping-pong"_

## Behavior Driven Development
|Behavior | input | output|
|--- | :---: | :---: |
|Do not allow user to input uppercase letters | A | Must Enter Value greater or equal to 1
|Do not allow user to input lowercase letters | a | Must Enter Value greater or equal to 1
|Do not allow user to input negative number | -1, | Must Enter Value greater or equal to 1
|Do not allow user to input number 0 | 0 | Must Enter Value greater or equal to 1
|1 is the minimum number that can be entered | 1 | 1
|Once user Input the number, format Output number as  listing that range from 1 to the user’s Input number. | 2 | 1, 2 (in the listing form).
|Replace any Output numbers that can be divided by 3 with “ping” | 3 | 1, 2, PING
|Replace any Output numbers that can be divided by 5 with “pong” | 5 | 1, 2, 3, 4, PONG
|Replace any Output numbers that can be divided by 15 with “ping-pong” | 15 | 1, 2, PING, 4, PONG, PING, 7, 8, PING, PONG, 11, PING, 13, 14, PING-PONG
|When the user input new number and click "PING-PONG" button, the previous output will clear. The new output will show.| 7 | (Once "PING-PONG" button is click, the new output will show) 1, 2, PING, 4, PONG, PING, 7

## Setup/Installation Requirements
1. Copy Talayruk.github.io/Ping-Pong to web browser
2. Open Ping-Pong webpage.

## Known Bugs
_None_

## Support and contact details
_Contact me at vjde28@gmail.com_

## Technologies Used

1. HTML
2. CSS
3. CASCADING
4. BOOTSTRAP
5. JAVASCRIPT
6. JQUERY
7. JS: ARRAY & LOOPING

## License

_*MIT Creative Commons*_

_Copyright (c) 2016 Vichitra Pool at Epicodus_
