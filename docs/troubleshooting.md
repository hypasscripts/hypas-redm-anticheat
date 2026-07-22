# Troubleshooting

## The resource does not start

Check:

- The folder name is correct.
- All licensed files are present.
- `fxmanifest.lua` exists.
- `oxmysql` starts first.
- VORP Core starts first.
- The server console shows the first actual error, not only later follow-on errors.

## The panel does not open

Check:

- The resource is running.
- The user has `hypas.ac.admin`.
- There is no ACE `deny`.
- The panel command is enabled.
- `/achealth` and `/acaudit` complete.
- NUI files were not removed or renamed.

## Database errors appear

Check:

- The correct SQL file was imported.
- The resource uses the intended database.
- Database credentials are valid.
- The database user has required permissions.
- Upgrade SQL was applied when moving from an older release.
- Table engines and column types match the supplied schema.

Take a backup before changing production tables.

## Logs are not appearing

Check:

- Logging is enabled.
- The database connection is healthy.
- Discord webhook URLs are valid, where applicable.
- The specific protection layer is enabled.
- The server clock and timestamps are sensible.
- The event is not filtered by the current mode.

## Legitimate teleports are reported

Identify the resource responsible for the teleport.

Common examples include:

- Administration tools
- Jail systems
- Ferries
- Housing
- Character selection
- Instance transitions
- Mission scripts

Use the supported allowance or integration mechanism rather than disabling all movement protection.

## Ambient NPCs or animals create alerts

Confirm that the installed build includes the ambient-safe entity adjustments.

Current documented release:

```text
v4.12.14
```

Also confirm that custom resources are not creating large player-owned entity bursts.

## A player was actioned unexpectedly

1. Preserve the evidence.
2. Review the timeline.
3. Check staff audit logs.
4. Identify whether enforcement was automatic or manual.
5. Check relevant server resources.
6. Reproduce the legitimate workflow in testing.
7. Adjust narrowly.
8. Restore the player where justified.

## Support request checklist

Include:

- Version
- Server build
- Framework version
- Console error
- Relevant screenshots
- Reproduction steps
- Configuration mode
- Whether the issue occurs after a clean restart
