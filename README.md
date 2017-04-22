hit-counter
-------

A sample microservice, used in various AWS-related infrastructure projects.
Displays hit count, name (with pid) and hostname like so:
 `{"hits":1,"name":"hit-counter-pid-57352","host":"ip-X-X-X-X"}`

```
Routes:

DEFAULT PORT: 3000
/add  and / -> increments hit count
/sub -> decrements hit count 
/health -> displays hit count
/zero -> resets hit count

Run:
HITCOUNTER_PORT=xxxx node index.js
```

