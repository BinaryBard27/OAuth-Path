# Verification report

Checked on 28 October 2026 against public official documentation. This is a manual comparison of selected claims, not a provider approval or a full audit of every app configuration. Seed claims with no source are explicitly marked **UNCERTAIN**.

## Slack

- Confirmed: Slack's OAuth 2.0 documentation explains requesting scopes, user approval, and exchanging an authorization code. It requires HTTPS redirect URLs and documents matching rules, including the configured redirect URL/subdirectory rule. Source: [Installing with OAuth](https://api.slack.com/authentication/oauth-v2).
- Confirmed: the Sign in with Slack setup page says an app is created in a development workspace. Source: [Sign in with Slack setup](https://api.slack.com/authentication/sign-in-with-slack).
- Correction: an early product assumption described Slack as “minutes” and implied internal apps never need review. The cited OAuth documentation does not establish an approval timeline or a universal no-review guarantee. Seed guide changed to **UNCERTAIN** for timing and review applicability.
- Not verified: marketplace review timeline, review criteria for a particular app, and whether an individual requested scope has special approval constraints.

## Google

- Confirmed: Google's scope page says sensitive scopes require review and public apps accessing user data must complete verification. Source: [OAuth 2.0 scopes](https://developers.google.com/identity/protocols/oauth2/scopes).
- Confirmed: Google's restricted-scope guidance describes additional verification, a possible security assessment, and says restricted-scope verification can potentially take several weeks. It says brand verification typically takes 2–3 business days in the stated case where branding changed since the last approved consent screen verification. Source: [Restricted scope verification](https://developers.google.com/identity/protocols/oauth2/production-readiness/restricted-scope-verification).
- Correction: a blanket “Google takes weeks” would overstate what the docs say. It depends on requested scopes, data handling, and exceptions. The seed separates the stated restricted-scope estimate from unknown best/typical cases.
- Not verified: exact path, exception eligibility, security assessment applicability, or review timeline for a particular app without its scope list and architecture.

## LinkedIn

- Confirmed: LinkedIn says most permissions/programs require explicit approval, while it lists OpenID Connect profile/email and Share on LinkedIn permissions as open. Source: [Getting Access to LinkedIn APIs](https://learn.microsoft.com/linkedin/shared/authentication/getting-access).
- Confirmed: its 3-legged OAuth guide requires an absolute HTTPS callback; query parameters are ignored and fragments are invalid. Source: [3-Legged OAuth Flow](https://learn.microsoft.com/linkedin/shared/authentication/authorization-code-flow).
- Correction: saying “LinkedIn is often a hard no” is not supported as a general fact by these docs. Seed describes gated access and leaves acceptance odds and timing uncertain.
- Not verified: review duration or acceptance likelihood for any individual partner/product request.

## Notion

- Confirmed: Notion publishes an OAuth authorization guide for integrations. Source: [Authorization](https://developers.notion.com/docs/authorization).
- Not verified: current public listing review criteria, timing, and their application to a particular integration. These remain uncertain in the seed.

## Scope of checks

No provider-console login, credential creation, OAuth consent, or approval submission was performed. The seeded guides are static, sourced examples; live generation additionally performs unauthenticated HTTP metadata probes and reports only the observed response.
