# OAuth Path

See [Notes to the hiring team](NOTES_TO_HIRING_TEAM.md) for a short project note.

OAuth Path maps the provider approval journey for an OAuth app.
Enter a provider to research its public setup, review, and scope documentation.
Each guide separates agent-assisted research from work that needs a human.
Claims show whether they were sourced, tested, or remain uncertain.
Share a guide with a link or copy it as Markdown.

## Setup

1. Install Node.js 20 or newer.
2. Run `npm install`.
3. Copy `.env.example` to `.env.local` and add `OPENAI_API_KEY` and `TAVILY_API_KEY` for live generation. The app starts without keys, but live research needs both. `OPENAI_MODEL` is optional.
4. Run `npm run dev` and open `http://localhost:3000`.
5. Deploy to Vercel and configure the same environment variables in the project settings. Guides are written to `data/guides`; use durable storage for serverless production deployments.

## Key decisions

- **Evidence labels:** sourced claims point to public pages, tested claims describe a limited live HTTP check, and unknown facts stay uncertain so estimates are not presented as guarantees.
- **Seed apps:** Slack demonstrates documented OAuth setup; Google demonstrates scope verification and assessment; LinkedIn demonstrates open permissions versus gated products; Notion provides a contrasting integration authorization flow. See [VERIFICATION.md](VERIFICATION.md).
- **JSON file storage:** it keeps the prototype simple and makes guide records inspectable without a database. Concurrent writes and ephemeral/serverless filesystems are not suitable for durable production use.
- **No accounts:** generated guides are shareable by URL. Do not put private user information into the app.

## What is checked

The seed guide statements were compared with linked official docs; verified findings and corrections are in `VERIFICATION.md`. During live generation, the server searches public pages, fetches selected pages, and probes two standard OAuth metadata paths at the first search result's origin. Those probes do not prove the provider supports or approves a particular OAuth integration. No provider console login or app creation is performed.

## Limitations

- Live generation needs OpenAI and Tavily API keys.
- The app cannot sign in to provider consoles, create an OAuth app, or complete reviews.
- Review times are estimates and may not be published.
- Provider documentation and policies can change.
- The basic metadata probes may target a documentation host rather than the provider's authorization server; treat them as reachability checks only.
- File storage is intended for a local prototype. Configure durable storage before deploying on an ephemeral serverless filesystem.
