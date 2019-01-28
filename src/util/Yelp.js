const apiKey = 'veK1MZgT1X6YFhe5c2tm3fCC6CMPKUJgBNKsjXdsYTYifabnPwlz63Y8Yyu4VefiQ3L6cutCsA_zsS-87sruJbdNTfI9QRB4NPWepIexI4bTy8atvUB9-pbMvcdOXHYx';

const Yelp = {
  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map(bussiness => {
          return {
            id: bussiness.id,
            imageSrc: bussiness.image_url,
            name: bussiness.name,
            address: bussiness.location.address1,
            city: bussiness.location.city,
            state: bussiness.location.state,
            zipCode: bussiness.location.zip_code,
            category: bussiness.categories[0].title,
            rating: bussiness.rating,
            reviewCount: bussiness.review_count
          };
        })}
    });
  }
};

export default Yelp;
