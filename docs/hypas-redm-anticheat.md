---
layout: default
title: "Hypas RedM Anti-Cheat for VORP Servers"
description: "Hypas is a layered RedM anti-cheat for VORP servers with event protection, entity monitoring, behavioural analysis, evidence logging and administrator response tools."
permalink: /hypas-redm-anticheat/
---

# Hypas RedM Anti-Cheat for VORP Servers

**Layered RedM server protection, evidence-led investigations and practical administrator controls.**

Hypas Anti-Cheat is a commercial security resource developed specifically for RedM servers using VORP Core and oxmysql.

Rather than depending on one detection method, Hypas combines multiple defensive layers designed to reduce exposure, identify abnormal behaviour, preserve useful evidence and help server teams respond proportionately.

> **Built to Catch What Others Miss.**

[View the documentation](index.md) · [Read the FAQ](faq.md) · [Purchase through Tebex](https://the-lobby-shop.tebex.io/package/7543365) · [Join the support Discord](https://discord.gg/TeBh6UfHEm)

---

## Why RedM servers need layered anti-cheat protection

A RedM server can be targeted through several different routes, including:

- Abusive or forged server events
- Economy and inventory manipulation
- Excessive entity creation
- Weapon injection
- Suspicious movement or teleporting
- Menu and native abuse
- Resource interference
- Aim assistance and ESP-related behaviour
- Misuse of staff permissions

No single client-side check can adequately cover every category.

Hypas uses layered protection so that weakening or avoiding one signal does not automatically defeat the entire security model.

---

## Core protection systems

### Event firewall and honeypots

Hypas monitors suspicious event activity and supports defensive honeypots that legitimate resources should never call.

Sensitive implementation details, exact event names and detection thresholds are intentionally not published.

[Learn about RedM event security](redm-security-guide.md)

### Entity Guard

Entity Guard monitors abnormal creation of networked entities, including objects, wagons, pedestrians and animals.

The system considers context such as ownership, entity type, creation rate and repetition. The current ambient-safe release is designed to reduce false positives involving normal world pedestrians and animals.

[Read about detection systems](detections.md)

### Economy, inventory and weapon watchdogs

Hypas can monitor abnormal changes involving:

- Player balances
- Inventory items
- Weapons
- Suspicious reward or removal activity

These protections complement secure server-side validation; they do not replace it.

### Resource integrity

Resource integrity monitoring helps administrators identify unexpected resource states and potential interference with security-critical resources.

### Movement and teleport monitoring

Hypas records abnormal movement and teleport behaviour while supporting legitimate workflows such as:

- Staff administration
- Jail transport
- Ferries
- Character selection
- Missions
- Housing or instance transitions

### Aim and combat analysis

Combat analysis evaluates patterns over time rather than treating one shot as proof.

Evidence may include:

- Accuracy trends
- Headshot behaviour
- No-line-of-sight context
- Repeated suspicious combat signals
- Related player history

### Menu and suspicious-native reporting

The Menu Native Shield expands visibility into suspicious client behaviour associated with abusive menu or native activity.

Exact signatures and bypass-sensitive implementation details remain private.

---

## Evidence-led investigations

An anti-cheat alert should begin an investigation, not automatically end one.

Hypas provides administrators with context such as:

- Detection timelines
- Player risk levels
- Strike history
- Combat evidence
- Movement events
- Economy or inventory concerns
- Entity activity
- Staff notes
- Administrative action history

Independent signals can be reviewed together before serious action is taken.

[Read the evidence and investigation guide](evidence-and-investigations.md)

---

## Administration panel

The Hypas Anti-Cheat panel is designed to make complex security information easier to review.

Depending on version, configuration and permissions, authorised staff may have access to:

- Dashboard and server health
- Player risk profiles
- Evidence timelines
- Detection filters
- Spectate
- Shadow Watch
- Staff notes
- Freeze and isolation controls
- Inventory and weapon containment
- Strike and aim-score resets
- Temporary teleport allowance
- Return-to-safe-position tools
- Staff audit history

[View the administration panel guide](admin-panel.md)

---

## Operating modes

### Testing

For installation, integration work and controlled validation.

### Balanced

The recommended starting point for most production environments after testing.

### Strict

For servers that have completed adequate tuning and deliberately require stronger enforcement sensitivity.

Strict mode is not automatically the best setting. Correct integration and evidence quality are more important than maximising enforcement.

[Read the configuration guide](configuration.md)

---

## Screenshots

Use the same filenames already referenced in the repository, or edit these image paths to match your uploaded screenshots.

### Anti-cheat dashboard

![Hypas RedM Anti-Cheat dashboard](../images/dashboard.png)

### Player investigation and risk review

![Hypas RedM Anti-Cheat player investigation](../images/player-investigation.png)

### Detection evidence

![Hypas RedM Anti-Cheat detection evidence](../images/evidence.png)

### Protection health

![Hypas RedM Anti-Cheat protection health](../images/health.png)

---

## Compatibility and requirements

Hypas Anti-Cheat is designed for:

- RedM
- VORP Core
- oxmysql
- MySQL or MariaDB
- Correctly configured ACE permissions

Custom economy, inventory, notification and administration systems may require configuration or integration testing.

[Review installation requirements](installation.md)

---

## Current documented release

### v4.12.14 — Ambient Safe

This release:

- Retains the Menu Native Shield
- Preserves stable entity protection
- Reduces false positives involving ambient pedestrians and animals
- Improves suitability for populated towns and normal RedM world activity

[View the public changelog](../CHANGELOG.md)

---

## What Hypas does not claim

Hypas does not claim that any anti-cheat is completely impossible to bypass or that every alert proves cheating.

Its purpose is to:

- Make abuse harder
- Limit the impact of suspicious activity
- Detect abnormal behaviour across multiple layers
- Preserve meaningful evidence
- Give administrators practical investigation and containment tools

Secure RedM development still requires server-side validation, careful permissions, database controls, backups and trained staff.

---

## Purchase Hypas Anti-Cheat

Hypas Anti-Cheat is distributed commercially through Tebex.

[Purchase Hypas RedM Anti-Cheat](ADD_YOUR_TEBEX_PRODUCT_URL_HERE)

Before purchasing, review:

- [Installation](installation.md)
- [Configuration](configuration.md)
- [Frequently Asked Questions](faq.md)
- [Support information](../SUPPORT.md)

---

## Support

[Join the Hypas support Discord](ADD_YOUR_DISCORD_INVITE_HERE)

For effective support, provide:

- Hypas Anti-Cheat version
- RedM server build
- VORP Core version
- oxmysql version
- Relevant console output
- A concise description
- Reproduction steps where available

Never post database credentials, licence details, webhook URLs or private exploit material publicly.

---

## Continue reading

- [Documentation home](index.md)
- [Detection systems](detections.md)
- [Evidence and investigations](evidence-and-investigations.md)
- [RedM server security guide](redm-security-guide.md)
- [Frequently asked questions](faq.md)
- [Troubleshooting](troubleshooting.md)

---

**Hypas Development**  
Professional RedM systems for serious servers.
