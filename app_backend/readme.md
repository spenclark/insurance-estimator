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

| Method | Endpoint                 | Protected      | Route Description                              | 
| ------ | ------------------------ | -------------- | ---------------------------------------------- |
| POST   | `/api/estimate`          | False          | Posts the Policy and user objects to server    |
| GET    | `/api/estimate/:userId`  | False          | Returns an estimate based on the user UUID     |
| GET    | `/api/policy/:policyName`| True           | Return a policy                                |
| POST   | `/api/policy`            | True           | Creates a new policy                           |
| PUT    | `/api/estimate/:userId`  | True           | Edits corresponding user                       |
| DELETE | `/api/estimate/:userId`  | True           | Deletes corresponding user                     |
| GET    | `/api/estimate/:userId ` | True           | Returns corresponding user                     |

<br/>
