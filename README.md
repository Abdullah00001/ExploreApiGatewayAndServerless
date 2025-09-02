# Exploring Highly Scalable Long Running Server With Serverless Function And Api GateWay

In this project i try to explore how a monolithic server should be scale and boost performance and prevent crash for high load.The Architecture actually called as Hybrid Architecture Or Serverless Offload Pattern.

## Components Of The Architecture

- ### Main Server
        Who take care of req/res,schedule and queue
- ### Serverless Functions
        Who execute the thing that request from worker and schedule
- ### API Gateway
        Who take care of request and connect with the Functions

## Tach Stack And Tools

- ### Main server:

  ```
  Javascript, Node, Express, Docker, Mongodb, Redis, bullMQ,  node-cron
  ```

- ### Serverless Functions:

  ```
  Javascript, Node, Mongodb, Nodemailer, Serverless, AWS
  ```

- ### API Gateway:
  ```
  Javascript, Node, Express, Docker, http-proxy-middleware, NGINX
  ```

## How Its Work

```
         ┌───────────────┐
         │   Main Server  │
         │  (Monolith)    │
         │  - API (req/res)
         │  - BullMQ (queue mgr)
         │  - node-cron (scheduler)
         └───────┬───────┘
                 │ Enqueue Job
                 ▼
          ┌─────────────┐
          │   Redis      │
          │ (Upstash)    │
          └───────┬─────┘
                  │ Job Trigger
                  ▼
       ┌──────────────────────┐
       │  Serverless Workers  │
       │  (Lambda/Cloud Run) │
       │  - Email             │
       │  - Report Gen        │
       │  - Notifications     │
       │  - Backups           │
       └──────────────────────┘

```
