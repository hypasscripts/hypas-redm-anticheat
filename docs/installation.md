# Installation

## Requirements

Hypas Anti-Cheat is designed for:

- RedM
- VORP Core
- oxmysql
- A correctly configured MySQL or MariaDB database
- Server access sufficient to edit resources and `server.cfg`

Additional integrations may be required for custom inventory, economy or notification systems.

## Installation steps

### 1. Download the licensed package

Download the current release from your authorised Tebex account.

Do not rename, restructure or remove protected files unless the supplied release notes explicitly permit it.

### 2. Extract the resource

Place the resource in an appropriate server resources directory, for example:

```text
resources/[hypas]/hypas_anticheat
```

### 3. Import the database file

Import the SQL file supplied with the release into the same database used by the RedM server.

Before importing:

- Take a database backup.
- Confirm that the target database is correct.
- Review any upgrade SQL if replacing an older release.

### 4. Configure start order

Ensure the database and framework resources start before Hypas Anti-Cheat.

Example:

```cfg
ensure oxmysql
ensure vorp_core
ensure hypas_anticheat
```

Your actual start order may contain other VORP dependencies.

### 5. Configure permissions

Grant trusted staff the required ACE permission:

```cfg
add_ace group.admin hypas.ac.admin allow
```

See [Permissions](permissions.md) for additional guidance.

### 6. Review the configuration

Start in **Testing** or **Balanced** mode while validating the installation.

Do not enable aggressive enforcement on a live server before reviewing:

- Economy integrations
- Inventory integrations
- Teleporting resources
- Administrative tools
- Custom entity-spawning scripts
- Job and mission resources

### 7. Restart the server

A full restart is recommended after the first installation and after database or manifest-level changes.

### 8. Run setup and health checks

After joining with an authorised administrator account, run:

```text
/acsetup
/achealth
/acaudit
```

Review all warnings before enabling stricter enforcement.

## Post-installation checklist

- [ ] Resource starts without console errors
- [ ] Database tables are present
- [ ] Administrator permission works
- [ ] `/acpanel` opens
- [ ] `/achealth` reports expected protections
- [ ] `/acaudit` shows no critical setup problems
- [ ] Legitimate teleport resources are reviewed
- [ ] Economy and inventory integrations are confirmed
- [ ] Discord logging is configured, where used
- [ ] Backup and rollback procedures are available
