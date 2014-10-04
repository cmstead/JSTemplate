JSTemplate
==========

This is really something I created for myself so I could quickly spin up a new JS project without a lot of mucking around with remembering what to install and re-building my configurations over and over. If someone finds this useful, they are welcome to it.  There is no real secret sauce to this, so I am not adding a license.  It's just a lot of packages and setup.

Points of interest:

**Build Tasks**

- grunt build -- Builds project including:
    - Compass - builds CSS from sass directory
    - JSHint - Lints JS files -- fails on error (build stops)
    - Karma - runs all specs -- fails on errors (build stops)
    - Uglify - concatenates, sourcemaps and minifies JS source files
    - JSDoc - Creates JSDoc files around all JSDoc notations

- grunt buildrough -- Builds without tests or linting
    - Compass - builds CSS from sass directory
    - Uglify - concatenates, sourcemaps and minifies JS source files

- grunt buildcss
    - Compass - builds CSS from sass directory

- grunt buildjs
    - Uglify - concatenates, sourcemaps and minifies JS source files

**Test Tasks**

- grunt test
    - JSHint - Lints JS files -- fails on error (task stops)
    - Karma - runs all specs -- fails on errors (task stops)

- grunt testwatcher
    - JSHint - Lints JS files -- fails on error (task stops)
    - Karma - runs all specs -- fails on errors (task stops)
    - Watcher - watches source and test files and reruns tests on change

**Other Tasks**
- grunt document
    - JSDoc - Creates JSDoc files around all JSDoc notations

- grunt (default)
    - runs grunt testwatcher