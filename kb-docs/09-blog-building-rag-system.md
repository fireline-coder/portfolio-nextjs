# Blog Post: Building a RAG System From Scratch in 3 Months (As the Only Backend Engineer)

By Max Ellis | April 2026

## Key Takeaways
- One engineer can ship complex systems with the right tools and architecture
- Prompt engineering at scale requires systematic testing, not manual tuning
- AI-assisted development expands execution capability — it doesn't replace understanding

## Content

When a partner company that provided the AI chat product went out of business, there were three months to build a replacement from scratch. Max was the sole backend engineer.

### What They Were Replacing

The existing product gave customers a RAG-powered chat agent on their website. It crawled their site, used it as a knowledge base, and let visitors ask questions. Simple: one agent, one source, one website.

### Starting Point

Someone in the org had written a draft page crawler in Node.js. Max was able to leverage the API Gateway built for the subject line optimizer. He had just finished his first project using AWS Lambdas and Bedrock Prompt Management. Everything else — the architecture, the agent system, the multi-source design, the crawler infrastructure — he designed from scratch.

### The Architecture

The agent lives on the customer's website as an embedded widget. When a visitor sends a message, it spins up a Lambda that handles the request — tracks analytics, performs visitor resolution, retrieves configured actions, and passes everything into the prompt. It hits the Bedrock Agent, which either triggers an action or queries the knowledge base. Major components: AWS Lambda, Bedrock Agents, Bedrock Knowledge Bases, PostgreSQL, API Gateway, S3, SQS, and DynamoDB.

### The Crawler

The web crawler populates the knowledge base with multiple modes — recursive crawling, sitemap parsing, and explicit URL lists. A three-step approach handles real-world challenges: standard crawl, stealth approach, then external API for Cloudflare-protected pages. For password-protected sites, credentials are stored with KMS encryption. The crawler is distributed — each Lambda crawls a page, detects URLs, and pushes them onto an SQS queue. A queuing system prevents rate-limiting. Sources auto-recrawl every 30 days.

### Going Beyond Parity: Many-to-Many

The original product was one agent, one source. Max built many-to-many. A customer can have multiple agents on their website, sharing knowledge bases with different configurations or reading from entirely separate sources.

### The Hardest Problem: Agent Behavior at Scale

The hardest challenge was making agents behave consistently. Prompt tuning for one customer would break another. Max built a test framework that defines test scenarios and runs them against the agent systematically, catching regressions before production.

### Being the Only Backend Engineer

The hardest non-technical challenge was scope — infrastructure, API, crawler, agent, reporting, analytics, visitor resolution. Max was learning significant parts of the stack on the fly. Claude Code was instrumental — translating architectural intent into Node.js, debugging unfamiliar runtime behavior. He ran multiple Claude Code sessions in parallel across different epics.

### Hitting the Deadline

Shipped on the three-month deadline with full feature parity and better performance. The strategy was focus and discipline — significant testing throughout, agent test framework built early, parallel Claude Code workflow.

### The Production War Story

The first production deployment, the chat widget didn't load. Root cause: a typo in the configuration — "style" instead of "styles". A one-character, non-code fix.
