### get all products

query{
products{
name
price
}
}

### Get Number of Item

{
numberOfItems
}

OR

query{
numberOfItems
}

### Nested Fetching

query{
products {
id
price
category {
name
products {
name
price,

    }

}
}
}
