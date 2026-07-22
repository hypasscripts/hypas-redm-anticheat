# Permissions

Hypas Anti-Cheat uses ACE permissions for sensitive administration access.

## Primary permission

```text
hypas.ac.admin
```

This permission is intended for trusted anti-cheat administrators.

Example:

```cfg
add_ace group.admin hypas.ac.admin allow
```

You may also assign the permission directly to a principal, depending on your server's ACE structure.

## Recommended access policy

Limit anti-cheat administration to staff who require it.

Panel users may have access to:

- Player risk information
- Evidence and detection logs
- Staff notes
- Containment actions
- Strike resets
- Teleport allowances
- Weapon or inventory controls
- Audit history

These capabilities should not be available to general moderators unless their role requires them.

## Permission troubleshooting

When `/acpanel` does not open:

1. Confirm the account belongs to the expected ACE group.
2. Confirm the `add_ace` line loads before the player joins.
3. Check for a conflicting `deny`.
4. Restart the server after permission-file changes.
5. Run `/acaudit`.
6. Review the server console for permission warnings.

## Security recommendation

Do not use broad or public permissions for convenience.

Maintain an internal record of:

- Who has anti-cheat access
- When access was granted
- Why it is required
- When it should be reviewed or removed
