# Differences between API calls in React and ASP.NET

In this blog I will be noting some of the differences between api calls made in ASP.NET and React. 

In ASP.NET you need to use something called the HttpClient to send requests to APIs. You need to create it like this and initialize it in you rconstructor:

```csharp   
        private readonly HttpClient httpClient = new HttpClient();

        public IndexModel(ILogger<IndexModel> logger, HttpClient httpClient)
        {
            _logger = logger;
            this.httpClient = httpClient;
        }

```

And then in your Program.cs file you need to add the following: 

```csharp
        builder.Services.AddHttpClient();

```

With that done you can now make an API call like this and store the results in a variable:

```csharp
    public List<Datum> info { get; set; } = new();

        public async Task OnPostSearchPokemon(string pokemonName)
        {
            url = $"https://api.pokemontcg.io/v2/cards?q=name:{pokemonName}";
            var result = await httpClient.GetFromJsonAsync<Root>(url);

            var test = result.data;
            foreach(var item in test)
            {
                info.Add(item);
            }

        }

```
Root is the object we will get back from the API. You can create this object yourself by going into a browser and typing in that url and copying the output and going to a website that converts json to objects. You will also get the object for Datum which is also needed here.



In React we can use a package called react-query and axios to make the same API call. The code will look like this, with the appropriate import statements added as well. 

```javascript
import { useQuery } from 'react-query'
import axios from 'axios'


const { data: cards, isLoading, isError } = useQuery(["cards", searchPk], () => {
        let cardUrl = `https://api.pokemontcg.io/v2/cards?q=name:${searchPk ? searchPk : 'bulbasaur'}`
        return axios.get(cardUrl)
    })
    

```