# Changelog

This file contains the public-facing Hypas Anti-Cheat release history. Internal security signatures, exploit-specific changes and protected implementation details are intentionally excluded.

## v4.12.14 — Ambient Safe

### Improved

- Adjusted entity protection to reduce false positives involving ambient pedestrians and animals.
- Retained the Menu Native Shield introduced in v4.12.13.
- Preserved stable entity protection for abusive player-created entities.
- Improved suitability for populated towns and normal RedM world activity.

## v4.12.13 — Menu Native Shield

### Added

- Additional menu and suspicious-native reporting.
- Expanded defensive coverage against abnormal client-side behaviour.

### Retained

- Stable entity guard behaviour from the preceding stable branch.

## v4.12.12 — Stable Restore

### Restored

- Confirmed stable entity-guard behaviour for excessive wagon and entity creation.
- Reverted unstable limit changes that could interfere with normal gameplay.

## Earlier v4.12 releases

Earlier v4.12 releases introduced or refined:

- Resource integrity protection
- Access and permission improvements
- Escrow preparation
- Object and entity guard adjustments
- Client cleanup
- Harness and rate-limit tuning
- Administrative protection improvements

## Release-note policy

Public notes describe customer-relevant changes without disclosing:

- Exact detection thresholds
- Honeypot event names
- Exploit signatures
- Bypass-sensitive logic
- Private security research
