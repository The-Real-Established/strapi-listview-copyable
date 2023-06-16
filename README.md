# Strapi plugin strapi-listview-copyable

Add attribute `copyable` to model property definition to make it copyable in listviews.

Example: 

```

....
    "email": {
      "type": "email",
      "minLength": 6,
      "configurable": false,
      "required": true,
      "copyable": true
    },
...

```