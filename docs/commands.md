# Commands

Commands available to a given user depend on ACE permissions, configuration and release version.

## `/acsetup`

Runs or opens the initial anti-cheat setup workflow.

Use it after installation or when validating a significant configuration change.

## `/acpanel`

Opens the Hypas Anti-Cheat administration panel.

Requires authorised access.

## `/achealth`

Displays the current state of major protection systems and integrations.

Use it to identify disabled, unavailable or unhealthy components.

## `/acaudit`

Runs an audit of important setup, permission and database conditions.

Use it when:

- Installing the resource
- Updating versions
- Troubleshooting panel access
- Investigating missing logs
- Reviewing production readiness

## Test commands

Some releases include authorised test commands, including an integrated test suite.

Test commands must only be used:

- By authorised administrators
- In a controlled test environment
- With current backups
- With staff informed
- After reviewing the supplied release documentation

Do not publish test payloads or internal event names.
