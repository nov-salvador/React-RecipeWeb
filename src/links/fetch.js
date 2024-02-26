export async function cuisineFetch(name){
  const data = await fetch(`https://api.edamam.com/search?q=${name}&app_id=2540baed&app_key=4fb88161d80bc496e2eaa1acf8119eb8`)
  const recipe = await data.json()
  return recipe
}

