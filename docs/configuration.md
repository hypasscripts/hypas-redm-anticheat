# Configuration

The exact configuration file can change between releases. Always use the configuration supplied with your licensed version.

This page explains the main configuration categories without publishing protected thresholds or signatures.

## Operating modes

### Testing

Use during installation, integration work and controlled validation.

Typical purpose:

- Increase visibility
- Reduce automatic enforcement
- Surface configuration problems
- Identify legitimate server activity that needs review

### Balanced

Recommended starting point for production servers.

Typical purpose:

- Maintain layered protection
- Reduce unnecessary disruption
- Preserve evidence for staff review
- Apply proportionate automatic actions where configured

### Strict

Use only after the server has been tested thoroughly.

Typical purpose:

- Increase enforcement sensitivity
- Apply stronger limits
- Reduce tolerance for repeated abnormal behaviour

Strict mode is not automatically "better." Poorly tested strict settings can create operational problems or false positives.

## Major configuration areas

### Administration and permissions

Controls access to the panel, staff commands and sensitive actions.

### Logging

May include console logging, database evidence, Discord webhooks and staff audit records.

Protect webhook URLs and do not publish them.

### Event protection

Controls event firewall behaviour, validation rules and honeypot handling.

Do not share protected event names or detection logic publicly.

### Entity protection

Controls monitoring of player-created objects, pedestrians, animals, wagons and other network entities.

Entity protection should distinguish abusive bursts from legitimate ambient or scripted world activity.

### Economy and inventory monitoring

Controls observation of abnormal money, item and weapon changes.

These systems may require integration with the server's framework and custom resources.

### Movement monitoring

Controls detection and reporting of abnormal movement, teleporting or travel patterns.

Legitimate administrative, jail, ferry, housing and mission teleports should be reviewed.

### Combat and aim analysis

Controls evidence collection and scoring around combat behaviour.

Aim-related evidence should normally be reviewed alongside context rather than treated as automatic proof.

### Resource integrity

Controls monitoring of expected resources and suspicious resource state changes.

### Enforcement

Controls warnings, strikes, containment, kicks, bans or other actions.

Start conservatively and verify that staff understand the response workflow.

## Configuration safety

Before changing production settings:

1. Back up the current configuration.
2. Change one category at a time.
3. Record the reason for the change.
4. Test representative gameplay.
5. Review logs for unintended effects.
6. Keep a rollback copy.
