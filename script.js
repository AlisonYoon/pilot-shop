var products = [
    {
            "name": "Headphones",
            "desc": "a pair of headphones",
            "price": 45.99,
            "originalPrice": 75,
            "discount": 45,
            "image": "https://cdn.shopify.com/s/files/1/1634/8185/products/akg_aviation_av100_anr_headset_01_270x335_crop_top.png?v=1480672940"
        },
        {
            "name": "Coat",
            "desc": "a awesome coat",
            "price": 120,
            "originalPrice": 120,
            "image": "https://cdn.shopify.com/s/files/1/1634/8185/products/alpha_industries_men_s_cwu_pilot_x_flight_jacket_01_270x335_crop_top.png?v=1480672952"
        },
        {
            "name": "Sunglasses",
            "desc": "swanky shades",
            "price": 55,
            "originalPrice": 65,
            "discount": 15,
            "image": "https://cdn.shopify.com/s/files/1/1634/8185/products/american_optical_original_pilot_eyewear_57mm_frame_1_270x335_crop_top.png?v=1480672961"
        },
        {
            "name": "Colour device",
            "desc": "Not sure what this is?!",
            "price": 150,
            "originalPrice": 160,
            "discount": 6,
            "image": "https://cdn.shopify.com/s/files/1/1634/8185/products/aspen_avionics_evolution_01_270x335_crop_top.png?v=1480672974"
        },
        {
            "name": "Headphones",
            "desc": "a pair of headphones",
            "price": 45.99,
            "originalPrice": 75,
            "discount": 45,
            "image": "https://cdn.shopify.com/s/files/1/1634/8185/products/akg_aviation_av100_anr_headset_01_270x335_crop_top.png?v=1480672940"
        },
        {
            "name": "Coat",
            "desc": "a awesome coat",
            "price": 120,
            "originalPrice": 120,
            "image": "https://cdn.shopify.com/s/files/1/1634/8185/products/alpha_industries_men_s_cwu_pilot_x_flight_jacket_01_270x335_crop_top.png?v=1480672952"
        },
        {
            "name": "Sunglasses",
            "desc": "swanky shades",
            "price": 55,
            "originalPrice": 65,
            "discount": 15,
            "image": "https://cdn.shopify.com/s/files/1/1634/8185/products/american_optical_original_pilot_eyewear_57mm_frame_1_270x335_crop_top.png?v=1480672961"
        },
        {
            "name": "Colour device",
            "desc": "Not sure what this is?!",
            "price": 150,
            "originalPrice": 160,
            "discount": 6,
            "image": "https://cdn.shopify.com/s/files/1/1634/8185/products/aspen_avionics_evolution_01_270x335_crop_top.png?v=1480672974"
        }
    ]

// var productList = JSON.parse(products)   This is only if JSON is string.
var template = document.getElementById('list-item').innerHTML

var compiledTemplate = Handlebars.compile(template)

products.forEach(function(product) {
    var rendered = compiledTemplate(product)
    console.log(rendered)
    document.querySelector('.products-list').innerHTML += rendered

})