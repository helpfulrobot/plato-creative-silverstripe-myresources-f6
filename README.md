# silverstripe-myresources-f6

## Installation
Composer is the recommended way of installing SilverStripe modules.
```
composer require plato-creative/silverstripe-myresources-f6; bash myresources/install.sh
```

## Custom installer
If you use this on a regular basis.  Then add the following to your installer.
```
{
  ...
  "require": {
    ...
    "plato-creative/silverstripe-myresources-f6": "dev-master"
  },
  "scripts": {
    "post-install-cmd": [
      "bash myresources/install.sh"
    ],
    "post-update-cmd": [
      "bash myresources/install.sh"
    ]
  }
}
```
