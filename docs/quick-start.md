# Quick Start

This guide covers the safest first deployment.

## 1. Start conservatively

Use **Testing** mode during initial validation.

Testing mode should be used to identify:

- Missing integrations
- Permission problems
- Legitimate events requiring allowance
- Custom resources that resemble suspicious behaviour
- Entity-heavy jobs or town activity
- Teleports caused by lawful gameplay systems

## 2. Open the panel

Run:

```text
/acpanel
```

Confirm that the panel loads and that the dashboard receives current server information.

## 3. Review health

Run:

```text
/achealth
```

Resolve critical warnings before relying on enforcement.

## 4. Review the audit

Run:

```text
/acaudit
```

The audit helps identify installation, permission and configuration problems.

## 5. Generate controlled test activity

Use only the supplied authorised test mechanisms in a private testing environment.

Never test destructive or exploit-like activity on a public server without approval and a rollback plan.

## 6. Observe normal gameplay

Test common server activities:

- Character selection
- Spawning
- Stable use
- Wagons
- Farming
- Hunting
- Law enforcement tools
- Administrative teleport
- Death and revival
- Inventory transfers
- Job rewards
- Custom missions

## 7. Move to Balanced mode

After normal activity is understood and integrations are confirmed, move to **Balanced** mode.

Balanced mode is generally the sensible production starting point.

## 8. Treat Strict mode as a deliberate choice

Strict mode may increase enforcement sensitivity. It should only be enabled after adequate observation, tuning and staff preparation.
