# Max Ellis - Engineering Projects

## Building a Production RAG System in 3 Months

Built a multi-agent RAG platform from scratch as the sole backend engineer, replacing a sunset third-party AI product and expanding beyond feature parity.

**Problem:** A partner AI product was being sunset, leaving a critical gap in Act-On's AI capabilities. The replacement needed to be built from scratch under a 3-month deadline with a single backend engineer.

**What Max Built:**
- Multi-agent, multi-source RAG infrastructure using AWS Bedrock
- Web crawler with Cloudflare bypass, auth handling, and distributed SQS-based processing
- Async queuing system to prevent rate-limiting across concurrent crawlers
- Many-to-many agent/source mapping — beyond the original one-to-one model
- Delivered initial parity on the 3-month deadline, then expanded capabilities

**Key Challenge:** Ensuring consistent agent behavior across diverse customer configurations. Prompt tuning for one customer would break another — solved by building a systematic agent test framework that catches regressions before they hit production.

**Tech Stack:** AWS Bedrock, Lambda, API Gateway, RAG, Web Crawler, SQS, DynamoDB, S3, PostgreSQL

**Impact:** Replaced a third-party dependency with an in-house solution, reducing costs and giving full control over the AI product roadmap.

**What He'd Do Differently:** Use one language for the entire backend instead of splitting between Python and Node.js. Invest more upfront in observability. Engage the architecture committee earlier for peer review.

## AI-Powered Email Subject Line Optimizer

First AI product shipped from Max's 50-page business proposal — built in one month while learning API Gateway, Lambda, and Bedrock from scratch.

**Problem:** Customers struggled to write effective email subject lines, leading to low open rates and reduced campaign performance.

**What Max Built:**
- Joins email analytics with metadata tables across 27 months of customer history
- Analyzes top 5 and bottom 5 performing subject lines to surface patterns (length, tone, emoji usage, urgency, personalization)
- Evaluates subject line relevance against email content
- Generates 5 AI-suggested alternatives using insights, original subject, and email content
- Integrated into the email draft workflow at the preview stage
- Stack: API Gateway, Lambda, Step Functions, Bedrock

**Key Challenge:** Learning API Gateway, Lambda, and Bedrock from scratch under a one-month deadline while establishing patterns robust enough to become the foundation for future AI products.

**Impact:** Drove a 17% increase in email open rates in early comparisons. The API Gateway/Lambda/Bedrock patterns became the foundation for the RAG system built afterward.

**What He'd Do Differently:** Continued iterating on it. Showing users how their AI-generated subject lines performed compared to non-generated ones would have driven adoption.

## Schema-Agnostic Data Ingestion Platform (1M Records/Min)

Greenfield platform enabling customers to bring any structured data into Act-On for segmentation and personalized marketing — the most complex project Max has worked on.

**Problem:** Act-On had no way for customers to integrate proprietary structured data (college grades, concert tickets, sales records) for segmentation and personalized marketing.

**What Max Built:**
- Schema API supporting up to 512 columns with rich subtypes (URLs, custom enums, 40+ currencies, flexible date/datetime parsing)
- Batch mode: S3 upload, ordered queue, SCDF job, validate/transform, Snowpipe Streaming, Snowflake staging, changeset detection, merge, Kafka
- Streaming mode: Kafka topic (webhooks), microbatch by account/object ID, same validation-through-merge pipeline
- Per-row/per-column validation with detailed error reports (expected formats, fix suggestions, error codes mapped to logs)
- Performance iterated from approximately 2 hours per 100K records to 1M records (52 columns, 1 GB) in under one minute

**Key Challenge:** Date/datetime parsing without guaranteed format hints. Customers could provide dates in virtually any format, and the system had to figure it out.

**Tech Stack:** Apache Kafka, Snowpipe Streaming, Snowflake, Spring Cloud Data Flow, Spring Boot, AWS S3

**Impact:** Enabled Custom Objects — a new high-value product offering for segmentation and personalized campaigns. Opened new revenue streams.

**What He'd Do Differently:** Store error report data in a database instead of S3 for easier in-app display.

## Unblocking Cloud Migration by Fixing Silent Data Duplication

Traced a "random" data duplication bug to its root cause in distributed H2 databases, then modernized the service from Java 8 to 21 with zero downtime.

**Problem:** A mission-critical dataflow service ran on each customer instance with embedded H2 databases storing read watermarks. It consumed 7 file-based data sources and fed 13 downstream dependencies via Kinesis. When a customer account migrated between instances, the target instance would re-read every piece of data from scratch, causing silent data duplication.

**What Max Built:**
- Diagnosed root cause: account migrations between customer instances caused full data re-reads
- Upgraded Java 8 to Java 21 (required concurrent H2 version migration due to incompatibility)
- Consolidated distributed H2 databases into centralized PostgreSQL using a dual-write strategy
- Canary rollout: partial canary, full canary, incremental region-by-region
- Updated Puppet and deployment pipeline for graceful rollout process

**Key Challenge:** The H2-to-PostgreSQL migration had to happen alongside the Java 8-to-21 upgrade because the embedded H2 version wasn't compatible with Java 21 — two tightly coupled migrations coordinated without breaking a service feeding 13 downstream dependencies.

**Tech Stack:** Java 21, PostgreSQL, Kinesis, AWS, Puppet, H2

**Impact:** Eliminated silent data duplication. Unblocked the Flexential-to-AWS cloud migration — the most nuclear blocker, since without the fix, migrating would have duplicated all of every customer's data.

**What He'd Do Differently:** Put a microservice in front of PostgreSQL for watermark management instead of having approximately 100 customer instances connect directly.

## Fixing a Data Lake Averaging 800+ Errors/Hour

Diagnosed and eliminated cascading failures in Act-On's core data lake — from 8-minute response times to 300ms.

**Problem:** Act-On's data lake was averaging 800+ data errors per hour with query response times up to 8 minutes. Metadata changes were sent directly to a microservice via REST API, which wrote to a Snowflake base table using standard merges. High volume DDoS'd the service, merge operations held locks, and JDBC timeouts caused silent failures with duplicate retries.

**What Max Built:**
- Traced root cause from Splunk logs to Snowflake query history (standard merge locks, query queuing, JDBC timeouts, silent failures, duplicate retries)
- Implemented deferred merge strategy: writes go to a history table, Snowflake stream captures changes, merge procedure consumes hourly
- Eliminated locking contention causing cascading failures

**Key Challenge:** The failures were mostly silent — Splunk showed slow transactions but few errors. The real picture only emerged by cross-referencing Snowflake's query history.

**Tech Stack:** Snowflake, Deferred Merge, Spring Boot, KVS Queue, JDBC

**Impact:** Reduced average response time from 8 minutes to 300 milliseconds. Completely eliminated all 800+/hour persistent data errors.

**What He'd Do Differently:** Replace the REST API and microservice entirely with Kafka + Snowpipe Streaming for fewer failure points and simpler architecture.
