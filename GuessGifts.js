var wishlist = [
    {name: "Mini Puzzle", size: "small", clatters: "yes", weight: "light"},
    {name: "Toy Car", size: "medium", clatters: "a bit", weight: "medium"},
    {name: "Card Game", size: "small", clatters: "no", weight: "light"}
]

var presents = [
    {size: "medium", clatters: "a bit", weight: "medium"},
    {size: "small", clatters: "yes", weight: "light"}
]

const guessPres = (arr1, arr2) => {
    for (i = 0; i < arr1.length; i++){
        for(x = 0; x < arr2.length; x++){
            if(arr1[i].size === arr2[x].size && arr1[i].clatters === arr2[x].clatters && arr1[i].weight === arr2[x].weight){
                console.log(arr1[i].name)
            }
        }
    }
}

guessPres(wishlist, presents)