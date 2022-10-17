# Using Filter,Sort, and Includes to cherry-pick data from API in React

In React there are some array methods that you can use to filter and sort arrays. 

The first of these is Array.Filter(), In the example below, we are making a call to the PokemonTCG API, and getting back an array of objects. 
```javascript

const {data: cards, isLoading, isError} = useQuery(["cards", searchPk], () => {
        let cardUrl = `https://api.pokemontcg.io/v2/cards?q=name:${searchPk ? searchPk : 'bulbasaur'}`
        return axios.get(cardUrl)
    })

```

The variable "cards" now contains this information after making this call. 

Let's say that we only wanted to see Pokemon cards with hp greater than 200. We can use the Filter() method like so: 

```jsx
<div>
    <h1> pokemon with HP greater than 200 </h1>

    {cards?.data!.data.filter((pokemon:any) => Number(pokemon.hp) > 200)
    .map((card:any) => <img src = {card.images.small}/>)}

</div>
```

Let's say you wanted to sort some of those results from largest to smallest. We can use the Sort() method like this: 

```jsx
<div>
    <h1> pokemon with HP greater than 200 Sorted by Largest to Smallest </h1>

    {cards?.data!.data.filter((pokemon:any) => Number(pokemon.hp) > 200)
    .sort((a:any ,b:any) => a.hp < b.hp ? 1:-1>)
    .map((card:any) => <img src = {card.images.small}/>)}

</div>
```


And finally we can also use the string.Includes() method to filter out data that doesn't contain the information within the Includes(), like this: 

```jsx
<div>
    <h1> Pokemon cards who are drawn by Mitsuhiro Arita </h1>
    {cards?.data!.data.filter((pokemon:any) => (pokemon.artist).includes('Mitsuhiro'))
    .map((card:any)=> <img src = {card.images.small}> </img>)}
</div>
```