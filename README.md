FakeMS
-------

A fake microservice, used in various AWS-related infrastructure projects.
Displays hit count, name (with pid) and hostname like so:
 `{"hits":1,"name":"fakems-pid-57352","host":"MacBook-Pro"}`

```
Routes:

PORT: 3000
/add  and / -> increments hit count
/sub -> decrements hit count 
/health -> displays hit count
/zero -> resets hit count
```

