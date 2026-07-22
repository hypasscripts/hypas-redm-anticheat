<div align="center">

# Hypas Anti-Cheat

### Layered security, evidence-led investigations and active protection for RedM servers.

[![RedM](https://img.shields.io/badge/Platform-RedM-8B252B)](#)
[![Framework](https://img.shields.io/badge/Framework-VORP-315A49)](#)
[![Documentation](https://img.shields.io/badge/Documentation-Available-284C66)](docs/index.md)
[![Support](https://img.shields.io/badge/Support-Discord-5865F2)](#support)
[![Commercial](https://img.shields.io/badge/Source-Commercial-101B25)](#licensing)

**Built to Catch What Others Miss.**

</div>

---

## Overview

Hypas Anti-Cheat is a commercial security resource developed specifically for RedM servers.

It uses multiple defensive layers rather than relying on a single detection. The system combines event protection, entity monitoring, resource checks, behavioural signals, evidence collection and administrator review tools to help server teams identify suspicious activity and respond proportionately.

Hypas Anti-Cheat does **not** claim that any anti-cheat can stop every possible attack. Its purpose is to reduce exposure, detect abnormal behaviour, preserve useful evidence and give administrators practical response controls.

> **This repository contains public documentation only.**  
> The commercial source code, detection logic and protected implementation are not published here.

---

## Core capabilities

- Event firewall and honeypot protection
- Entity creation and spam monitoring
- Economy, inventory and weapon watchdogs
- Resource integrity monitoring
- Movement and teleport anomaly reporting
- Aim and combat behaviour analysis
- Menu and suspicious-native reporting
- Player risk scoring and strike history
- Evidence timelines and investigation notes
- Staff audit logging
- Administrative containment tools
- Testing, balanced and strict operating modes
- Health checks and installation auditing

---

## Screenshots

Replace the example filenames below with the screenshots you upload to the `images` folder.

### Administration panel

![Hypas Anti-Cheat administration panel](images/dashboard.png)

### Player investigation

![Hypas Anti-Cheat player investigation](images/player-investigation.png)

### Detection and evidence logs

![Hypas Anti-Cheat evidence logs](images/evidence.png)

### Protection health

![Hypas Anti-Cheat protection health](images/health.png)

---

## Documentation

| Guide | Purpose |
|---|---|
| [Documentation Home](docs/index.md) | Full documentation index |
| [Installation](docs/installation.md) | Install the resource and database |
| [Quick Start](docs/quick-start.md) | Complete the first safe setup |
| [Configuration](docs/configuration.md) | Understand modes and major settings |
| [Permissions](docs/permissions.md) | Configure administrator access |
| [Commands](docs/commands.md) | Available administration commands |
| [Administration Panel](docs/admin-panel.md) | Navigate the panel and player tools |
| [Detection Systems](docs/detections.md) | High-level explanation of protection layers |
| [Evidence and Investigations](docs/evidence-and-investigations.md) | Review alerts without relying on one signal |
| [Troubleshooting](docs/troubleshooting.md) | Resolve common installation issues |
| [FAQ](docs/faq.md) | Common purchasing and operational questions |
| [Security Guide](docs/redm-security-guide.md) | Defensive RedM security fundamentals |
| [Roadmap](docs/roadmap.md) | Public development direction |

---

## Commands

The principal administration commands are:

```text
/acsetup
/acpanel
/achealth
/acaudit
```

Some diagnostic or test commands may be limited to development and authorised testing environments. See the [commands guide](docs/commands.md) before using them.

---

## Compatibility

Hypas Anti-Cheat is designed for:

- RedM
- VORP Core
- oxmysql

Individual integrations may require configuration depending on the server's economy, inventory, permission model and custom resources.

---

## Purchase

Hypas Anti-Cheat is a commercial product distributed through Tebex.

**Purchase link:** `https://the-lobby-shop.tebex.io/package/7543365`

Before purchasing, review the installation requirements and ensure your server framework matches the supported environment.

---

## Support

**Discord:** `https://discord.gg/TeBh6UfHEm`

For support, provide:

- Hypas Anti-Cheat version
- RedM server build
- Framework version
- Relevant console output
- A concise description of what happened
- Steps to reproduce the issue, where possible

Do not post private licence details, database credentials or suspected exploit payloads publicly.

---

## Licensing

This repository is provided for documentation and product information.

The commercial Hypas Anti-Cheat resource is proprietary software. Purchasing access does not grant permission to redistribute, resell, decompile, bypass escrow protection or publish protected source code.

See [SECURITY.md](SECURITY.md) for responsible vulnerability reporting.

---

## Current documented release

**v4.12.14 — Ambient Safe**

This release retains the Menu Native Shield and adjusts entity protection to reduce false positives involving normal ambient pedestrians and animals.

See [CHANGELOG.md](CHANGELOG.md) for the public release history.

---

<div align="center">

**Hypas Development**  
RedM systems built for serious servers.

</div>
