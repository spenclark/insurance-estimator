#   Walnut Insurance Demo Project
Backend Server and Node REST API for Walnut Insurance Demo Project

## Contributors
[@spenclark](https://github.com/spenclark)


## Table of Contents

- [Objectives](#Objectives)
- [Technologies](#technologies)
- [API](#API)

---

## Objectives and Architecture

This app helps would-be users understand the long-term value of life insurance policies. The model that suggests values and policies is programmatic and can be adapted for different insurance providers. User queries are stored in a SQL database and passed back to the browser as a function to be displayed graphically.

The majority of the logic for this project is placed on the server-side because it would let contributors
1. Ship complex features faster (e.x data science and analytics)
1. Give users faster and streamlined UI (faster compute and less work on the browser)
1. Testing, stability and security (fewer points of vulnerability and failure)

---

## Technologies
This REST API was built using the following tools/libraries:
- Nodejs
- Express
- Knex
- PostgreSQL
- AWS

---

## API

BASE URI `tbd.com`

| Method | Endpoint                 | Protected      | Description                                    | 
| ------ | ------------------------ | -------------- | ---------------------------------------------- |
| POST   | `/api/input`             | False          | Posts .                  |
| GET    | `/api/grants/:grantId`   | False          | Returns information for a single grant.        |
| POST   | `/api/grants`            | False          | Creates a new grant, for admin to approve      |
| POST   | `/api/grants/suggestion` | False          | Posts a suggestion                             |
| GET    | `/api/admin`             | True           | Returns all grants including their suggestions |
| PUT    | `/api/True /:id`         | True           | Edits an existing grant                        |
| DELETE | `/api/grants/:grantId`   | True           | Deletes an existing grant.                     |
| GET    | `/api/True `             | True           | Returns all grants including their suggestions |

<br/>
