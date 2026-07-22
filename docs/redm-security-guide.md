# RedM Server Security: A Defensive Introduction

RedM security is not one script or one ban list. It is a collection of controls that reduce trust in the client, validate important actions on the server and preserve enough evidence to investigate abuse.

## 1. Treat the client as untrusted

The player client is necessary for interaction, but it should not decide sensitive outcomes on its own.

A dangerous pattern is:

```text
Client requests reward -> server grants reward
```

A safer pattern is:

```text
Client requests action
-> server verifies permission
-> server verifies location
-> server verifies workflow state
-> server verifies limits
-> server calculates the reward
-> server records the result
```

The client may request. The server should decide.

## 2. Secure events

Sensitive events should validate:

- Player identity
- Job or role
- Location
- Current mission or workflow
- Cooldowns
- Maximum quantity
- Ownership
- Server-calculated price or reward
- Repeated or impossible requests

Avoid trusting arbitrary item names, amounts or money values supplied by the client.

## 3. Protect the economy

Economy security should include:

- Server-side reward calculation
- Transaction logging
- Maximum-change checks
- Duplicate-request protection
- Staff audit logs
- Separation of business, criminal and government funds
- Regular backups

## 4. Protect inventories and weapons

Validate:

- Why the item is being added
- Where it came from
- Whether the quantity is reasonable
- Whether the player completed the required workflow
- Whether an item can be transferred
- Whether a weapon is permitted

## 5. Monitor entities

Entity abuse can create performance problems or disrupt gameplay.

Useful controls include:

- Ownership checks
- Per-player rate limits
- Entity-type limits
- Burst detection
- Cleanup
- Distinguishing ambient entities from player-created entities
- Evidence recording before removal

## 6. Restrict staff access

Administrator access is a security boundary.

Use:

- Least-privilege permissions
- Individual accounts
- Audit logs
- Periodic access reviews
- Separate high-risk permissions
- Strong Discord and account security

## 7. Keep useful logs

Logs should answer:

- Who?
- What?
- When?
- Where?
- Which resource?
- What changed?
- What did staff do afterward?

A log that only says "player suspicious" is rarely enough.

## 8. Prepare for incidents

Maintain:

- Database backups
- Resource rollback copies
- Staff response procedures
- Evidence-retention rules
- A private reporting channel
- A method to contain a player without immediately destroying evidence

## 9. Use layered protection

A secure environment combines:

- Defensive coding
- Permissions
- Database controls
- Logging
- Rate limits
- Anti-cheat monitoring
- Staff review
- Backups
- Updates

Anti-cheat should strengthen the server's security model, not replace it.

## Related documentation

- [Detection Systems](detections.md)
- [Evidence and Investigations](evidence-and-investigations.md)
- [Configuration](configuration.md)
- [Quick Start](quick-start.md)
