# url-shortener
A URL shortener, like tinyURL, made as a coding test for a job

![screenshot of the front-end](https://cdn.discordapp.com/attachments/410766471052918786/935248009418133535/unknown.png)

 ## Requirements 
- The site must allow users to short an original URL and generate a unique code with 5 or less characters
  - The URL must not expire
  - If the same original URL is entered, the generated short URL must be different each time
- When the short URL is acessed, the user must be redirected to the original URL, with the least delay possible
- The application must support the maximum simultaneous accesses
- No authentication is needed
- The front-end layout must be clean and easy to use

## Technologies
- **Back-end**: Java, Spring Boot and Postgres
- **Front-end**: Angular and Angular Material

## Architecture
![Architecture Diagram](https://cdn.discordapp.com/attachments/410766471052918786/935251257159974982/unknown.png)


## Improvements to be added:
The application was build with some limitations due to time constraint, here are some improvements that could be done:
- Adding a Cache, like [Redis](https://redis.io/), for faster access to data that is requested multiple times
- Using NoSQL database, since this application has only 1 table and no relationships, and NoSQL databases performs better in reading queries 
- Distributed System. It's coodination could be done with [Zookeeper](https://zookeeper.apache.org/) type of service; each Spring service would have a different range of url's that it could generate
- Using [Docker](https://www.docker.com/) to set up the enviroment

### Improved System Architecture
![Improved System Architecture Diagram](https://cdn.discordapp.com/attachments/410766471052918786/935260925399822396/unknown.png)
