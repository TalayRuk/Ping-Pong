
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
|Only allow user to input positive number | A, a, -1, | N/A, N/A, N/A (Please enter positive number only)
|1 is the minimum number that can be entered | 0, 1 | Enter Value greater or equal to 1, 1
|Replace any Output numbers that can be divided by 15 with “ping-pong” | 15, 30, 45 | ping-pong, ping-pong, ping-pong
|Replace any Output numbers that can be divided by 5 with “pong” | 5, 10, 20 | pong, pong, pong
|Replace any Output numbers that can be divided by 3 with “ping” | 3, 6, 18 | ping, ping, ping
|Once user Input the number, format Output number as  listing that range from 1 to the user’s Input number. | 4 | 1, 2, ping, 4. (in the bullet point listing form).
|When the user input new number and hit enter, old output will clear and new output will show | (3), (7)| 1, 2, ping. (Once new input enter, Out put will show: 1, 2, ping, 4, pong, ping, 7)

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
