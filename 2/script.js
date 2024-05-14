const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "I'm reading a book on anti-gravity. It's impossible to put down!",
    "Why couldn't the bicycle stand up by itself? It was two-tired.",
    "What do you call fake spaghetti? An impasta!",
    "Why don't skeletons fight each other? They don't have the guts!",
    "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    "What do you call a fish wearing a bowtie? Sofishticated.",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "I used to be a baker, but I couldn't make enough dough.",
    "Why don't eggs tell jokes? Because they might crack up!",
    "I'm trying to organize a hide and seek competition, but it's hard to find good players. They're always hiding.",
    "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
    "Why don't oysters donate to charity? Because they're shellfish.",
    "I told my computer I needed a break, and now it won't stop sending me vacation ads.",
    "I used to play piano by ear, but now I use my hands.",
    "Why did the tomato turn red? Because it saw the salad dressing!",
    "What do you call fake noodles? Impastas!",
    "I'm reading a book on anti-gravity. It's impossible to put down!",
    "Why did the bicycle fall over? Because it was two-tired!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "Why did the tomato turn red? Because it saw the salad dressing!",
    "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
    "I used to be a baker, but I couldn't make enough dough.",
    "Why don't scientists trust atoms? Because they make up everything!",
    "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    "What do you call a fish wearing a bowtie? Sofishticated.",
    "What do you call a fake noodle? An impasta!",
    "Why don't skeletons fight each other? They don't have the guts!",
    "I'm trying to organize a hide and seek competition, but it's hard to find good players. They're always hiding.",
    "Why did the chicken join a band? Because it had the drumsticks.",
    "I used to play piano by ear, but now I use my hands.",
    "Why don't eggs tell jokes? Because they might crack up!",
    "I told my computer I needed a break, and now it won't stop sending me vacation ads.",
    "Why did the scarecrow become a successful neurosurgeon? He was outstanding in his field!",
    "I'm reading a book on anti-gravity. It's impossible to put down!",
    "What do you call a fish wearing a bowtie? Sofishticated.",
    "Why did the bicycle fall over? Because it was two-tired!",
    "What do you get when you cross a snowman and a vampire? Frostbite!",
    "Why don't some couples go to the gym? Because some relationships don't work out!",
    "What do you call an alligator in a vest? An investigator!",
    "Why don't scientists trust atoms? Because they make up everything!",
    "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    "What do you call a fish wearing a bowtie? Sofishticated.",
    "Why did the bicycle fall over? Because it was two-tired!",
    "What do you get when you cross a snowman and a vampire? Frostbite!",
    "Why don't some couples go to the gym? Because some relationships don't work out!",
    "What do you call an alligator in a vest? An investigator!",
    "I used to be a baker, but I couldn't make enough dough.",
    "Why don't eggs tell jokes? Because they might crack up!",
    "I told my computer I needed a break, and now it won't stop sending me vacation ads.",
    "Why did the scarecrow become a successful neurosurgeon? He was outstanding in his field!",
    "I'm reading a book on anti-gravity. It's impossible to put down!",
    "What do you call a fish wearing a bowtie? Sofishticated.",
    "Why did the bicycle fall over? Because it was two-tired!",
    "What do you get when you cross a snowman and a vampire? Frostbite!",
    "Why don't some couples go to the gym? Because some relationships don't work out!",
    "What do you call an alligator in a vest? An investigator!"
];

const randomJokeBtn = document.getElementById("randomJokeBtn");
const jokeContainer = document.getElementById("jokeContainer");

randomJokeBtn.addEventListener("click", displayRandomJoke);

function displayRandomJoke() {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    const joke = jokes[randomIndex];
    jokeContainer.innerHTML = `<p>${joke}</p>`;
}
