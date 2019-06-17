const key = "5C8mPAcuixUX5FUIVJfLHAgcfcKgd2tf";
const tag = 'cat';
const url = `https://api.giphy.com/v1/gifs/random?api_key=${key}&tag=${tag}`;

const fetchCat = () => {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            let catImage = data.data.image_original_url;
            $('.cat').html(`<img src="${catImage}">`);
        })
        .catch(err => console.log(err));
}

$('button').on('click', fetchCat);
